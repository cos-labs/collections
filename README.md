# <img src="https://cdn.cos.io/media/images/cos_center_logo_small.original.png" alt="alt text" width="22px" height="22px">  Collections

[![Join the chat at https://gitter.im/cos-labs/collections](https://badges.gitter.im/cos-labs/collections.svg)](https://gitter.im/cos-labs/collections?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Collections is a prototype project at the Center for Open Science. This project is experimental, scope, technologies, code and functionality may change. This app has two main parts. The service stores data about the collection, and the client lets users interact with their collections.


## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)
* [Yarn](https://yarnpkg.com/lang/en/docs/install/)


## Installation

#### Get the code:

    $ git clone git@github.com:cos-labs/collections.git
    $ cd collections

#### Install Dependencies:

    $ yarn install
    $ bower install


## Running

#### Run the service

Follow the set-up instructions in the README for https://github.com/cos-labs/collections-service.

Visit the api at `http://localhost:8000/api/` or admin panel at `http://localhost:8000/admin/`.

#### Run the client

Set up the client to use either OSF staging (`export BACKEND=stage`) or production `export BACKEND=prod`. If you're having issues getting staging to work, try using production.

    $ ember serve

Visit your app at [http://localhost:4200](http://localhost:4200).


### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

`export BACKEND=prod`

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)


# How to edit your meeting's landing page

Editing a landing page involves editing a nested settings document. It's not as hard as it sounds, we promise! There are three important sections in the settings: `branding`, `layout`, and `data`.

### Branding

Branding mostly determines the colors that your landing page will default to, and should generally be a riff on colors of your organization, or whichever colors you typically use for your meeting's website. Colors are specified in hexadecimal, e.g. `#942ae8`. If the color is all the same character (i.e. `#777777`), the shorthand `#777` is also accepted. You can use w3school's [color picker](https://www.w3schools.com/colors/colors_picker.asp) to find the hexadecimal code for a color you like.
```
"branding": {
    "colors": {
        "primary": "#444",
        "secondary": "#fff",
        "background": "#000",
        "text": "#fff"
    }
}
```
`primary` designates the color of the background for the meeting's navbar. `secondary` designates the text color for the same. `background` and `text` designate the respective colors for the title layer.

### Layout

Layout is formatted in the following way:

`component`: name of the ember component.
`section-header`: an id applied to that layer for link anchoring (currently not fully implemented)
`settings`: where all information about the specific preferences / styling / content of that layer goes

```
  "layers": [
    {
      "settings": {
        "tagline": "To customize the layout, color schemes, and other options for this page, as well as to remove this message, click Settings in the top-right-hand corner.",
        "hide-from-nav": true
      },
      "component": "section-title",
      "section-header": "Landing Title"
    },
    {
      "settings": {
        "hide-from-nav": true
      },
      "component": "section-menu",
      "section-header": "menu"
    },
    {
      "settings": {
        "body": "Absorption unpredictable nuclear energy inertia exploration  unbelievable. Aven cycle fossil fuel mantle spectacular achieving. Potential unbelievable oxygen minerals spectrum geo-science. Probe centigrade data ratio marine relationships between. Environment black hole enzyme stage trade winds hemisphere."
      },
      "component": "section-paragraph",
      "section-header": "Why We Exist"
    },
    {
      "settings": {},
      "component": "section-file-grid",
      "section-header": "Files"
    },
    {
      "settings": {
        "img-url": "https://images.unsplash.com/photo-1505069148894-186e622d23a0",
        "hide-from-nav": true
      },
      "component": "section-splash-image",
      "section-header": "Splash Image"
    },
    {
      "settings": {
        "body": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis...",
        "title": "About Our Organization",
        "text-color": "#fff",
        "background-color": "#c44b38"
      },
      "component": "section-paragraph",
      "section-header": "About Our Organization"
    }
  ],
```


#### General

The three following parameters can be specified for any of the following layers.

* `background-color`: A hex value that specifies the color of the background.
* `text-color`: A hex value that specifies the color of the text.
* `hide-from-nav`: if `true`, will not include the item in the navbar (`section-menu`) component

#### Title Layer

_Shows the title of the conference, along with a tagline or description for the conference._

* `title` (optional): Overrides the title of the collection, to be displayed in the title layer.
* `tagline` (optional): Overrides the description of the collection, to be displayed in the title layer.

#### Paragraph Layer

_Shows a paragraph filled with custom text from the meeting, with an optional title._

* `title` (optional): The title that will be displayed in the layer above the paragraph text.
* `body`: The main text of the paragraph.

#### Image Layer

_Displays a full-width image on the meeting page. This image can be used_

* `img-url`: The URL of the image you want to load for this layer. Make sure it's high enough
definition to span the width of your landing page, but not so large that it will take a long
time to load!

* `TODO`: Make the height adjustable up to a certain height.

#### Schedule Layer

* no additional parameters

#### Speakers Layer

* no additional parameters 

#### Presentation Table Layer

* NOTE: changing the `background-color` for this layer will only affect the color of the header row.

#### Sponsors Layer

* `data`: the name of the key in the `data` segment that you want to be loaded. If you wanted to use the following example date, this line in the settings would look like `"data": "sponsor_categories"`.

Example:
```
"sponsor-categories": [
    {
        "category": "Gold",
        "sponsors": [
        {
            "name": "CompanyName",
            "website_url": "http://example.com",
            "img_url": "http://example.com/presskit/company_logo.jpg"
        },
        {
            "name": "CompanyName",
            "website_url": "http://example.com",
            "img_url": "http://example.com/presskit/company_logo.jpg"
        },
        ...
        {
            "name": "CompanyName",
            "website_url": "http://example.com",
            "img_url": "http://example.com/presskit/company_logo.jpg"
        }
    },
    {
        "category": "Silver",
        "sponsors": [
        {
            ...
        },
        {
            ...
        },
        ...
        {
            ...
        }
]
```
