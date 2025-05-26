# Sauna Planning Mode

The project can now be configured to run in **sauna** mode. This mode does not change functionality yet but prepares the codebase for future sauna specific features such as custom items and textures.

To enable sauna mode set the `projectMode` configuration value to `SAUNA` before creating the `BlueprintJS` instance:

```javascript
import { Configuration, configProjectMode } from './core/configuration.js';
Configuration.setValue(configProjectMode, 'SAUNA');
```

Future commits can use this flag to load sauna related assets or adjust defaults.
