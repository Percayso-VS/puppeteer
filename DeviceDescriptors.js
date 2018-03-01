/**
 * Copyright 2017 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = [
  {
    "name": "Chrome Linux 57",
    "viewport": {
      "width": 1920,
      "height": 1080,
      "availWidth":1920,
      "availHeight":1080,
      "isMobile": false,
      "hasTouch": false,
      "isLandscape": true
    },
    "userAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36",
    "navigator": {
      "mimeTypes": [
        {
          "enabledPlugin": [
            "Chrome PDF Viewer"
          ],
          "description": "",
          "suffixes": "pdf",
          "type": "application/pdf"
        },
        {
          "enabledPlugin": [
            "Chrome PDF Plugin"
          ],
          "description": "Portable Document Format",
          "suffixes": "pdf",
          "type": "application/x-google-chrome-pdf"
        },
        {
          "enabledPlugin": [
            "Native Client"
          ],
          "description": "Native Client Executable",
          "suffixes": "",
          "type": "application/x-nacl"
        },
        {
          "enabledPlugin": [
            "Native Client"
          ],
          "description": "Portable Native Client Executable",
          "suffixes": "",
          "type": "application/x-pnacl"
        },
        {
          "enabledPlugin": [
            "Widevine Content Decryption Module"
          ],
          "description": "Widevine Content Decryption Module",
          "suffixes": "",
          "type": "application/x-ppapi-widevine-cdm"
        }
      ],
      "plugins": [
        {
          "mimeType": [
            "application/x-google-chrome-pdf"
          ],
          "length": 1,
          "description": "Portable Document 12 Format",
          "filename": "internal-pdf-viewer",
          "name": "Chrome PDF Plugin"
        },
        {
          "mimeType": [
            "application/pdf"
          ],
          "length": 1,
          "description": "",
          "filename": "mhjfbmdgcfjbbpaeojofohoefgiehjai",
          "name": "Chrome PDF Viewer"
        },
        {
          "mimeType": [
            "application/x-nacl",
            "application/x-pnacl"
          ],
          "length": 2,
          "description": "",
          "filename": "internal-nacl-plugin",
          "name": "Native Client"
        },
        {
          "mimeType": [
            "application/x-ppapi-widevine-cdm"
          ],
          "length": 1,
          "description": "Enables Widevine licenses for playback of HTML audio/video content. (version: 1.4.9.1070)",
          "filename": "libwidevinecdmadapter.so",
          "name": "Widevine Content Decryption Module"
        }
      ],
      "permissions": [
        {
          "name": "geolocation",
          "state": "prompt"
        },
        {
          "name": "notifications",
          "state": "prompt"
        },
        {
          "name": "midi",
          "state": "granted"
        },
        {
          "name": "midi",
          "state": "granted",
          "sysex": true
        },
        {
          "name":"push",
          "userVisibleOnly":true,
          "userVisible":true,
          "state": "prompt"
        }
      ],
      "doNotTrack": null,
      "onLine": true,
      "languages": [
        "en-GB",
        "en-US",
        "en"
      ],
      "webdriver":false,
      "language": "en-GB",
      "userAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36",
      "product": "Gecko",
      "platform": "Linux x86_64",
      "appVersion": "5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36",
      "appName": "Netscape",
      "appCodeName": "Mozilla",
      "cookieEnabled": true,
      "hardwareConcurrency": 4,
      "maxTouchPoints": 0,
      "vendor": "Google Inc.",
      "productSub": "20030107",
      "vendorSub": ""
    },
    "webGLInfo": {
      "renderer": "Mesa DRI Intel(R) HD Graphics 520 (Skylake GT2) ",
      "vendor": "Intel Open Source Technology Center",
      "unmaskedRenderer": 37446,
      "unmaskedVendor": 37445
    },
    "requestHeaders": {
      "upgrade-insecure-requests": "1",
      "accept-language": "en-GB,en-US;q=0.8,en;q=0.6"
    }
  },
  {
    'name': 'Blackberry PlayBook',
    'userAgent': 'Mozilla/5.0 (PlayBook; U; RIM Tablet OS 2.1.0; en-US) AppleWebKit/536.2+ (KHTML like Gecko) Version/7.2.1.0 Safari/536.2+',
    'viewport': {
      'width': 600,
      'height': 1024,
      'deviceScaleFactor': 1,
      'isMobile': true,
      'hasTouch': true,
      'isLandscape': false
    }
  },
  {
    'name': 'Blackberry PlayBook landscape',
    'userAgent': 'Mozilla/5.0 (PlayBook; U; RIM Tablet OS 2.1.0; en-US) AppleWebKit/536.2+ (KHTML like Gecko) Version/7.2.1.0 Safari/536.2+',
    'viewport': {
      'width': 1024,
      'height': 600,
      'deviceScaleFactor': 1,
      'isMobile': true,
      'hasTouch': true,
      'isLandscape': true
    }
  },
  {
    'name': 'BlackBerry Z30',
    'userAgent': 'Mozilla/5.0 (BB10; Touch) AppleWebKit/537.10+ (KHTML, like Gecko) Version/10.0.9.2372 Mobile Safari/537.10+',
    'viewport': {
      'width': 360,
      'height': 640,
      'deviceScaleFactor': 2,
      'isMobile': true,
      'hasTouch': true,
      'isLandscape': false
    }
  },
  {
    'name': 'BlackBerry Z30 landscape',
    'userAgent': 'Mozilla/5.0 (BB10; Touch) AppleWebKit/537.10+ (KHTML, like Gecko) Version/10.0.9.2372 Mobile Safari/537.10+',
    'viewport': {
      'width': 640,
      'height': 360,
      'deviceScaleFactor': 2,
      'isMobile': true,
      'hasTouch': true,
      'isLandscape': true
    }
  },
  {
    'name': 'Galaxy Note 3',
    'userAgent': 'Mozilla/5.0 (Linux; U; Android 4.3; en-us; SM-N900T Build/JSS15J) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
    'viewport': {
      'width': 360,
      'height': 640,
      'deviceScaleFactor': 3,
      'isMobile': true,
      'hasTouch': true,
      'isLandscape': false
    }
  },
  {
    'name': 'Galaxy Note 3 landscape',
    'userAgent': 'Mozilla/5.0 (Linux; U; Android 4.3; en-us; SM-N900T Build/JSS15J) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
    'viewport': {
      'width': 640,
      'height': 360,
      'deviceScaleFactor': 3,
      'isMobile': true,
      'hasTouch': true,
      'isLandscape': true
    }
  },
  {
    'name': 'Galaxy Note II',
    'userAgent': 'Mozilla/5.0 (Linux; U; Android 4.1; en-us; GT-N7100 Build/JRO03C) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
    'viewport': {
      'width': 360,
      'height': 640,
      'deviceScaleFactor': 2,
      'isMobile': true,
      'hasTouch': true,
      'isLandscape': false
    }
  },
  {
    'name': 'Galaxy Note II landscape',
    'userAgent': 'Mozilla/5.0 (Linux; U; Android 4.1; en-us; GT-N7100 Build/JRO03C) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
    'viewport': {
      'width': 640,
      'height': 360,
      'deviceScaleFactor': 2,
      'isMobile': true,
      'hasTouch': true,
      'isLandscape': true
    }
  },
  {
    'name': 'Galaxy S III',
    'userAgent': 'Mozilla/5.0 (Linux; U; Android 4.0; en-us; GT-I9300 Build/IMM76D) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
    'viewport': {
      'width': 360,
      'height': 640,
      'deviceScaleFactor': 2,
      'isMobile': true,
      'hasTouch': true,
      'isLandscape': false
    }
  },
  {
    'name': 'Galaxy S III landscape',
    'userAgent': 'Mozilla/5.0 (Linux; U; Android 4.0; en-us; GT-I9300 Build/IMM76D) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
    'viewport': {
      'width': 640,
      'height': 360,
      'deviceScaleFactor': 2,
      'isMobile': true,
      'hasTouch': true,
      'isLandscape': true
    }
  },
  {
    'name': 'Galaxy S5',
    'userAgent': 'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/%s Mobile Safari/537.36',
    'viewport': {
      'width': 360,
      'height': 640,
      'deviceScaleFactor': 3,
      'isMobile': true,
      'hasTouch': true,
      'isLandscape': false
    }
  },
  {
    'name': 'Galaxy S5 landscape',
    'userAgent': 'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/%s Mobile Safari/537.36',
    'viewport': {
      'width': 640,
      'height': 360,
      'deviceScaleFactor': 3,
      'isMobile': true,
      'hasTouch': true,
      'isLandscape': true
    }
  },
  {
    'name': 'iPad',
    'userAgent': 'Mozilla/5.0 (iPad; CPU OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1',
    'viewport': {
      'width': 768,
      'height': 1024,
      'deviceScaleFactor': 2,
      'isMobile': true,
      'hasTouch': true,
      'isLandscape': false
    }
  },
  {
    'name': 'iPad landscape',
    'userAgent': 'Mozilla/5.0 (iPad; CPU OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1',
    'viewport': {
      'width': 1024,
      'height': 768,
      'deviceScaleFactor': 2,
      'isMobile': true,
      'hasTouch': true,
      'isLandscape': true
    }
  },
  {
    'name': 'iPad Mini',
    'userAgent': 'Mozilla/5.0 (iPad; CPU OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1',
    'viewport': {
      'width': 768,
      'height': 1024,
      'deviceScaleFactor': 2,
      'isMobile': true,
      'hasTouch': true,
      'isLandscape': false
    }
  },
  {
    'name': 'iPad Mini landscape',
    'userAgent': 'Mozilla/5.0 (iPad; CPU OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1',
    'viewport': {
      'width': 1024,
      'height': 768,
      'deviceScaleFactor': 2,
      'isMobile': true,
      'hasTouch': true,
      'isLandscape': true
    }
  },
  {
    'name': 'iPad Pro',
    'userAgent': 'Mozilla/5.0 (iPad; CPU OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1',
    'viewport': {
      'width': 1024,
      'height': 1366,
      'deviceScaleFactor': 2,
      'isMobile': true,
      'hasTouch': true,
      'isLandscape': false
    }
  },
  {
    'name': 'iPad Pro landscape',
    'userAgent': 'Mozilla/5.0 (iPad; CPU OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1',
    'viewport': {
      'width': 1366,
      'height': 1024,
      'deviceScaleFactor': 2,
      'isMobile': true,
      'hasTouch': true,
      'isLandscape': true
    }
  },
  {
    'name': 'iPhone 4',
    'userAgent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1',
    'viewport': {
      'width': 320,
      'height': 480,
      'deviceScaleFactor': 2,
      'isMobile': true,
      'hasTouch': true,
      'isLandscape': false
    }
  },
  {
    'name': 'iPhone 4 landscape',
    'userAgent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1',
    'viewport': {
      'width': 480,
      'height': 320,
      'deviceScaleFactor': 2,
      'isMobile': true,
      'hasTouch': true,
      'isLandscape': true
    }
  },
  {
    'name': 'iPhone 5',
    'userAgent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1',
    'viewport': {
      'width': 320,
      'height': 568,
      'deviceScaleFactor': 2,
      'isMobile': true,
      'hasTouch': true,
      'isLandscape': false
    }
  },
  {
    'name': 'iPhone 5 landscape',
    'userAgent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1',
    'viewport': {
      'width': 568,
      'height': 320,
      'deviceScaleFactor': 2,
      'isMobile': true,
      'hasTouch': true,
      'isLandscape': true
    }
  },
  {
    'name': 'iPhone 6',
    'userAgent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1',
    'viewport': {
      'width': 375,
      'height': 667,
      'deviceScaleFactor': 2,
      'isMobile': true,
      'hasTouch': true,
      'isLandscape': false
    }
  },
  {
    'name': 'iPhone 6 landscape',
    'userAgent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1',
    'viewport': {
      'width': 667,
      'height': 375,
      'deviceScaleFactor': 2,
      'isMobile': true,
      'hasTouch': true,
      'isLandscape': true
    }
  },
  {
    'name': 'iPhone 6 Plus',
    'userAgent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1',
    'viewport': {
      'width': 414,
      'height': 736,
      'deviceScaleFactor': 3,
      'isMobile': true,
      'hasTouch': true,
      'isLandscape': false
    }
  },
  {
    'name': 'iPhone 6 Plus landscape',
    'userAgent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1',
    'viewport': {
      'width': 736,
      'height': 414,
      'deviceScaleFactor': 3,
      'isMobile': true,
      'hasTouch': true,
      'isLandscape': true
    }
  },
  {
    'name': 'iPhone X',
    'userAgent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
    'viewport': {
      'width': 375,
      'height': 812,
      'deviceScaleFactor': 3,
      'isMobile': true,
      'hasTouch': true,
      'isLandscape': false
    }
  },
  {
    'name': 'iPhone X landscape',
    'userAgent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
    'viewport': {
      'width': 812,
      'height': 375,
      'deviceScaleFactor': 3,
      'isMobile': true,
      'hasTouch': true,
      'isLandscape': true
    }
  },
  {
    'name': 'Kindle Fire HDX',
    'userAgent': 'Mozilla/5.0 (Linux; U; en-us; KFAPWI Build/JDQ39) AppleWebKit/535.19 (KHTML, like Gecko) Silk/3.13 Safari/535.19 Silk-Accelerated=true',
    'viewport': {
      'width': 800,
      'height': 1280,
      'deviceScaleFactor': 2,
      'isMobile': true,
      'hasTouch': true,
      'isLandscape': false
    }
  },
  {
    'name': 'Kindle Fire HDX landscape',
    'userAgent': 'Mozilla/5.0 (Linux; U; en-us; KFAPWI Build/JDQ39) AppleWebKit/535.19 (KHTML, like Gecko) Silk/3.13 Safari/535.19 Silk-Accelerated=true',
    'viewport': {
      'width': 1280,
      'height': 800,
      'deviceScaleFactor': 2,
      'isMobile': true,
      'hasTouch': true,
      'isLandscape': true
    }
  },
  {
    'name': 'LG Optimus L70',
    'userAgent': 'Mozilla/5.0 (Linux; U; Android 4.4.2; en-us; LGMS323 Build/KOT49I.MS32310c) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/%s Mobile Safari/537.36',
    'viewport': {
      'width': 384,
      'height': 640,
      'deviceScaleFactor': 1.25,
      'isMobile': true,
      'hasTouch': true,
      'isLandscape': false
    }
  },
  {
    'name': 'LG Optimus L70 landscape',
    'userAgent': 'Mozilla/5.0 (Linux; U; Android 4.4.2; en-us; LGMS323 Build/KOT49I.MS32310c) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/%s Mobile Safari/537.36',
    'viewport': {
      'width': 640,
      'height': 384,
      'deviceScaleFactor': 1.25,
      'isMobile': true,
      'hasTouch': true,
      'isLandscape': true
    }
  },
  {
    'name': 'Microsoft Lumia 550',
    'userAgent': 'Mozilla/5.0 (Windows Phone 10.0; Android 4.2.1; Microsoft; Lumia 550) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Mobile Safari/537.36 Edge/14.14263',
    'viewport': {
      'width': 640,
      'height': 360,
      'deviceScaleFactor': 2,
      'isMobile': true,
      'hasTouch': true,
      'isLandscape': false
    }
  },
  {
    'name': 'Microsoft Lumia 950',
    'userAgent': 'Mozilla/5.0 (Windows Phone 10.0; Android 4.2.1; Microsoft; Lumia 950) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Mobile Safari/537.36 Edge/14.14263',
    'viewport': {
      'width': 360,
      'height': 640,
      'deviceScaleFactor': 4,
      'isMobile': true,
      'hasTouch': true,
      'isLandscape': false
    }
  },
  {
    'name': 'Microsoft Lumia 950 landscape',
    'userAgent': 'Mozilla/5.0 (Windows Phone 10.0; Android 4.2.1; Microsoft; Lumia 950) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Mobile Safari/537.36 Edge/14.14263',
    'viewport': {
      'width': 640,
      'height': 360,
      'deviceScaleFactor': 4,
      'isMobile': true,
      'hasTouch': true,
      'isLandscape': true
    }
  },
  {
    'name': 'Nexus 10',
    'userAgent': 'Mozilla/5.0 (Linux; Android 4.3; Nexus 10 Build/JSS15Q) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/%s Safari/537.36',
    'viewport': {
      'width': 800,
      'height': 1280,
      'deviceScaleFactor': 2,
      'isMobile': true,
      'hasTouch': true,
      'isLandscape': false
    }
  },
  {
    'name': 'Nexus 10 landscape',
    'userAgent': 'Mozilla/5.0 (Linux; Android 4.3; Nexus 10 Build/JSS15Q) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/%s Safari/537.36',
    'viewport': {
      'width': 1280,
      'height': 800,
      'deviceScaleFactor': 2,
      'isMobile': true,
      'hasTouch': true,
      'isLandscape': true
    }
  },
  {
    'name': 'Nexus 4',
    'userAgent': 'Mozilla/5.0 (Linux; Android 4.4.2; Nexus 4 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/%s Mobile Safari/537.36',
    'viewport': {
      'width': 384,
      'height': 640,
      'deviceScaleFactor': 2,
      'isMobile': true,
      'hasTouch': true,
      'isLandscape': false
    }
  },
  {
    'name': 'Nexus 4 landscape',
    'userAgent': 'Mozilla/5.0 (Linux; Android 4.4.2; Nexus 4 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/%s Mobile Safari/537.36',
    'viewport': {
      'width': 640,
      'height': 384,
      'deviceScaleFactor': 2,
      'isMobile': true,
      'hasTouch': true,
      'isLandscape': true
    }
  },
  {
    'name': 'Nexus 5',
    'userAgent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/%s Mobile Safari/537.36',
    'viewport': {
      'width': 360,
      'height': 640,
      'deviceScaleFactor': 3,
      'isMobile': true,
      'hasTouch': true,
      'isLandscape': false
    }
  },
  {
    'name': 'Nexus 5 landscape',
    'userAgent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/%s Mobile Safari/537.36',
    'viewport': {
      'width': 640,
      'height': 360,
      'deviceScaleFactor': 3,
      'isMobile': true,
      'hasTouch': true,
      'isLandscape': true
    }
  },
  {
    'name': 'Nexus 5X',
    'userAgent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/%s Mobile Safari/537.36',
    'viewport': {
      'width': 412,
      'height': 732,
      'deviceScaleFactor': 2.625,
      'isMobile': true,
      'hasTouch': true,
      'isLandscape': false
    }
  },
  {
    'name': 'Nexus 5X landscape',
    'userAgent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/%s Mobile Safari/537.36',
    'viewport': {
      'width': 732,
      'height': 412,
      'deviceScaleFactor': 2.625,
      'isMobile': true,
      'hasTouch': true,
      'isLandscape': true
    }
  },
  {
    'name': 'Nexus 6',
    'userAgent': 'Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/%s Mobile Safari/537.36',
    'viewport': {
      'width': 412,
      'height': 732,
      'deviceScaleFactor': 3.5,
      'isMobile': true,
      'hasTouch': true,
      'isLandscape': false
    }
  },
  {
    'name': 'Nexus 6 landscape',
    'userAgent': 'Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/%s Mobile Safari/537.36',
    'viewport': {
      'width': 732,
      'height': 412,
      'deviceScaleFactor': 3.5,
      'isMobile': true,
      'hasTouch': true,
      'isLandscape': true
    }
  },
  {
    'name': 'Nexus 6P',
    'userAgent': 'Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/%s Mobile Safari/537.36',
    'viewport': {
      'width': 412,
      'height': 732,
      'deviceScaleFactor': 3.5,
      'isMobile': true,
      'hasTouch': true,
      'isLandscape': false
    }
  },
  {
    'name': 'Nexus 6P landscape',
    'userAgent': 'Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/%s Mobile Safari/537.36',
    'viewport': {
      'width': 732,
      'height': 412,
      'deviceScaleFactor': 3.5,
      'isMobile': true,
      'hasTouch': true,
      'isLandscape': true
    }
  },
  {
    'name': 'Nexus 7',
    'userAgent': 'Mozilla/5.0 (Linux; Android 4.3; Nexus 7 Build/JSS15Q) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/%s Safari/537.36',
    'viewport': {
      'width': 600,
      'height': 960,
      'deviceScaleFactor': 2,
      'isMobile': true,
      'hasTouch': true,
      'isLandscape': false
    }
  },
  {
    'name': 'Nexus 7 landscape',
    'userAgent': 'Mozilla/5.0 (Linux; Android 4.3; Nexus 7 Build/JSS15Q) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/%s Safari/537.36',
    'viewport': {
      'width': 960,
      'height': 600,
      'deviceScaleFactor': 2,
      'isMobile': true,
      'hasTouch': true,
      'isLandscape': true
    }
  },
  {
    'name': 'Nokia Lumia 520',
    'userAgent': 'Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Lumia 520)',
    'viewport': {
      'width': 320,
      'height': 533,
      'deviceScaleFactor': 1.5,
      'isMobile': true,
      'hasTouch': true,
      'isLandscape': false
    }
  },
  {
    'name': 'Nokia Lumia 520 landscape',
    'userAgent': 'Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Lumia 520)',
    'viewport': {
      'width': 533,
      'height': 320,
      'deviceScaleFactor': 1.5,
      'isMobile': true,
      'hasTouch': true,
      'isLandscape': true
    }
  },
  {
    'name': 'Nokia N9',
    'userAgent': 'Mozilla/5.0 (MeeGo; NokiaN9) AppleWebKit/534.13 (KHTML, like Gecko) NokiaBrowser/8.5.0 Mobile Safari/534.13',
    'viewport': {
      'width': 480,
      'height': 854,
      'deviceScaleFactor': 1,
      'isMobile': true,
      'hasTouch': true,
      'isLandscape': false
    }
  },
  {
    'name': 'Nokia N9 landscape',
    'userAgent': 'Mozilla/5.0 (MeeGo; NokiaN9) AppleWebKit/534.13 (KHTML, like Gecko) NokiaBrowser/8.5.0 Mobile Safari/534.13',
    'viewport': {
      'width': 854,
      'height': 480,
      'deviceScaleFactor': 1,
      'isMobile': true,
      'hasTouch': true,
      'isLandscape': true
    }
  }
];
for (const device of module.exports)
  module.exports[device.name] = device;
