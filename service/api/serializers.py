import datetime
from rest_framework import exceptions
from rest_framework_json_api import serializers
from models import Collection, Group, Item, User
from base.serializers import RelationshipField


class UserSerializer(serializers.Serializer):
    id = serializers.CharField(read_only=True)
    username = serializers.CharField()
    email = serializers.EmailField()

    class Meta:
        model = User

    class JSONAPIMeta:
        resource_name = 'users'

    def create(self, validated_data):
        _id = validated_data['id']
        username = validated_data['username']
        email = validated_data['email']
        return User.objects.create_user(
            id=_id,
            username=username,
            email=email,
            password='password'
        )


class ItemSerializer(serializers.Serializer):
    id = serializers.CharField(read_only=True)
    source_id = serializers.CharField()
    title = serializers.CharField(required=True)
    type = serializers.CharField()
    status = serializers.CharField()
    url = serializers.URLField()
    created_by = UserSerializer(read_only=True)
    metadata = serializers.CharField(allow_blank=True)
    date_added = serializers.DateTimeField(read_only=True, allow_null=True)
    date_submitted = serializers.DateTimeField(read_only=True)

    class Meta:
        model = Item

    class JSONAPIMeta:
        resource_name = 'items'

    def create(self, validated_data):
        user = self.context['request'].user
        collection_id = self.context.get('collection_id', None) or self.context['request'].parser_context['kwargs'].get('pk', None)
        collection = Collection.objects.get(id=collection_id)
        group_id = self.context.get('group_id', None) or self.context['request'].parser_context['kwargs'].get('group_id', None)
        if group_id:
            validated_data['group'] = Group.objects.get(id=group_id)
        status = 'pending'
        if user.id == collection.created_by_id:
            status = 'approved'
            validated_data['date_added'] = datetime.datetime.now()
        validated_data['status'] = status
        item = Item.objects.create(
            created_by=user,
            collection=collection,
            **validated_data
        )
        return item

    def update(self, item, validated_data):
        user = self.context['request'].user
        status = validated_data.get('status', item.status)
        collection_id = self.context.get('collection_id', None) or self.context['request'].parser_context['kwargs'].get('pk', None)
        if collection_id:
            collection = Collection.objects.get(id=collection_id)
        else:
            collection = item.collection

        if status != item.status and user.id != collection.created_by_id:
            raise exceptions.PermissionDenied(detail='Cannot change submission status.')
        elif user.id != item.created_by_id and validated_data.keys() != ['status']:
            raise exceptions.PermissionDenied(detail='Cannot update another user\'s submission.')

        group_id = self.context.get('group_id', None) or self.context['request'].parser_context['kwargs'].get('group_id', None)
        if group_id:
            item.group = Group.objects.get(id=group_id)

        item.source_id = validated_data.get('source_id', item.source_id)
        item.title = validated_data.get('title', item.title)
        item.type = validated_data.get('type', item.type)
        item.status = status
        item.url = validated_data.get('url', item.url)
        item.metadata = validated_data.get('metadata', item.metadata)
        item.save()
        return item


class GroupSerializer(serializers.Serializer):
    id = serializers.CharField(read_only=True)
    title = serializers.CharField(required=True)
    description = serializers.CharField(allow_blank=True)
    created_by = UserSerializer(read_only=True)
    date_created = serializers.DateTimeField(read_only=True)
    date_updated = serializers.DateTimeField(read_only=True)
    items = RelationshipField(
        related_view='group-item-list',
        related_view_kwargs={'pk': '<collection.id>', 'group_id': '<pk>'}
    )

    class Meta:
        model = Group

    class JSONAPIMeta:
        resource_name = 'groups'

    def create(self, validated_data):
        user = self.context['request'].user
        collection_id = self.context.get('collection_id', None) or self.context['request'].parser_context['kwargs'].get('pk', None)
        collection = Collection.objects.get(id=collection_id)
        return Group.objects.create(
            created_by=user,
            collection=collection,
            **validated_data
        )

    def update(self, group, validated_data):
        group.title = validated_data['title']
        description = validated_data['description']
        if description:
            group.description = description
        group.save()
        return group


class CollectionSerializer(serializers.Serializer):
    id = serializers.CharField(read_only=True)
    title = serializers.CharField(required=True)
    description = serializers.CharField(allow_blank=True)
    tags = serializers.CharField(allow_blank=True)
    created_by = UserSerializer(read_only=True)
    date_created = serializers.DateTimeField(read_only=True)
    date_updated = serializers.DateTimeField(read_only=True)
    groups = RelationshipField(
        related_view='collection-group-list',
        related_view_kwargs={'pk': '<pk>'}
    )
    items = RelationshipField(
        related_view='collection-item-list',
        related_view_kwargs={'pk': '<pk>'}
    )

    class Meta:
        model = Collection

    class JSONAPIMeta:
        resource_name = 'collections'

    def create(self, validated_data):
        user = self.context['request'].user
        return Collection.objects.create(created_by=user, **validated_data)

    def update(self, collection, validated_data):
        collection.title = validated_data['title']
        description = validated_data['description']
        tags = validated_data['tags']
        if description:
            collection.description = description
        if tags:
            collection.tags = tags
        collection.save()
        return collection
