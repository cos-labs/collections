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

Set up the client to use either OSF staging (`export BACKEND=stage`) or production `export BACKEND=prod`.

    $ ember serve

Visit your app at [http://localhost:4200](http://localhost:4200).


### Running Tests

* `ember test`
* `ember test --server`

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

The layout is a list of sections, defined in the same format as this example:
```
{
    component: section-paragraph,
    settings: {
        background-color: #333,
        text-color: #eee,
        title: This Is My Title,
        body: This is the body of my paragraph. It can be however long.
    }
}
```

#### General

The two following parameters can be specified for any of the following layers.

* `background-color`: A hex value that specifies the color of the background.
* `text-color`: A hex value that specifies the color of the text.
* `hide-from-nav`: Set to `true` to not include this layer in the internal nav menu.

#### Title Section

_Shows the title of the conference, along with a tagline or description for the conference._
* `component: section-title`
* `title` (optional): Overrides the title of the collection, to be displayed in the title layer.
* `tagline` (optional): Overrides the description of the collection, to be displayed in the title layer.

![Title Section](https://photos-2.dropbox.com/t/2/AAALmxp2BK-j4XpKL0rmsBg6ekElDcNPsBVRK7wjBtDdeQ/12/50460222/png/32x32/3/1510783200/0/2/Screenshot%202017-11-15%2012.35.17.png/ENL75iYY8MQJIAIoAg/mDVsgIfcwEaJVQaSNngf1GY6rAB2J_LwjcHM83eaR6g?dl=0&size=2048x1536&size_mode=3)

#### Paragraph Section

_Shows a paragraph filled with custom text from the meeting, with an optional title._
* `component: section-paragraph`
* `title` (optional): The title that will be displayed in the layer above the paragraph text.
* `body`: The main text of the paragraph.

Paragraph section with title:
![Paragraph Section With Title](https://photos-2.dropbox.com/t/2/AAAPiH70E6tUKDOO-MYrUMVIz4apa-bAX12JKfe6gpQBkg/12/50460222/png/32x32/3/1510783200/0/2/Screenshot%202017-11-15%2012.39.47.png/ENL75iYY8cQJIAIoAg/sB9r3z7WY0TN1uS-B_Y3W211nKsuHSemmxBVuibE2EE?dl=0&size=2048x1536&size_mode=3)

Paragraph section without title:
![Paragraph section without title](https://photos-2.dropbox.com/t/2/AABh1Xj6XZ_hqWxFF7EgtackG50oRCvhkdyIVG0ZylrwOQ/12/50460222/png/32x32/3/1510783200/0/2/Screenshot%202017-11-15%2012.41.01.png/ENL75iYY88QJIAIoAg/Ry5pajhCuGMoIgs4UPe9IkyNi3s50rRyQVuCqYhQ8XY?dl=0&size=2048x1536&size_mode=3)

#### Image Layer

_Displays a full-width image on the meeting page._
* `component: section-image`
* `img-url`: The URL of the image you want to load for this layer. Make sure it's high enough
definition to span the width of your landing page, but not so large that it will take a long
time to load!
![Image section](https://photos-2.dropbox.com/t/2/AACAngAiq8ZXjnOyZd2IuqreTM6YZf0JpMH-VeIvMP5FUA/12/50460222/png/32x32/3/1510783200/0/2/Screenshot%202017-11-15%2012.41.57.png/ENL75iYY9MQJIAIoAg/fN6dCXcv1F3I9hyPXHCj1gYdRdam3OL9sHeqHCBCze4?dl=0&size=2048x1536&size_mode=3)

* `TODO`: Make the height adjustable up to a certain height.

#### Schedule Section
* `component: section-schedule`
* no additional parameters
![Schedule Section](https://photos-5.dropbox.com/t/2/AAC4DuU2YmAZVdOS_HACkA6aE3pe5dN7SuvpZfDBklm6ZA/12/50460222/png/32x32/3/1510783200/0/2/Screenshot%202017-11-15%2012.52.30.png/ENL75iYY-MQJIAIoAg/OwtpQdixqZMvc-VW7d63u4CW4zJ55zJlX2bPExFUXko?dl=0&size=800x600&size_mode=3)


#### Speakers Section
* `component: section-contributors`
* no additional parameters 

#### Item List
* `component: section-file-grid`
* NOTE: changing the `background-color` and `text-color` does not affect anything currently.
* The item list has two separate views: the list view and the grid view.

List view:
![List View for Items](https://photos-6.dropbox.com/t/2/AAAUFtHKqSpdnL-djmVODARSk5oN-yDVWFo1c__FMgs00g/12/50460222/png/32x32/3/1510783200/0/2/Screenshot%202017-11-15%2012.48.10.png/ENL75iYY9cQJIAIoAg/c2b7-QjSl5fcvuKY-gEM3DgcrtfXFQuEO0ujBeQMAHM?dl=0&size=800x600&size_mode=3)

Grid view:
![Grid View for Items](https://photos-6.dropbox.com/t/2/AABI6wjVYm6bE-3dXYq2z55zX-ZfFmvdByuEPAfHgoIyvw/12/50460222/png/32x32/3/1510783200/0/2/Screenshot%202017-11-15%2012.49.48.png/ENL75iYY9sQJIAIoAg/znEz2n0LyeIyy7CA7mz9uu4qM0LqUqPjPp7VnaS6dms?dl=0&size=2048x1536&size_mode=3)


#### Sponsors Section
* `component: section-sponsors`
* `data`: the name of the key in the `data` segment that you want to be loaded. If you wanted to use the following example date, this line in the settings would look like `"data": "sponsor_categories"`.

Visual Example:
![Sponsors Section](https://photos-3.dropbox.com/t/2/AADaaIWvqigzqLKjwmskPEyJz95PCfXrktXGaPfYfQWO8A/12/50460222/png/32x32/3/1510783200/0/2/Screenshot%202017-11-15%2012.51.00.png/ENL75iYY98QJIAIoAg/y_fHSF0s2RDnwzh3ONsDvaThGNS4EUFT23oNP7Iw6Q4?dl=0&size=2048x1536&size_mode=3)
Example of Data Structuring:
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
