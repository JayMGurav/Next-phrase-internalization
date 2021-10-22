This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

- next-intl
- next-i18next

## PHRASE API

endpoint:`https://api.phrase.com/v2/`

> note: provide `ACCESS_TOKEN` as Authorization header in `token ACCESS_TOKEN` format

- **List of all projects** `/projects`
- **Single Project** `/projects/:projectId`
- **List of all locales** `/projects/:projectId/locales`
- **Download locale** `projects/:PROJECT_ID/locales/:LOCALE_ID/download?file_format=simple_json`

<!-- ```json
// List of all locales
 [
    {
      id: 'c320c4ac2b850e0cffeb89bc5a208456',
      name: 'en',
      code: 'en',
      default: true,
      main: false,
      rtl: false,
      plural_forms: [Array],
      created_at: '2021-10-22T08:44:23Z',
      updated_at: '2021-10-22T08:44:23Z',
      source_locale: null
    },
    {
      id: '8137e29c847c2236ef574c8ee877cdbc',
      name: 'es',
      code: 'es',
      default: false,
      main: false,
      rtl: false,
      plural_forms: [Array],
      created_at: '2021-10-22T09:03:33Z',
      updated_at: '2021-10-22T09:04:40Z',
      source_locale: null
    },
  ]
}
```




````json
// Single Project
{
  "translations": {
    "id": "96e033d2864c55b9c02f4dc07a2e56ca",
    "name": "Example",
    "slug": "example",
    "main_format": "",
    "shares_translation_memory": true,
    "project_image_url": null,
    "created_at": "2021-10-22T04:35:54Z",
    "updated_at": "2021-10-22T09:04:41Z",
    "account": {
      "id": "149442a6733050b4cbba935f199be54b",
      "name": "MILO",
      "slug": "milo",
      "company": null,
      "created_at": "2021-10-21T13:01:26Z",
      "updated_at": "2021-10-22T09:04:41Z",
      "company_logo_url": null
    },
    "branch": null,
    "space": null
  }
}
````
-->
