---
sidebarDepth: 3
---

# Login

![npm license](https://img.shields.io/npm/l/@liberu-ui/loader.svg) 
![npm download](https://img.shields.io/npm/dm/@liberu-ui/loader.svg) 
![GitHub top language](https://img.shields.io/github/languages/top/liberu-ui/loader.svg) 
![GitHub issues](https://img.shields.io/github/issues/liberu-ui/loader.svg) 
![npm version](https://img.shields.io/npm/v/@liberu-ui/loader.svg) 

Login page is part of the Enso core.

## Customizations

### Changing login logo

in **"\@liberu-ui\ui\src\bulma\pages\auth\components\AuthForm.vue"**
```
<figure class="image logo is-clickable"
    @click="$router.push({ name: 'login' })">
    <img src="logo.svg">
</figure>
```

Therefore by changing the **logo.svg** with own custom logo it will be displayed inside the login page

### Changing login title

Inside **.env** 
```
APP_NAME=<MyAppName>
```
Will be passed to **"/@liberu-ui/ui/src/bulma/pages/auth/components/AuthForm.vue"**
```
{{ meta.appName }}
```

### Control Quotes page-after-login 

Inside **"\config\liberu\config.php"**
```
'showQuote' => true,
```

## Questions & Issues

For questions and support please use the issues functionality
for this package's github repository.

Please make sure to search for existing issues before creating a new issue,
and when opening a new issue, fill the required information in the issue template.

Issues not conforming to the guidelines may be closed immediately.

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[ISC](https://opliberuurce.org/licenses/ISC)
