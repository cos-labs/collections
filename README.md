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


# How to edit your landing page

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

#### Title Layer

* `title`: todo
* `tagline`: todo

#### Paragraph Layer

* `title`: todo
* `body`: todo

#### Image Layer

* `img_url`: todo

#### Schedule Layer

* no parameters

#### Speakers Layer

* no parameters 

#### Presentation Table Layer

* `header_color`: todo

#### Sponsors Layer

* `data`: todo

Example:
```
"sponsor_categories": [
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
