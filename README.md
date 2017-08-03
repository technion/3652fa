# Office 365 MFA Capture Tool

See my blog [here](https://lolware.net/2017/08/01/capturing-mfa-logons.html) for additional information relating to this toolkit.

## Installation

```
git clone git@github.com:technion/3652fa.git
cd 3652fa
bundle install
```

## Starting application

./3652fa.rb

## Development

### Building Javascript

This will require Typescript, because anything that makes Javascript less horrible is a good thing. Do not edit the .js file directly, edit the .tsx file and rebuild it:

    tsc 365admin.tsx --outfile ../public/365admin.js

Be sure any changes to the file come up clean with tslint:

    tslint 365admin.tsx

