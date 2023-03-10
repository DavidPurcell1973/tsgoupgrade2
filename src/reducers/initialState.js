export default {
  appStore: {
    username: '',
    password: '',
    isAuthenticated: false,
    isLoading: true,
    token: '',
    tokenExpireAt: null,
    refreshToken: '',
    isWebAppEnabled: true,
    isWebAppPrioritised: false,
    isWebAppVisible: false,
    isWebAppFullScreen: false,
    shouldWebAppRefresh: false,
    webAppUrl: 'https://',
    apiUrl: 'https://',
    seqLoggingEnabled: true,
    isAutoUpdateEnabled: true,
    isBetaEnabled: false,
    showDebugOption: false,
    deviceInfo: {
      serialNumber: 'UnknownSerialNumber',
      androidId: 'UnknownAndroidId',
      macAddress: 'UnknownMacAddress',
      deviceName: 'Unnamed',
    },
    alerts: {
      message: '',
      type: 'warning',
      verboseMessage: '',
      verboseSent: null,
      warningMessage: '',
      warningSent: null,
      errorMessage: '',
      errorSent: null,
    },
    isConnected: false,
    directNetworkStatus: '',
    offlineNetworkStatus: {},
    apiOfflineNetworkStatus: {},
    alternativeAppNames: {},
    availableApps: [],
    userAppConfigs: [],
    authorizedApps: [],
    isRenewingToken: false,
    lastRenewingTokenTimestamp: null,
    siteEndpoints: {},
    selectedSiteEndpoint: null,
    selectedSiteName: null,
    enforceStrictTokenExpiry: true,
    tokenExpiryMinutes: 30,
    drawerTitle: 'TS Go',
  },
  quickQueryStore: {
    tasks: [],
    taskActions: [],
    isRefreshing: false,
    resultSet: {},
    resultContext: {},
    resultAction: {},
  },
  dynaFormStore: {
    isSyncing: false,
    forms: [],
    isRefreshing: false,
    queues: [],
  },
  quickScanStore: {
    isSyncing: false,
    tasks: [],
    taskCategories: [],
    scannedPacks: [],
  },
  smartScanStore: {
    tasks: [],
    taskCategories: [],
    isRefreshing: false,
    input: {},
    userInput: '',
    dropdownInput: '',
  },
  itiConsignmentStocktakeStore: {
    sites: [],
    selectedSite: null,
    selectedOperation: null,
    operations: [],
    serverPackets: [],
    scannedPackets: [],
    purchaseOrder: '',
  },
  stocktakeStore: {
    options: {binIdentifier: 'packno', allowCreateFoundPack: false},
    stocktakes: [],
    locations: [],
    rows: [],
    packs: [],
    rowPacks: [],
    existingBins: [],
    products: [],
    packetTallies: [],
    refreshing: false,
    exporting: false,
    exportStocktakeId: 0,
    exportingRows: false,
  },
  loadPlanningStore: {
    loadInput: '',
    scanPackInput: '',
    splitPackLengthInput: 0.0,
    packOptionsInput: 0,
    splitCountInput: 0,
    loads: [],
    loadItems: [],
    consignmentItems: {},
    packs: {},
    refreshing: false,
    packListOptionsInput: 0,
    consignmentPacks: {},
    consignmentReservedPacks: {},
    splitPackSummary: [],
    splitPackDetails: {},
    verifyPacks: [],
    unknownPacks: [],
  },
  orderPickingStore: {
    orders: [],
    orderItems: [],
    orderInput: '',
    scanPackInput: '',
    splitCountInput: 0,
    splitPackLengthInput: 0.0,
    packOptionsInput: 0,
    orderItemItems: {},
    splitPackDetails: {},
    refreshing: false,
    packListOptionsInput: 0,
    orderItemPacks: [],
    orderItemReservedPacks: [],
    splitPackSummary: [],
  },
  processingStore: {
    input: '',
    packNo: '',
    productCode: '',
    location: '',
    binSuffix: '',
    transactionDate: '',
    binPacketNo: '',
  },
  podStore: {
    loads: [],
    refreshing: false,
    photos: [],
    signatures: [],
  },
  moistureCollectorStore: {
    processes: [],
	  kilns: [],
	  positions: [],
	  moistureArrayData: [],
    deviceName: '',
    deviceOwner: '',
    branchID: 0,
    branchName: '',
    locationID: 0,
    locationName: '',
    meanHighLimit: 0,
    meanLowLimit: 0,
    stdDevHighLimit: 0,
    stdDevLowLimit: 0
  },
};
