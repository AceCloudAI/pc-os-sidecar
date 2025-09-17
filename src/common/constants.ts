const REGIONS = {
  atlanta: 'Atlanta',
  mumbai: 'Mumbai',
  delhi: 'Delhi',
  noida: 'Noida',
};

const SERVICE_PROVIDERS = {
  E2E: 'E2E',
  OS: 'OS',
};

const REGION_HOST_NAME = {
  atlanta: 'us-east-at-1',
  mumbai: 'ap-south-mum-1',
  delhi: 'ap-south-del-1',
  noida: 'ap-south-noi-1',
};

const CLOUD_REGIONS = {
  'us-east-at-1': {
    key: 'us-east-at-1',
    name: 'Atlanta',
    serviceProvider: SERVICE_PROVIDERS.OS ?? 'OS',
  },
  'ap-south-mum-1': {
    key: 'ap-south-mum-1',
    name: 'Mumbai',
    serviceProvider: SERVICE_PROVIDERS.OS ?? 'OS',
  },
  'ap-south-noi-1': {
    key: 'ap-south-noi-1',
    name: 'Noida',
    serviceProvider: 'OS',
  },
  'ap-south-del-1': {
    key: 'Delhi', // key is the value to be actually used when sending request
    name: 'Delhi', // name is the value to be displayed in the UI
    serviceProvider: SERVICE_PROVIDERS.E2E ?? 'E2E', // To decide which gateway to use
  },
};

const SERVICE_IDENTIFIER = {
  OS: 'type1',
  E2E: 'type2',
};

const REGION_MAPPING = {
  'us-east-at-1': {
    name: 'US East (Atlanta)',
    identifier: 'us-east-at-1',
    displayName: 'Atlanta',
    service: SERVICE_IDENTIFIER.OS,
  },
  'ap-south-mum-1': {
    name: 'Asia Pacific (Mumbai)',
    identifier: 'ap-south-mum-1',
    displayName: 'Mumbai',
    service: SERVICE_IDENTIFIER.OS,
  },
  'ap-south-noi-1': {
    name: 'Asia Pacific (Noida)',
    identifier: 'ap-south-noi-1',
    displayName: 'Noida',
    service: SERVICE_IDENTIFIER.OS,
  },
  'ap-south-del-1': {
    name: 'Asia Pacific (Delhi)',
    identifier: 'ap-south-del-1',
    displayName: 'Delhi',
    service: SERVICE_IDENTIFIER.E2E,
  },
};

export {
  REGIONS,
  SERVICE_PROVIDERS,
  REGION_HOST_NAME,
  CLOUD_REGIONS,
  SERVICE_IDENTIFIER,
  REGION_MAPPING,
};
