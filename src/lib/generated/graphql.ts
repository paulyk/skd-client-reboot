export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `DateTime` scalar represents an ISO-8601 compliant date time type. */
  DateTime: any;
  UUID: any;
};

export type AppSetting = {
  __typename?: 'AppSetting';
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['UUID'];
  removedAt?: Maybe<Scalars['DateTime']>;
  value: Scalars['String'];
};

export type ApplyComponentSerialFormatInput = {
  id: Scalars['UUID'];
};

export type BasicKitInfo = {
  __typename?: 'BasicKitInfo';
  kitNo: Scalars['String'];
  lotNo: Scalars['String'];
  modelCode: Scalars['String'];
  modelName: Scalars['String'];
  vin: Scalars['String'];
};

export type Bom = {
  __typename?: 'Bom';
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  lotPartQuantitiesMatchShipment: Scalars['Boolean'];
  lots?: Maybe<Array<Maybe<Lot>>>;
  plant?: Maybe<Plant>;
  plantId: Scalars['UUID'];
  removedAt?: Maybe<Scalars['DateTime']>;
  sequence: Scalars['Int'];
};

export type BomFile = {
  __typename?: 'BomFile';
  bomFileCreatedAt: Scalars['String'];
  lotEntries: Array<BomFileLot>;
  lotParts: Array<BomFileLotPart>;
  plantCode: Scalars['String'];
  sequence: Scalars['Int'];
};

export type BomFileInput = {
  bomFileCreatedAt: Scalars['String'];
  lotEntries: Array<BomFileLotInput>;
  lotParts: Array<BomFileLotPartInput>;
  plantCode: Scalars['String'];
  sequence: Scalars['Int'];
};

export type BomFileKit = {
  __typename?: 'BomFileKit';
  kitNo: Scalars['String'];
  modelCode: Scalars['String'];
};

export type BomFileKitInput = {
  kitNo: Scalars['String'];
  modelCode: Scalars['String'];
};

export type BomFileLot = {
  __typename?: 'BomFileLot';
  kits: Array<BomFileKit>;
  lotNo: Scalars['String'];
};

export type BomFileLotInput = {
  kits: Array<BomFileKitInput>;
  lotNo: Scalars['String'];
};

export type BomFileLotPart = {
  __typename?: 'BomFileLotPart';
  lotNo: Scalars['String'];
  partDesc: Scalars['String'];
  partNo: Scalars['String'];
  quantity: Scalars['Int'];
};

export type BomFileLotPartInput = {
  lotNo: Scalars['String'];
  partDesc: Scalars['String'];
  partNo: Scalars['String'];
  quantity: Scalars['Int'];
};

export type BomFilterInput = {
  and?: InputMaybe<Array<BomFilterInput>>;
  createdAt?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  id?: InputMaybe<ComparableGuidOperationFilterInput>;
  lotPartQuantitiesMatchShipment?: InputMaybe<BooleanOperationFilterInput>;
  lots?: InputMaybe<ListFilterInputTypeOfLotFilterInput>;
  or?: InputMaybe<Array<BomFilterInput>>;
  plant?: InputMaybe<PlantFilterInput>;
  plantId?: InputMaybe<ComparableGuidOperationFilterInput>;
  removedAt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  sequence?: InputMaybe<ComparableInt32OperationFilterInput>;
};

/** A connection to a list of items. */
export type BomListConnection = {
  __typename?: 'BomListConnection';
  /** A list of edges. */
  edges?: Maybe<Array<BomListEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<BomListDto>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type BomListDto = {
  __typename?: 'BomListDTO';
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  lots: Array<BomList_Lot>;
  partCount: Scalars['Int'];
  plantCode: Scalars['String'];
  sequence: Scalars['Int'];
};

export type BomListDtoSortInput = {
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  partCount?: InputMaybe<SortEnumType>;
  plantCode?: InputMaybe<SortEnumType>;
  sequence?: InputMaybe<SortEnumType>;
};

/** An edge in a connection. */
export type BomListEdge = {
  __typename?: 'BomListEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: BomListDto;
};

export type BomList_Lot = {
  __typename?: 'BomList_Lot';
  lotNo: Scalars['String'];
  shipmentSequence?: Maybe<Scalars['Int']>;
};

export type BomOverviewDto = {
  __typename?: 'BomOverviewDTO';
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  lotCount: Scalars['Int'];
  partCount: Scalars['Int'];
  plantCode: Scalars['String'];
  sequence: Scalars['Int'];
  shipments: Array<BomShipInfoDto>;
  vehicleCount: Scalars['Int'];
};

export type BomShipInfoDto = {
  __typename?: 'BomShipInfoDTO';
  plantCode: Scalars['String'];
  sequence: Scalars['Int'];
  shipmentId: Scalars['UUID'];
};

export type BomSortInput = {
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  lotPartQuantitiesMatchShipment?: InputMaybe<SortEnumType>;
  plant?: InputMaybe<PlantSortInput>;
  plantId?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
  sequence?: InputMaybe<SortEnumType>;
};

export type BooleanOperationFilterInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  neq?: InputMaybe<Scalars['Boolean']>;
};

export type ComparableDateTimeOperationFilterInput = {
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  neq?: InputMaybe<Scalars['DateTime']>;
  ngt?: InputMaybe<Scalars['DateTime']>;
  ngte?: InputMaybe<Scalars['DateTime']>;
  nin?: InputMaybe<Array<Scalars['DateTime']>>;
  nlt?: InputMaybe<Scalars['DateTime']>;
  nlte?: InputMaybe<Scalars['DateTime']>;
};

export type ComparableGuidOperationFilterInput = {
  eq?: InputMaybe<Scalars['UUID']>;
  gt?: InputMaybe<Scalars['UUID']>;
  gte?: InputMaybe<Scalars['UUID']>;
  in?: InputMaybe<Array<Scalars['UUID']>>;
  lt?: InputMaybe<Scalars['UUID']>;
  lte?: InputMaybe<Scalars['UUID']>;
  neq?: InputMaybe<Scalars['UUID']>;
  ngt?: InputMaybe<Scalars['UUID']>;
  ngte?: InputMaybe<Scalars['UUID']>;
  nin?: InputMaybe<Array<Scalars['UUID']>>;
  nlt?: InputMaybe<Scalars['UUID']>;
  nlte?: InputMaybe<Scalars['UUID']>;
};

export type ComparableInt32OperationFilterInput = {
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  neq?: InputMaybe<Scalars['Int']>;
  ngt?: InputMaybe<Scalars['Int']>;
  ngte?: InputMaybe<Scalars['Int']>;
  nin?: InputMaybe<Array<Scalars['Int']>>;
  nlt?: InputMaybe<Scalars['Int']>;
  nlte?: InputMaybe<Scalars['Int']>;
};

export type ComparableNullableOfDateTimeOperationFilterInput = {
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  neq?: InputMaybe<Scalars['DateTime']>;
  ngt?: InputMaybe<Scalars['DateTime']>;
  ngte?: InputMaybe<Scalars['DateTime']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  nlt?: InputMaybe<Scalars['DateTime']>;
  nlte?: InputMaybe<Scalars['DateTime']>;
};

export type ComparableNullableOfGuidOperationFilterInput = {
  eq?: InputMaybe<Scalars['UUID']>;
  gt?: InputMaybe<Scalars['UUID']>;
  gte?: InputMaybe<Scalars['UUID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  lt?: InputMaybe<Scalars['UUID']>;
  lte?: InputMaybe<Scalars['UUID']>;
  neq?: InputMaybe<Scalars['UUID']>;
  ngt?: InputMaybe<Scalars['UUID']>;
  ngte?: InputMaybe<Scalars['UUID']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  nlt?: InputMaybe<Scalars['UUID']>;
  nlte?: InputMaybe<Scalars['UUID']>;
};

export type Component = {
  __typename?: 'Component';
  code?: Maybe<Scalars['String']>;
  componentSerialRule: ComponentSerialRule;
  createdAt: Scalars['DateTime'];
  dcwsRequired: Scalars['Boolean'];
  iconURL?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  kitComponents?: Maybe<Array<Maybe<KitComponent>>>;
  name?: Maybe<Scalars['String']>;
  removedAt?: Maybe<Scalars['DateTime']>;
  vehicleModelComponents?: Maybe<Array<Maybe<VehicleModelComponent>>>;
};

export type ComponentFilterInput = {
  and?: InputMaybe<Array<ComponentFilterInput>>;
  code?: InputMaybe<StringOperationFilterInput>;
  componentSerialRule?: InputMaybe<ComponentSerialRuleOperationFilterInput>;
  createdAt?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  dcwsRequired?: InputMaybe<BooleanOperationFilterInput>;
  iconURL?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<ComparableGuidOperationFilterInput>;
  kitComponents?: InputMaybe<ListFilterInputTypeOfKitComponentFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<ComponentFilterInput>>;
  removedAt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  vehicleModelComponents?: InputMaybe<ListFilterInputTypeOfVehicleModelComponentFilterInput>;
};

export type ComponentInput = {
  code?: InputMaybe<Scalars['String']>;
  dcwsSerialCaptureRule: ComponentSerialRule;
  id?: InputMaybe<Scalars['UUID']>;
  name?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of items. */
export type ComponentSerailsConnection = {
  __typename?: 'ComponentSerailsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ComponentSerailsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<ComponentSerial>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ComponentSerailsEdge = {
  __typename?: 'ComponentSerailsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ComponentSerial;
};

export type ComponentSerial = {
  __typename?: 'ComponentSerial';
  createdAt: Scalars['DateTime'];
  dcwsResponses?: Maybe<Array<Maybe<DcwsResponse>>>;
  id: Scalars['UUID'];
  kitComponent?: Maybe<KitComponent>;
  kitComponentId: Scalars['UUID'];
  original_Serial1?: Maybe<Scalars['String']>;
  original_Serial2?: Maybe<Scalars['String']>;
  removedAt?: Maybe<Scalars['DateTime']>;
  serial1?: Maybe<Scalars['String']>;
  serial2?: Maybe<Scalars['String']>;
  verifiedAt?: Maybe<Scalars['DateTime']>;
};

export type ComponentSerialDto = {
  __typename?: 'ComponentSerialDTO';
  componentCode: Scalars['String'];
  componentName: Scalars['String'];
  componentSerialId: Scalars['UUID'];
  createdAt: Scalars['DateTime'];
  lotNo: Scalars['String'];
  productionStationCode: Scalars['String'];
  productionStationName: Scalars['String'];
  serial1: Scalars['String'];
  serial2: Scalars['String'];
  verifiedAt?: Maybe<Scalars['DateTime']>;
  vin: Scalars['String'];
};

export type ComponentSerialFilterInput = {
  and?: InputMaybe<Array<ComponentSerialFilterInput>>;
  createdAt?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  dcwsResponses?: InputMaybe<ListFilterInputTypeOfDcwsResponseFilterInput>;
  id?: InputMaybe<ComparableGuidOperationFilterInput>;
  kitComponent?: InputMaybe<KitComponentFilterInput>;
  kitComponentId?: InputMaybe<ComparableGuidOperationFilterInput>;
  or?: InputMaybe<Array<ComponentSerialFilterInput>>;
  original_Serial1?: InputMaybe<StringOperationFilterInput>;
  original_Serial2?: InputMaybe<StringOperationFilterInput>;
  removedAt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  serial1?: InputMaybe<StringOperationFilterInput>;
  serial2?: InputMaybe<StringOperationFilterInput>;
  verifiedAt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
};

export type ComponentSerialInput = {
  kitComponentId: Scalars['UUID'];
  replace?: Scalars['Boolean'];
  serial1?: InputMaybe<Scalars['String']>;
  serial2?: InputMaybe<Scalars['String']>;
};

export enum ComponentSerialRule {
  BothSerials = 'BOTH_SERIALS',
  OneOrBothSerials = 'ONE_OR_BOTH_SERIALS',
  OneSerial = 'ONE_SERIAL',
  VinAndBody = 'VIN_AND_BODY'
}

export type ComponentSerialRuleOperationFilterInput = {
  eq?: InputMaybe<ComponentSerialRule>;
  in?: InputMaybe<Array<ComponentSerialRule>>;
  neq?: InputMaybe<ComponentSerialRule>;
  nin?: InputMaybe<Array<ComponentSerialRule>>;
};

export type ComponentSerialSortInput = {
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  kitComponent?: InputMaybe<KitComponentSortInput>;
  kitComponentId?: InputMaybe<SortEnumType>;
  original_Serial1?: InputMaybe<SortEnumType>;
  original_Serial2?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
  serial1?: InputMaybe<SortEnumType>;
  serial2?: InputMaybe<SortEnumType>;
  verifiedAt?: InputMaybe<SortEnumType>;
};

export type ComponentSortInput = {
  code?: InputMaybe<SortEnumType>;
  componentSerialRule?: InputMaybe<SortEnumType>;
  createdAt?: InputMaybe<SortEnumType>;
  dcwsRequired?: InputMaybe<SortEnumType>;
  iconURL?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
};

export type ComponentStationInput = {
  componentCode: Scalars['String'];
  productionStationCode: Scalars['String'];
};

/** A connection to a list of items. */
export type ComponentsConnection = {
  __typename?: 'ComponentsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ComponentsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Component>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ComponentsEdge = {
  __typename?: 'ComponentsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Component;
};

export type ConfigettingDto = {
  __typename?: 'ConfigettingDTO';
  dcwsServiceAddress: Scalars['String'];
  planBuildLeadTimeDays?: Maybe<Scalars['Int']>;
};

export type DcwsComponentResponseInput = {
  errorMessage?: InputMaybe<Scalars['String']>;
  responseCode?: InputMaybe<Scalars['String']>;
  vehicleComponentId: Scalars['UUID'];
};

export type DcwsResponse = {
  __typename?: 'DcwsResponse';
  componentSerial?: Maybe<ComponentSerial>;
  componentSerialId: Scalars['UUID'];
  createdAt: Scalars['DateTime'];
  dcwsSuccessfulSave: Scalars['Boolean'];
  errorMessage?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  processExcptionCode?: Maybe<Scalars['String']>;
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type DcwsResponseFilterInput = {
  and?: InputMaybe<Array<DcwsResponseFilterInput>>;
  componentSerial?: InputMaybe<ComponentSerialFilterInput>;
  componentSerialId?: InputMaybe<ComparableGuidOperationFilterInput>;
  createdAt?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  dcwsSuccessfulSave?: InputMaybe<BooleanOperationFilterInput>;
  errorMessage?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<ComparableGuidOperationFilterInput>;
  or?: InputMaybe<Array<DcwsResponseFilterInput>>;
  processExcptionCode?: InputMaybe<StringOperationFilterInput>;
  removedAt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
};

export type DcwsResponseSortInput = {
  componentSerial?: InputMaybe<ComponentSerialSortInput>;
  componentSerialId?: InputMaybe<SortEnumType>;
  createdAt?: InputMaybe<SortEnumType>;
  dcwsSuccessfulSave?: InputMaybe<SortEnumType>;
  errorMessage?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  processExcptionCode?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type DcwsResponsesConnection = {
  __typename?: 'DcwsResponsesConnection';
  /** A list of edges. */
  edges?: Maybe<Array<DcwsResponsesEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<DcwsResponse>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type DcwsResponsesEdge = {
  __typename?: 'DcwsResponsesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: DcwsResponse;
};

export type Dealer = {
  __typename?: 'Dealer';
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  kits: Array<Kit>;
  name: Scalars['String'];
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type DealerFilterInput = {
  and?: InputMaybe<Array<DealerFilterInput>>;
  code?: InputMaybe<StringOperationFilterInput>;
  createdAt?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  id?: InputMaybe<ComparableGuidOperationFilterInput>;
  kits?: InputMaybe<ListFilterInputTypeOfKitFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<DealerFilterInput>>;
  removedAt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
};

export type DealerSortInput = {
  code?: InputMaybe<SortEnumType>;
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type DealersConnection = {
  __typename?: 'DealersConnection';
  /** A list of edges. */
  edges?: Maybe<Array<DealersEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Dealer>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type DealersEdge = {
  __typename?: 'DealersEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Dealer;
};

export type Entry = {
  __typename?: 'Entry';
  buildCompleted?: Maybe<Scalars['DateTime']>;
  currentTimeLineCode: TimeLineEventCode;
  customReceived?: Maybe<Scalars['DateTime']>;
  dealerCode?: Maybe<Scalars['String']>;
  engineSerialNumber?: Maybe<Scalars['String']>;
  gateRelease?: Maybe<Scalars['DateTime']>;
  kitNo?: Maybe<Scalars['String']>;
  lotNo?: Maybe<Scalars['String']>;
  originalPlanBuild?: Maybe<Scalars['DateTime']>;
  planBuild?: Maybe<Scalars['DateTime']>;
  txType: SnapshotChangeStatus;
  vIN?: Maybe<Scalars['String']>;
  verifyVIN?: Maybe<Scalars['DateTime']>;
  wholesale?: Maybe<Scalars['DateTime']>;
};

export type Error = {
  __typename?: 'Error';
  message?: Maybe<Scalars['String']>;
  path?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum FordInterfaceFileType {
  Bom = 'BOM',
  PartnerStatusAck = 'PARTNER_STATUS_ACK',
  Ship = 'SHIP',
  Unkown = 'UNKOWN',
  Vin = 'VIN'
}

export type Hu_Part = {
  __typename?: 'HU_Part';
  partDesc: Scalars['String'];
  partNo: Scalars['String'];
  quantity: Scalars['Int'];
};

export type HandlingUnit = {
  __typename?: 'HandlingUnit';
  code?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  parts?: Maybe<Array<Maybe<ShipmentPart>>>;
  received?: Maybe<Array<Maybe<HandlingUnitReceived>>>;
  removedAt?: Maybe<Scalars['DateTime']>;
  shipmentInvoice?: Maybe<ShipmentInvoice>;
  shipmentInvoiceId: Scalars['UUID'];
};

export type HandlingUnitFilterInput = {
  and?: InputMaybe<Array<HandlingUnitFilterInput>>;
  code?: InputMaybe<StringOperationFilterInput>;
  createdAt?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  id?: InputMaybe<ComparableGuidOperationFilterInput>;
  or?: InputMaybe<Array<HandlingUnitFilterInput>>;
  parts?: InputMaybe<ListFilterInputTypeOfShipmentPartFilterInput>;
  received?: InputMaybe<ListFilterInputTypeOfHandlingUnitReceivedFilterInput>;
  removedAt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  shipmentInvoice?: InputMaybe<ShipmentInvoiceFilterInput>;
  shipmentInvoiceId?: InputMaybe<ComparableGuidOperationFilterInput>;
};

export type HandlingUnitInfoPayload = {
  __typename?: 'HandlingUnitInfoPayload';
  code?: Maybe<Scalars['String']>;
  invoiceNo?: Maybe<Scalars['String']>;
  lotNo?: Maybe<Scalars['String']>;
  modelCode?: Maybe<Scalars['String']>;
  modelName?: Maybe<Scalars['String']>;
  partCount: Scalars['Int'];
  parts: Array<Hu_Part>;
  plantCode: Scalars['String'];
  receivedAt?: Maybe<Scalars['DateTime']>;
  shipmentId: Scalars['UUID'];
  shipmentSequence: Scalars['Int'];
};

export type HandlingUnitOverview = {
  __typename?: 'HandlingUnitOverview';
  createdAt: Scalars['DateTime'];
  handlingUnitCode?: Maybe<Scalars['String']>;
  invoiceNo?: Maybe<Scalars['String']>;
  lotNo?: Maybe<Scalars['String']>;
  partCount: Scalars['Int'];
  plantCode?: Maybe<Scalars['String']>;
  receiveCancledAt?: Maybe<Scalars['DateTime']>;
  receivedAt?: Maybe<Scalars['DateTime']>;
  shipmentSequence: Scalars['Int'];
};

export type HandlingUnitReceived = {
  __typename?: 'HandlingUnitReceived';
  createdAt: Scalars['DateTime'];
  handlingUnit?: Maybe<HandlingUnit>;
  handlingUnitId: Scalars['UUID'];
  id: Scalars['UUID'];
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type HandlingUnitReceivedFilterInput = {
  and?: InputMaybe<Array<HandlingUnitReceivedFilterInput>>;
  createdAt?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  handlingUnit?: InputMaybe<HandlingUnitFilterInput>;
  handlingUnitId?: InputMaybe<ComparableGuidOperationFilterInput>;
  id?: InputMaybe<ComparableGuidOperationFilterInput>;
  or?: InputMaybe<Array<HandlingUnitReceivedFilterInput>>;
  removedAt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
};

export type HandlingUnitSortInput = {
  code?: InputMaybe<SortEnumType>;
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
  shipmentInvoice?: InputMaybe<ShipmentInvoiceSortInput>;
  shipmentInvoiceId?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type HandlingUnitsConnection = {
  __typename?: 'HandlingUnitsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<HandlingUnitsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<HandlingUnit>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type HandlingUnitsEdge = {
  __typename?: 'HandlingUnitsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: HandlingUnit;
};

export type Kit = {
  __typename?: 'Kit';
  createdAt: Scalars['DateTime'];
  dealer?: Maybe<Dealer>;
  dealerId?: Maybe<Scalars['UUID']>;
  id: Scalars['UUID'];
  kitComponents: Array<KitComponent>;
  kitNo: Scalars['String'];
  kitVins: Array<KitVin>;
  lot: Lot;
  lotId: Scalars['UUID'];
  removedAt?: Maybe<Scalars['DateTime']>;
  snapshots: Array<KitSnapshot>;
  timelineEvents: Array<KitTimelineEvent>;
  vin: Scalars['String'];
};

export type KitComponent = {
  __typename?: 'KitComponent';
  component?: Maybe<Component>;
  componentId: Scalars['UUID'];
  componentSerials?: Maybe<Array<Maybe<ComponentSerial>>>;
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  kit?: Maybe<Kit>;
  kitId: Scalars['UUID'];
  productionStation?: Maybe<ProductionStation>;
  productionStationId: Scalars['UUID'];
  removedAt?: Maybe<Scalars['DateTime']>;
  verifiedAt?: Maybe<Scalars['DateTime']>;
};


export type KitComponentComponentSerialsArgs = {
  where?: InputMaybe<ComponentSerialFilterInput>;
};

export type KitComponentFilterInput = {
  and?: InputMaybe<Array<KitComponentFilterInput>>;
  component?: InputMaybe<ComponentFilterInput>;
  componentId?: InputMaybe<ComparableGuidOperationFilterInput>;
  componentSerials?: InputMaybe<ListFilterInputTypeOfComponentSerialFilterInput>;
  createdAt?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  id?: InputMaybe<ComparableGuidOperationFilterInput>;
  kit?: InputMaybe<KitFilterInput>;
  kitId?: InputMaybe<ComparableGuidOperationFilterInput>;
  or?: InputMaybe<Array<KitComponentFilterInput>>;
  productionStation?: InputMaybe<ProductionStationFilterInput>;
  productionStationId?: InputMaybe<ComparableGuidOperationFilterInput>;
  removedAt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  verifiedAt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
};

export type KitComponentSerialInfo = {
  __typename?: 'KitComponentSerialInfo';
  componentCode: Scalars['String'];
  componentName: Scalars['String'];
  removedAt?: Maybe<Scalars['DateTime']>;
  stations: Array<StatcionSerialInfo>;
};

export type KitComponentSortInput = {
  component?: InputMaybe<ComponentSortInput>;
  componentId?: InputMaybe<SortEnumType>;
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  kit?: InputMaybe<KitSortInput>;
  kitId?: InputMaybe<SortEnumType>;
  productionStation?: InputMaybe<ProductionStationSortInput>;
  productionStationId?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
  verifiedAt?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type KitComponentsConnection = {
  __typename?: 'KitComponentsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<KitComponentsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<KitComponent>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type KitComponentsEdge = {
  __typename?: 'KitComponentsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: KitComponent;
};

export type KitFilterInput = {
  and?: InputMaybe<Array<KitFilterInput>>;
  createdAt?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  dealer?: InputMaybe<DealerFilterInput>;
  dealerId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
  id?: InputMaybe<ComparableGuidOperationFilterInput>;
  kitComponents?: InputMaybe<ListFilterInputTypeOfKitComponentFilterInput>;
  kitNo?: InputMaybe<StringOperationFilterInput>;
  kitVins?: InputMaybe<ListFilterInputTypeOfKitVinFilterInput>;
  lot?: InputMaybe<LotFilterInput>;
  lotId?: InputMaybe<ComparableGuidOperationFilterInput>;
  or?: InputMaybe<Array<KitFilterInput>>;
  removedAt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  snapshots?: InputMaybe<ListFilterInputTypeOfKitSnapshotFilterInput>;
  timelineEvents?: InputMaybe<ListFilterInputTypeOfKitTimelineEventFilterInput>;
  vIN?: InputMaybe<StringOperationFilterInput>;
};

/** A connection to a list of items. */
export type KitListConnection = {
  __typename?: 'KitListConnection';
  /** A list of edges. */
  edges?: Maybe<Array<KitListEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<KitListItemDto>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type KitListEdge = {
  __typename?: 'KitListEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: KitListItemDto;
};

export type KitListItemDto = {
  __typename?: 'KitListItemDTO';
  componentCount?: Maybe<Scalars['Int']>;
  id: Scalars['UUID'];
  imported?: Maybe<Scalars['DateTime']>;
  kitNo: Scalars['String'];
  lastTimelineEvent?: Maybe<Scalars['String']>;
  lastTimelineEventDate?: Maybe<Scalars['DateTime']>;
  lotNo: Scalars['String'];
  modelCode: Scalars['String'];
  modelName: Scalars['String'];
  scannedComponentCount?: Maybe<Scalars['Int']>;
  verifiedComponentCount?: Maybe<Scalars['Int']>;
  vin: Scalars['String'];
};

export type KitListItemDtoSortInput = {
  componentCount?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  imported?: InputMaybe<SortEnumType>;
  kitNo?: InputMaybe<SortEnumType>;
  lastTimelineEvent?: InputMaybe<SortEnumType>;
  lastTimelineEventDate?: InputMaybe<SortEnumType>;
  lotNo?: InputMaybe<SortEnumType>;
  modelCode?: InputMaybe<SortEnumType>;
  modelName?: InputMaybe<SortEnumType>;
  scannedComponentCount?: InputMaybe<SortEnumType>;
  vIN?: InputMaybe<SortEnumType>;
  verifiedComponentCount?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type KitSnapshosConnection = {
  __typename?: 'KitSnapshosConnection';
  /** A list of edges. */
  edges?: Maybe<Array<KitSnapshosEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<KitSnapshot>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type KitSnapshosEdge = {
  __typename?: 'KitSnapshosEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: KitSnapshot;
};

export type KitSnapshot = {
  __typename?: 'KitSnapshot';
  buildCompleted?: Maybe<Scalars['DateTime']>;
  changeStatusCode: SnapshotChangeStatus;
  createdAt: Scalars['DateTime'];
  customReceived?: Maybe<Scalars['DateTime']>;
  dealerCode?: Maybe<Scalars['String']>;
  engineSerialNumber?: Maybe<Scalars['String']>;
  gateRelease?: Maybe<Scalars['DateTime']>;
  id: Scalars['UUID'];
  kit?: Maybe<Kit>;
  kitId: Scalars['UUID'];
  kitSnapshotRun?: Maybe<KitSnapshotRun>;
  kitSnapshotRunId: Scalars['UUID'];
  kitTimeLineEventType?: Maybe<KitTimelineEventType>;
  kitTimeLineEventTypeId: Scalars['UUID'];
  orginalPlanBuild?: Maybe<Scalars['DateTime']>;
  planBuild?: Maybe<Scalars['DateTime']>;
  removedAt?: Maybe<Scalars['DateTime']>;
  vIN?: Maybe<Scalars['String']>;
  verifyVIN?: Maybe<Scalars['DateTime']>;
  wholesale?: Maybe<Scalars['DateTime']>;
};

export type KitSnapshotFilterInput = {
  and?: InputMaybe<Array<KitSnapshotFilterInput>>;
  buildCompleted?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  changeStatusCode?: InputMaybe<SnapshotChangeStatusOperationFilterInput>;
  createdAt?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  customReceived?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  dealerCode?: InputMaybe<StringOperationFilterInput>;
  engineSerialNumber?: InputMaybe<StringOperationFilterInput>;
  gateRelease?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  id?: InputMaybe<ComparableGuidOperationFilterInput>;
  kit?: InputMaybe<KitFilterInput>;
  kitId?: InputMaybe<ComparableGuidOperationFilterInput>;
  kitSnapshotRun?: InputMaybe<KitSnapshotRunFilterInput>;
  kitSnapshotRunId?: InputMaybe<ComparableGuidOperationFilterInput>;
  kitTimeLineEventType?: InputMaybe<KitTimelineEventTypeFilterInput>;
  kitTimeLineEventTypeId?: InputMaybe<ComparableGuidOperationFilterInput>;
  or?: InputMaybe<Array<KitSnapshotFilterInput>>;
  orginalPlanBuild?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  planBuild?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  removedAt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  vIN?: InputMaybe<StringOperationFilterInput>;
  verifyVIN?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  wholesale?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
};

export type KitSnapshotInput = {
  allowMultipleSnapshotsPerDay: Scalars['Boolean'];
  plantCode: Scalars['String'];
  rejectIfNoChanges: Scalars['Boolean'];
  runDate?: InputMaybe<Scalars['DateTime']>;
};

export type KitSnapshotRun = {
  __typename?: 'KitSnapshotRun';
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  kitSnapshots?: Maybe<Array<Maybe<KitSnapshot>>>;
  plant?: Maybe<Plant>;
  plantId: Scalars['UUID'];
  removedAt?: Maybe<Scalars['DateTime']>;
  runDate: Scalars['DateTime'];
  sequence: Scalars['Int'];
};

export type KitSnapshotRunDto = {
  __typename?: 'KitSnapshotRunDTO';
  entries?: Maybe<Array<Maybe<Entry>>>;
  partnerPlantCode?: Maybe<Scalars['String']>;
  partnerPlantType?: Maybe<Scalars['String']>;
  partnerStatusFilename?: Maybe<Scalars['String']>;
  plantCode?: Maybe<Scalars['String']>;
  runDate: Scalars['DateTime'];
  sequence: Scalars['Int'];
};

export type KitSnapshotRunFilterInput = {
  and?: InputMaybe<Array<KitSnapshotRunFilterInput>>;
  createdAt?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  id?: InputMaybe<ComparableGuidOperationFilterInput>;
  kitSnapshots?: InputMaybe<ListFilterInputTypeOfKitSnapshotFilterInput>;
  or?: InputMaybe<Array<KitSnapshotRunFilterInput>>;
  plant?: InputMaybe<PlantFilterInput>;
  plantId?: InputMaybe<ComparableGuidOperationFilterInput>;
  removedAt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  runDate?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  sequence?: InputMaybe<ComparableInt32OperationFilterInput>;
};

export type KitSnapshotRunSortInput = {
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  plant?: InputMaybe<PlantSortInput>;
  plantId?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
  runDate?: InputMaybe<SortEnumType>;
  sequence?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type KitSnapshotRunsConnection = {
  __typename?: 'KitSnapshotRunsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<KitSnapshotRunsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<KitSnapshotRun>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type KitSnapshotRunsEdge = {
  __typename?: 'KitSnapshotRunsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: KitSnapshotRun;
};

export type KitSnapshotSortInput = {
  buildCompleted?: InputMaybe<SortEnumType>;
  changeStatusCode?: InputMaybe<SortEnumType>;
  createdAt?: InputMaybe<SortEnumType>;
  customReceived?: InputMaybe<SortEnumType>;
  dealerCode?: InputMaybe<SortEnumType>;
  engineSerialNumber?: InputMaybe<SortEnumType>;
  gateRelease?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  kit?: InputMaybe<KitSortInput>;
  kitId?: InputMaybe<SortEnumType>;
  kitSnapshotRun?: InputMaybe<KitSnapshotRunSortInput>;
  kitSnapshotRunId?: InputMaybe<SortEnumType>;
  kitTimeLineEventType?: InputMaybe<KitTimelineEventTypeSortInput>;
  kitTimeLineEventTypeId?: InputMaybe<SortEnumType>;
  orginalPlanBuild?: InputMaybe<SortEnumType>;
  planBuild?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
  vIN?: InputMaybe<SortEnumType>;
  verifyVIN?: InputMaybe<SortEnumType>;
  wholesale?: InputMaybe<SortEnumType>;
};

export type KitSortInput = {
  createdAt?: InputMaybe<SortEnumType>;
  dealer?: InputMaybe<DealerSortInput>;
  dealerId?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  kitNo?: InputMaybe<SortEnumType>;
  lot?: InputMaybe<LotSortInput>;
  lotId?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
  vIN?: InputMaybe<SortEnumType>;
};

export type KitTimelineDto = {
  __typename?: 'KitTimelineDTO';
  kitNo: Scalars['String'];
  lotNo: Scalars['String'];
  timelineItems: Array<TimelineEventDto>;
  vin: Scalars['String'];
};

export type KitTimelineEvent = {
  __typename?: 'KitTimelineEvent';
  createdAt: Scalars['DateTime'];
  eventDate: Scalars['DateTime'];
  eventNote?: Maybe<Scalars['String']>;
  eventType?: Maybe<KitTimelineEventType>;
  id: Scalars['UUID'];
  kit?: Maybe<Kit>;
  kitId: Scalars['UUID'];
  kitTimelineEventTypeId: Scalars['UUID'];
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type KitTimelineEventFilterInput = {
  and?: InputMaybe<Array<KitTimelineEventFilterInput>>;
  createdAt?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  eventDate?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  eventNote?: InputMaybe<StringOperationFilterInput>;
  eventType?: InputMaybe<KitTimelineEventTypeFilterInput>;
  id?: InputMaybe<ComparableGuidOperationFilterInput>;
  kit?: InputMaybe<KitFilterInput>;
  kitId?: InputMaybe<ComparableGuidOperationFilterInput>;
  kitTimelineEventTypeId?: InputMaybe<ComparableGuidOperationFilterInput>;
  or?: InputMaybe<Array<KitTimelineEventFilterInput>>;
  removedAt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
};

export type KitTimelineEventInput = {
  dealerCode?: InputMaybe<Scalars['String']>;
  eventCode: TimeLineEventCode;
  eventDate: Scalars['DateTime'];
  eventNote?: InputMaybe<Scalars['String']>;
  kitNo?: InputMaybe<Scalars['String']>;
};

export type KitTimelineEventSortInput = {
  createdAt?: InputMaybe<SortEnumType>;
  eventDate?: InputMaybe<SortEnumType>;
  eventNote?: InputMaybe<SortEnumType>;
  eventType?: InputMaybe<KitTimelineEventTypeSortInput>;
  id?: InputMaybe<SortEnumType>;
  kit?: InputMaybe<KitSortInput>;
  kitId?: InputMaybe<SortEnumType>;
  kitTimelineEventTypeId?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
};

export type KitTimelineEventType = {
  __typename?: 'KitTimelineEventType';
  code: TimeLineEventCode;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['UUID'];
  removedAt?: Maybe<Scalars['DateTime']>;
  sequence: Scalars['Int'];
  snapshots: Array<KitSnapshot>;
};

export type KitTimelineEventTypeFilterInput = {
  and?: InputMaybe<Array<KitTimelineEventTypeFilterInput>>;
  code?: InputMaybe<TimeLineEventCodeOperationFilterInput>;
  createdAt?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  description?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<ComparableGuidOperationFilterInput>;
  or?: InputMaybe<Array<KitTimelineEventTypeFilterInput>>;
  removedAt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  sequence?: InputMaybe<ComparableInt32OperationFilterInput>;
  snapshots?: InputMaybe<ListFilterInputTypeOfKitSnapshotFilterInput>;
};

export type KitTimelineEventTypeSortInput = {
  code?: InputMaybe<SortEnumType>;
  createdAt?: InputMaybe<SortEnumType>;
  description?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
  sequence?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type KitTimelineEventsConnection = {
  __typename?: 'KitTimelineEventsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<KitTimelineEventsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<KitTimelineEvent>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type KitTimelineEventsEdge = {
  __typename?: 'KitTimelineEventsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: KitTimelineEvent;
};

export type KitVin = {
  __typename?: 'KitVin';
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  kit?: Maybe<Kit>;
  kitId: Scalars['UUID'];
  kitVinImport?: Maybe<KitVinImport>;
  kitVinImportId: Scalars['UUID'];
  removedAt?: Maybe<Scalars['DateTime']>;
  vin?: Maybe<Scalars['String']>;
};

export type KitVinAckDto = {
  __typename?: 'KitVinAckDTO';
  errorMessage: Scalars['String'];
  filename: Scalars['String'];
  payloadText: Scalars['String'];
  plantCode: Scalars['String'];
  sequence: Scalars['Int'];
};

export type KitVinFilterInput = {
  and?: InputMaybe<Array<KitVinFilterInput>>;
  createdAt?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  id?: InputMaybe<ComparableGuidOperationFilterInput>;
  kit?: InputMaybe<KitFilterInput>;
  kitId?: InputMaybe<ComparableGuidOperationFilterInput>;
  kitVinImport?: InputMaybe<KitVinImportFilterInput>;
  kitVinImportId?: InputMaybe<ComparableGuidOperationFilterInput>;
  or?: InputMaybe<Array<KitVinFilterInput>>;
  removedAt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  vIN?: InputMaybe<StringOperationFilterInput>;
};

export type KitVinImport = {
  __typename?: 'KitVinImport';
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  kitVins?: Maybe<Array<Maybe<KitVin>>>;
  partnerPlantCode?: Maybe<Scalars['String']>;
  plant?: Maybe<Plant>;
  plantId: Scalars['UUID'];
  removedAt?: Maybe<Scalars['DateTime']>;
  sequence: Scalars['Int'];
};

export type KitVinImportFilterInput = {
  and?: InputMaybe<Array<KitVinImportFilterInput>>;
  createdAt?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  id?: InputMaybe<ComparableGuidOperationFilterInput>;
  kitVins?: InputMaybe<ListFilterInputTypeOfKitVinFilterInput>;
  or?: InputMaybe<Array<KitVinImportFilterInput>>;
  partnerPlantCode?: InputMaybe<StringOperationFilterInput>;
  plant?: InputMaybe<PlantFilterInput>;
  plantId?: InputMaybe<ComparableGuidOperationFilterInput>;
  removedAt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  sequence?: InputMaybe<ComparableInt32OperationFilterInput>;
};

export type KitVinImportSortInput = {
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  partnerPlantCode?: InputMaybe<SortEnumType>;
  plant?: InputMaybe<PlantSortInput>;
  plantId?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
  sequence?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type KitsConnection = {
  __typename?: 'KitsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<KitsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Kit>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type KitsEdge = {
  __typename?: 'KitsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Kit;
};

export type ListFilterInputTypeOfBomFilterInput = {
  all?: InputMaybe<BomFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<BomFilterInput>;
  some?: InputMaybe<BomFilterInput>;
};

export type ListFilterInputTypeOfComponentSerialFilterInput = {
  all?: InputMaybe<ComponentSerialFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<ComponentSerialFilterInput>;
  some?: InputMaybe<ComponentSerialFilterInput>;
};

export type ListFilterInputTypeOfDcwsResponseFilterInput = {
  all?: InputMaybe<DcwsResponseFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<DcwsResponseFilterInput>;
  some?: InputMaybe<DcwsResponseFilterInput>;
};

export type ListFilterInputTypeOfHandlingUnitFilterInput = {
  all?: InputMaybe<HandlingUnitFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<HandlingUnitFilterInput>;
  some?: InputMaybe<HandlingUnitFilterInput>;
};

export type ListFilterInputTypeOfHandlingUnitReceivedFilterInput = {
  all?: InputMaybe<HandlingUnitReceivedFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<HandlingUnitReceivedFilterInput>;
  some?: InputMaybe<HandlingUnitReceivedFilterInput>;
};

export type ListFilterInputTypeOfKitComponentFilterInput = {
  all?: InputMaybe<KitComponentFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<KitComponentFilterInput>;
  some?: InputMaybe<KitComponentFilterInput>;
};

export type ListFilterInputTypeOfKitFilterInput = {
  all?: InputMaybe<KitFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<KitFilterInput>;
  some?: InputMaybe<KitFilterInput>;
};

export type ListFilterInputTypeOfKitSnapshotFilterInput = {
  all?: InputMaybe<KitSnapshotFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<KitSnapshotFilterInput>;
  some?: InputMaybe<KitSnapshotFilterInput>;
};

export type ListFilterInputTypeOfKitSnapshotRunFilterInput = {
  all?: InputMaybe<KitSnapshotRunFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<KitSnapshotRunFilterInput>;
  some?: InputMaybe<KitSnapshotRunFilterInput>;
};

export type ListFilterInputTypeOfKitTimelineEventFilterInput = {
  all?: InputMaybe<KitTimelineEventFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<KitTimelineEventFilterInput>;
  some?: InputMaybe<KitTimelineEventFilterInput>;
};

export type ListFilterInputTypeOfKitVinFilterInput = {
  all?: InputMaybe<KitVinFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<KitVinFilterInput>;
  some?: InputMaybe<KitVinFilterInput>;
};

export type ListFilterInputTypeOfKitVinImportFilterInput = {
  all?: InputMaybe<KitVinImportFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<KitVinImportFilterInput>;
  some?: InputMaybe<KitVinImportFilterInput>;
};

export type ListFilterInputTypeOfLotFilterInput = {
  all?: InputMaybe<LotFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<LotFilterInput>;
  some?: InputMaybe<LotFilterInput>;
};

export type ListFilterInputTypeOfLotPartFilterInput = {
  all?: InputMaybe<LotPartFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<LotPartFilterInput>;
  some?: InputMaybe<LotPartFilterInput>;
};

export type ListFilterInputTypeOfLotPartReceivedFilterInput = {
  all?: InputMaybe<LotPartReceivedFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<LotPartReceivedFilterInput>;
  some?: InputMaybe<LotPartReceivedFilterInput>;
};

export type ListFilterInputTypeOfShipmentFilterInput = {
  all?: InputMaybe<ShipmentFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<ShipmentFilterInput>;
  some?: InputMaybe<ShipmentFilterInput>;
};

export type ListFilterInputTypeOfShipmentInvoiceFilterInput = {
  all?: InputMaybe<ShipmentInvoiceFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<ShipmentInvoiceFilterInput>;
  some?: InputMaybe<ShipmentInvoiceFilterInput>;
};

export type ListFilterInputTypeOfShipmentLotFilterInput = {
  all?: InputMaybe<ShipmentLotFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<ShipmentLotFilterInput>;
  some?: InputMaybe<ShipmentLotFilterInput>;
};

export type ListFilterInputTypeOfShipmentPartFilterInput = {
  all?: InputMaybe<ShipmentPartFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<ShipmentPartFilterInput>;
  some?: InputMaybe<ShipmentPartFilterInput>;
};

export type ListFilterInputTypeOfVehicleModelComponentFilterInput = {
  all?: InputMaybe<VehicleModelComponentFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<VehicleModelComponentFilterInput>;
  some?: InputMaybe<VehicleModelComponentFilterInput>;
};

export type Lot = {
  __typename?: 'Lot';
  bom?: Maybe<Bom>;
  bomId: Scalars['UUID'];
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  kits?: Maybe<Array<Maybe<Kit>>>;
  lotNo?: Maybe<Scalars['String']>;
  lotParts?: Maybe<Array<Maybe<LotPart>>>;
  model?: Maybe<VehicleModel>;
  modelId: Scalars['UUID'];
  note?: Maybe<Scalars['String']>;
  plant?: Maybe<Plant>;
  plantId: Scalars['UUID'];
  removedAt?: Maybe<Scalars['DateTime']>;
  shipmentLots?: Maybe<Array<Maybe<ShipmentLot>>>;
};

export type LotDto = {
  __typename?: 'LotDTO';
  createdAt: Scalars['DateTime'];
  lotNo: Scalars['String'];
  model: Scalars['String'];
  modelBody: Scalars['String'];
  modelCode: Scalars['String'];
  modelDesc: Scalars['String'];
  modelSeries: Scalars['String'];
};

export type LotFilterInput = {
  and?: InputMaybe<Array<LotFilterInput>>;
  bom?: InputMaybe<BomFilterInput>;
  bomId?: InputMaybe<ComparableGuidOperationFilterInput>;
  createdAt?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  id?: InputMaybe<ComparableGuidOperationFilterInput>;
  kits?: InputMaybe<ListFilterInputTypeOfKitFilterInput>;
  lotNo?: InputMaybe<StringOperationFilterInput>;
  lotParts?: InputMaybe<ListFilterInputTypeOfLotPartFilterInput>;
  model?: InputMaybe<VehicleModelFilterInput>;
  modelId?: InputMaybe<ComparableGuidOperationFilterInput>;
  note?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<LotFilterInput>>;
  plant?: InputMaybe<PlantFilterInput>;
  plantId?: InputMaybe<ComparableGuidOperationFilterInput>;
  removedAt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  shipmentLots?: InputMaybe<ListFilterInputTypeOfShipmentLotFilterInput>;
};

export type LotListDto = {
  __typename?: 'LotListDTO';
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  kitCount: Scalars['Int'];
  lotNo: Scalars['String'];
  plantCode: Scalars['String'];
  timelineStatus?: Maybe<TimeLineEventCode>;
};

export type LotNoteInput = {
  lotNo?: InputMaybe<Scalars['String']>;
  note?: InputMaybe<Scalars['String']>;
};

export type LotOverviewDto = {
  __typename?: 'LotOverviewDTO';
  bomId: Scalars['UUID'];
  bomSequence: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  customReceived?: Maybe<TimelineEventDto>;
  id: Scalars['UUID'];
  lotNo: Scalars['String'];
  modelCode: Scalars['String'];
  modelName: Scalars['String'];
  note: Scalars['String'];
  plantCode: Scalars['String'];
  shipmentId: Scalars['UUID'];
  shipmentSequence: Scalars['Int'];
};

export type LotParReceivedtDto = {
  __typename?: 'LotParReceivedtDTO';
  bomQuantity: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  lotNo?: Maybe<Scalars['String']>;
  partDesc?: Maybe<Scalars['String']>;
  partNo?: Maybe<Scalars['String']>;
  receivedQuantity: Scalars['Int'];
  removedAt?: Maybe<Scalars['DateTime']>;
  shipmentQuantity: Scalars['Int'];
};

export type LotPart = {
  __typename?: 'LotPart';
  bomQuantity: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  lot?: Maybe<Lot>;
  lotId: Scalars['UUID'];
  part?: Maybe<Part>;
  partId: Scalars['UUID'];
  received?: Maybe<Array<Maybe<LotPartReceived>>>;
  removedAt?: Maybe<Scalars['DateTime']>;
  shipmentQuantity: Scalars['Int'];
};

export type LotPartDto = {
  __typename?: 'LotPartDTO';
  bomQuantity: Scalars['Int'];
  importDate: Scalars['DateTime'];
  lotNo?: Maybe<Scalars['String']>;
  partDesc?: Maybe<Scalars['String']>;
  partNo?: Maybe<Scalars['String']>;
  receivedDate?: Maybe<Scalars['DateTime']>;
  receivedQuantity: Scalars['Int'];
  removedDate?: Maybe<Scalars['DateTime']>;
  shipmentQuantity: Scalars['Int'];
};

export type LotPartFilterInput = {
  and?: InputMaybe<Array<LotPartFilterInput>>;
  bomQuantity?: InputMaybe<ComparableInt32OperationFilterInput>;
  createdAt?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  id?: InputMaybe<ComparableGuidOperationFilterInput>;
  lot?: InputMaybe<LotFilterInput>;
  lotId?: InputMaybe<ComparableGuidOperationFilterInput>;
  or?: InputMaybe<Array<LotPartFilterInput>>;
  part?: InputMaybe<PartFilterInput>;
  partId?: InputMaybe<ComparableGuidOperationFilterInput>;
  received?: InputMaybe<ListFilterInputTypeOfLotPartReceivedFilterInput>;
  removedAt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  shipmentQuantity?: InputMaybe<ComparableInt32OperationFilterInput>;
};

export type LotPartReceived = {
  __typename?: 'LotPartReceived';
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  lotPart?: Maybe<LotPart>;
  lotPartId: Scalars['UUID'];
  quantity: Scalars['Int'];
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type LotPartReceivedFilterInput = {
  and?: InputMaybe<Array<LotPartReceivedFilterInput>>;
  createdAt?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  id?: InputMaybe<ComparableGuidOperationFilterInput>;
  lotPart?: InputMaybe<LotPartFilterInput>;
  lotPartId?: InputMaybe<ComparableGuidOperationFilterInput>;
  or?: InputMaybe<Array<LotPartReceivedFilterInput>>;
  quantity?: InputMaybe<ComparableInt32OperationFilterInput>;
  removedAt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
};

export type LotSortInput = {
  bom?: InputMaybe<BomSortInput>;
  bomId?: InputMaybe<SortEnumType>;
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  lotNo?: InputMaybe<SortEnumType>;
  model?: InputMaybe<VehicleModelSortInput>;
  modelId?: InputMaybe<SortEnumType>;
  note?: InputMaybe<SortEnumType>;
  plant?: InputMaybe<PlantSortInput>;
  plantId?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
};

export type LotTimelineEventInput = {
  eventCode: TimeLineEventCode;
  eventDate: Scalars['DateTime'];
  eventNote?: InputMaybe<Scalars['String']>;
  lotNo?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of items. */
export type LotsConnection = {
  __typename?: 'LotsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<LotsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Lot>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type LotsEdge = {
  __typename?: 'LotsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Lot;
};

export type Mutation = {
  __typename?: 'Mutation';
  applyComponentSerialFormat: ComponentSerial;
  captureComponentSerial: MutationResultOfComponentSerialDto;
  createDcwsResponse: MutationResultOfDcwsResponse;
  createKitTimelineEvent: MutationResultOfKitTimelineEvent;
  createLotPartQuantityReceived: MutationResultOfLotPartDto;
  createLotTimelineEvent: MutationResultOfLot;
  createPlant: MutationResultOfPlantOverviewDto;
  createVehicleModelFromExisting: MutationResultOfVehicleModel;
  generateKitSnapshotRun: MutationResultOfSnapshotDto;
  importBom: MutationResultOfBomOverviewDto;
  importShipment: MutationResultOfShipmentOverviewDto;
  importVIN: MutationResultOfKitVinImport;
  removeBom: MutationResultOfString;
  removeShipment: MutationResultOfString;
  saveComponent: MutationResultOfComponent;
  saveProductionStation: MutationResultOfProductionStation;
  saveVehicleModel: MutationResultOfVehicleModel;
  setHandlingUnitReceived: MutationResultOfReceiveHandlingUnitPayload;
  setLotNote: MutationResultOfLot;
  syncKfitModelComponents: MutationResultOfKit;
  verifyComponentSerial: MutationResultOfDcwsResponse;
};


export type MutationApplyComponentSerialFormatArgs = {
  input: ApplyComponentSerialFormatInput;
};


export type MutationCaptureComponentSerialArgs = {
  input: ComponentSerialInput;
};


export type MutationCreateDcwsResponseArgs = {
  input: DcwsComponentResponseInput;
};


export type MutationCreateKitTimelineEventArgs = {
  input: KitTimelineEventInput;
};


export type MutationCreateLotPartQuantityReceivedArgs = {
  input: ReceiveLotPartInput;
};


export type MutationCreateLotTimelineEventArgs = {
  input: LotTimelineEventInput;
};


export type MutationCreatePlantArgs = {
  input: PlantInput;
};


export type MutationCreateVehicleModelFromExistingArgs = {
  input: VehicleModelFromExistingInput;
};


export type MutationGenerateKitSnapshotRunArgs = {
  input: KitSnapshotInput;
};


export type MutationImportBomArgs = {
  input: BomFileInput;
};


export type MutationImportShipmentArgs = {
  input: ShipFileInput;
};


export type MutationImportVinArgs = {
  input: VinFileInput;
};


export type MutationRemoveBomArgs = {
  plantCode: Scalars['String'];
  sequence: Scalars['Int'];
};


export type MutationRemoveShipmentArgs = {
  plantCode: Scalars['String'];
  sequence: Scalars['Int'];
};


export type MutationSaveComponentArgs = {
  input: ComponentInput;
};


export type MutationSaveProductionStationArgs = {
  input: ProductionStationInput;
};


export type MutationSaveVehicleModelArgs = {
  input: VehicleModelInput;
};


export type MutationSetHandlingUnitReceivedArgs = {
  input: ReceiveHandlingUnitInput;
};


export type MutationSetLotNoteArgs = {
  input: LotNoteInput;
};


export type MutationSyncKfitModelComponentsArgs = {
  kitNo: Scalars['String'];
};


export type MutationVerifyComponentSerialArgs = {
  kitComponentId: Scalars['UUID'];
};

export type MutationResultOfBomOverviewDto = {
  __typename?: 'MutationResultOfBomOverviewDTO';
  errors: Array<Error>;
  payload?: Maybe<BomOverviewDto>;
};

export type MutationResultOfComponent = {
  __typename?: 'MutationResultOfComponent';
  errors: Array<Error>;
  payload?: Maybe<Component>;
};

export type MutationResultOfComponentSerialDto = {
  __typename?: 'MutationResultOfComponentSerialDTO';
  errors: Array<Error>;
  payload?: Maybe<ComponentSerialDto>;
};

export type MutationResultOfDcwsResponse = {
  __typename?: 'MutationResultOfDcwsResponse';
  errors: Array<Error>;
  payload?: Maybe<DcwsResponse>;
};

export type MutationResultOfKit = {
  __typename?: 'MutationResultOfKit';
  errors: Array<Error>;
  payload?: Maybe<Kit>;
};

export type MutationResultOfKitTimelineEvent = {
  __typename?: 'MutationResultOfKitTimelineEvent';
  errors: Array<Error>;
  payload?: Maybe<KitTimelineEvent>;
};

export type MutationResultOfKitVinImport = {
  __typename?: 'MutationResultOfKitVinImport';
  errors: Array<Error>;
  payload?: Maybe<KitVinImport>;
};

export type MutationResultOfLot = {
  __typename?: 'MutationResultOfLot';
  errors: Array<Error>;
  payload?: Maybe<Lot>;
};

export type MutationResultOfLotPartDto = {
  __typename?: 'MutationResultOfLotPartDTO';
  errors: Array<Error>;
  payload?: Maybe<LotPartDto>;
};

export type MutationResultOfPlantOverviewDto = {
  __typename?: 'MutationResultOfPlantOverviewDTO';
  errors: Array<Error>;
  payload?: Maybe<PlantOverviewDto>;
};

export type MutationResultOfProductionStation = {
  __typename?: 'MutationResultOfProductionStation';
  errors: Array<Error>;
  payload?: Maybe<ProductionStation>;
};

export type MutationResultOfReceiveHandlingUnitPayload = {
  __typename?: 'MutationResultOfReceiveHandlingUnitPayload';
  errors: Array<Error>;
  payload?: Maybe<ReceiveHandlingUnitPayload>;
};

export type MutationResultOfShipmentOverviewDto = {
  __typename?: 'MutationResultOfShipmentOverviewDTO';
  errors: Array<Error>;
  payload?: Maybe<ShipmentOverviewDto>;
};

export type MutationResultOfSnapshotDto = {
  __typename?: 'MutationResultOfSnapshotDTO';
  errors: Array<Error>;
  payload?: Maybe<SnapshotDto>;
};

export type MutationResultOfString = {
  __typename?: 'MutationResultOfString';
  errors: Array<Error>;
  payload?: Maybe<Scalars['String']>;
};

export type MutationResultOfVehicleModel = {
  __typename?: 'MutationResultOfVehicleModel';
  errors: Array<Error>;
  payload?: Maybe<VehicleModel>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** Indicates whether more edges exist following the set defined by the clients arguments. */
  hasNextPage: Scalars['Boolean'];
  /** Indicates whether more edges exist prior the set defined by the clients arguments. */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type Part = {
  __typename?: 'Part';
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  lotParts: Array<LotPart>;
  originalPartNo: Scalars['String'];
  partDesc: Scalars['String'];
  partNo: Scalars['String'];
  removedAt?: Maybe<Scalars['DateTime']>;
  shipmentParts: Array<ShipmentPart>;
};

export type PartFilterInput = {
  and?: InputMaybe<Array<PartFilterInput>>;
  createdAt?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  id?: InputMaybe<ComparableGuidOperationFilterInput>;
  lotParts?: InputMaybe<ListFilterInputTypeOfLotPartFilterInput>;
  or?: InputMaybe<Array<PartFilterInput>>;
  originalPartNo?: InputMaybe<StringOperationFilterInput>;
  partDesc?: InputMaybe<StringOperationFilterInput>;
  partNo?: InputMaybe<StringOperationFilterInput>;
  removedAt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  shipmentParts?: InputMaybe<ListFilterInputTypeOfShipmentPartFilterInput>;
};

export type PartQuantityDto = {
  __typename?: 'PartQuantityDTO';
  partDesc: Scalars['String'];
  partNo: Scalars['String'];
  quantity: Scalars['Int'];
};

export type PartSortInput = {
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  originalPartNo?: InputMaybe<SortEnumType>;
  partDesc?: InputMaybe<SortEnumType>;
  partNo?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
};

export type PartnerStatusDto = {
  __typename?: 'PartnerStatusDTO';
  errorMessage: Scalars['String'];
  filename: Scalars['String'];
  payloadText: Scalars['String'];
  plantCode: Scalars['String'];
  runDate?: Maybe<Scalars['DateTime']>;
  sequence: Scalars['Int'];
};

/** A connection to a list of items. */
export type PartsConnection = {
  __typename?: 'PartsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<PartsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Part>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type PartsEdge = {
  __typename?: 'PartsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Part;
};

export type Plant = {
  __typename?: 'Plant';
  boms?: Maybe<Array<Maybe<Bom>>>;
  code?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  kitSnapshotRuns?: Maybe<Array<Maybe<KitSnapshotRun>>>;
  kitVinImports?: Maybe<Array<Maybe<KitVinImport>>>;
  lots?: Maybe<Array<Maybe<Lot>>>;
  name?: Maybe<Scalars['String']>;
  partnerPlantCode?: Maybe<Scalars['String']>;
  partnerPlantType?: Maybe<Scalars['String']>;
  removedAt?: Maybe<Scalars['DateTime']>;
  shipments?: Maybe<Array<Maybe<Shipment>>>;
};

export type PlantFilterInput = {
  and?: InputMaybe<Array<PlantFilterInput>>;
  boms?: InputMaybe<ListFilterInputTypeOfBomFilterInput>;
  code?: InputMaybe<StringOperationFilterInput>;
  createdAt?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  id?: InputMaybe<ComparableGuidOperationFilterInput>;
  kitSnapshotRuns?: InputMaybe<ListFilterInputTypeOfKitSnapshotRunFilterInput>;
  kitVinImports?: InputMaybe<ListFilterInputTypeOfKitVinImportFilterInput>;
  lots?: InputMaybe<ListFilterInputTypeOfLotFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<PlantFilterInput>>;
  partnerPlantCode?: InputMaybe<StringOperationFilterInput>;
  partnerPlantType?: InputMaybe<StringOperationFilterInput>;
  removedAt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  shipments?: InputMaybe<ListFilterInputTypeOfShipmentFilterInput>;
};

export type PlantInput = {
  code?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  partnerPlantCode?: InputMaybe<Scalars['String']>;
  partnerPlantType?: InputMaybe<Scalars['String']>;
};

export type PlantOverviewDto = {
  __typename?: 'PlantOverviewDTO';
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  name: Scalars['String'];
};

export type PlantSortInput = {
  code?: InputMaybe<SortEnumType>;
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  partnerPlantCode?: InputMaybe<SortEnumType>;
  partnerPlantType?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
};

export type ProductionStation = {
  __typename?: 'ProductionStation';
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  modelComponents: Array<VehicleModelComponent>;
  name: Scalars['String'];
  removedAt?: Maybe<Scalars['DateTime']>;
  sequence: Scalars['Int'];
  vehicleComponents: Array<KitComponent>;
};

export type ProductionStationFilterInput = {
  and?: InputMaybe<Array<ProductionStationFilterInput>>;
  code?: InputMaybe<StringOperationFilterInput>;
  createdAt?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  id?: InputMaybe<ComparableGuidOperationFilterInput>;
  modelComponents?: InputMaybe<ListFilterInputTypeOfVehicleModelComponentFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<ProductionStationFilterInput>>;
  removedAt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  sequence?: InputMaybe<ComparableInt32OperationFilterInput>;
  vehicleComponents?: InputMaybe<ListFilterInputTypeOfKitComponentFilterInput>;
};

export type ProductionStationInput = {
  code?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
  name?: InputMaybe<Scalars['String']>;
};

export type ProductionStationSortInput = {
  code?: InputMaybe<SortEnumType>;
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
  sequence?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type ProductionStationsConnection = {
  __typename?: 'ProductionStationsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ProductionStationsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<ProductionStation>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ProductionStationsEdge = {
  __typename?: 'ProductionStationsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ProductionStation;
};

export type Query = {
  __typename?: 'Query';
  appSettings: Array<AppSetting>;
  basicKitInfo?: Maybe<BasicKitInfo>;
  bomById?: Maybe<Bom>;
  bomList?: Maybe<BomListConnection>;
  bomOverview?: Maybe<BomOverviewDto>;
  bomPartsQuantity: Array<PartQuantityDto>;
  componentById?: Maybe<Component>;
  /** @deprecated no longer used */
  componentScanById?: Maybe<ComponentSerial>;
  componentSerails?: Maybe<ComponentSerailsConnection>;
  components?: Maybe<ComponentsConnection>;
  dcwsResponses?: Maybe<DcwsResponsesConnection>;
  dcwsServiceVersion: Scalars['String'];
  dealers?: Maybe<DealersConnection>;
  /** @deprecated no longer used */
  existingComponentScan?: Maybe<ComponentSerial>;
  fordInterfaceFileType: FordInterfaceFileType;
  genPartnerStatusFilename: Scalars['String'];
  genVinImportAcknowledgment: KitVinAckDto;
  handlingUnitInfo?: Maybe<HandlingUnitInfoPayload>;
  handlingUnitOverviews: Array<HandlingUnitOverview>;
  handlingUnits?: Maybe<HandlingUnitsConnection>;
  info: Scalars['String'];
  kitById?: Maybe<Kit>;
  kitByKitNo?: Maybe<Kit>;
  kitComponentSerialInfo?: Maybe<KitComponentSerialInfo>;
  kitComponents?: Maybe<KitComponentsConnection>;
  kitList?: Maybe<KitListConnection>;
  kitSnapshos?: Maybe<KitSnapshosConnection>;
  kitSnapshotRun?: Maybe<KitSnapshotRunDto>;
  kitSnapshotRunByDate?: Maybe<KitSnapshotRunDto>;
  kitSnapshotRuns?: Maybe<KitSnapshotRunsConnection>;
  kitTimeline?: Maybe<KitTimelineDto>;
  kitTimelineEvents?: Maybe<KitTimelineEventsConnection>;
  kitTimelineEventsByDate: Array<KitTimelineEvent>;
  kits?: Maybe<KitsConnection>;
  kitsByLot: Array<Kit>;
  lotByLotNo?: Maybe<Lot>;
  lotInfo?: Maybe<LotDto>;
  lotListByBomId: Array<LotListDto>;
  lotOverview?: Maybe<LotOverviewDto>;
  lotPartInfo?: Maybe<LotPartDto>;
  lotPartsByBom: Array<LotPartDto>;
  lotPartsByShipment: Array<LotPartDto>;
  lots?: Maybe<LotsConnection>;
  parseBomFile: BomFile;
  parseShipFile: ShipFile;
  parseVinFile: VinFile;
  partnerStatusFilePayload: PartnerStatusDto;
  parts?: Maybe<PartsConnection>;
  pingDcwsService: Scalars['Boolean'];
  plants: Array<Plant>;
  productionStations?: Maybe<ProductionStationsConnection>;
  recentKitSnapshotRuns: Array<SnapshotDto>;
  recentLotPartsReceived: Array<LotParReceivedtDto>;
  serverConfigSettings: ConfigettingDto;
  shipmentOverview?: Maybe<ShipmentOverviewDto>;
  shipmentParts?: Maybe<ShipmentPartsConnection>;
  shipments?: Maybe<ShipmentsConnection>;
  /** @deprecated no longer used */
  vehicleComponentByVinAndComponent?: Maybe<KitComponent>;
  vehicleModelById?: Maybe<VehicleModel>;
  vehicleModelComponents?: Maybe<VehicleModelComponentsConnection>;
  vehicleModels?: Maybe<VehicleModelsConnection>;
  vinImports?: Maybe<VinImportsConnection>;
};


export type QueryBasicKitInfoArgs = {
  vin: Scalars['String'];
};


export type QueryBomByIdArgs = {
  id: Scalars['UUID'];
};


export type QueryBomListArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<BomListDtoSortInput>>;
  plantCode: Scalars['String'];
};


export type QueryBomOverviewArgs = {
  id: Scalars['UUID'];
};


export type QueryBomPartsQuantityArgs = {
  id: Scalars['UUID'];
};


export type QueryComponentByIdArgs = {
  id: Scalars['UUID'];
};


export type QueryComponentScanByIdArgs = {
  id: Scalars['UUID'];
};


export type QueryComponentSerailsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<ComponentSerialSortInput>>;
  where?: InputMaybe<ComponentSerialFilterInput>;
};


export type QueryComponentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<ComponentSortInput>>;
  where?: InputMaybe<ComponentFilterInput>;
};


export type QueryDcwsResponsesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<DcwsResponseSortInput>>;
  where?: InputMaybe<DcwsResponseFilterInput>;
};


export type QueryDealersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<DealerSortInput>>;
  where?: InputMaybe<DealerFilterInput>;
};


export type QueryExistingComponentScanArgs = {
  vehicleComponentId: Scalars['UUID'];
};


export type QueryFordInterfaceFileTypeArgs = {
  filename: Scalars['String'];
};


export type QueryGenPartnerStatusFilenameArgs = {
  kitSnapshotRunId: Scalars['UUID'];
};


export type QueryGenVinImportAcknowledgmentArgs = {
  plantCode: Scalars['String'];
  sequence: Scalars['Int'];
};


export type QueryHandlingUnitInfoArgs = {
  huCode: Scalars['String'];
};


export type QueryHandlingUnitOverviewsArgs = {
  shipmentId: Scalars['UUID'];
};


export type QueryHandlingUnitsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<HandlingUnitSortInput>>;
  where?: InputMaybe<HandlingUnitFilterInput>;
};


export type QueryKitByIdArgs = {
  id: Scalars['UUID'];
};


export type QueryKitByKitNoArgs = {
  kitNo: Scalars['String'];
};


export type QueryKitComponentSerialInfoArgs = {
  componentCode: Scalars['String'];
  kitNo: Scalars['String'];
};


export type QueryKitComponentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<KitComponentSortInput>>;
  where?: InputMaybe<KitComponentFilterInput>;
};


export type QueryKitListArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<KitListItemDtoSortInput>>;
  plantCode: Scalars['String'];
};


export type QueryKitSnapshosArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<KitSnapshotSortInput>>;
  where?: InputMaybe<KitSnapshotFilterInput>;
};


export type QueryKitSnapshotRunArgs = {
  plantCode: Scalars['String'];
  sequence: Scalars['Int'];
};


export type QueryKitSnapshotRunByDateArgs = {
  plantCode: Scalars['String'];
  runDate: Scalars['DateTime'];
};


export type QueryKitSnapshotRunsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<KitSnapshotRunSortInput>>;
  where?: InputMaybe<KitSnapshotRunFilterInput>;
};


export type QueryKitTimelineArgs = {
  kitNo: Scalars['String'];
};


export type QueryKitTimelineEventsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<KitTimelineEventSortInput>>;
  where?: InputMaybe<KitTimelineEventFilterInput>;
};


export type QueryKitTimelineEventsByDateArgs = {
  fromDate: Scalars['DateTime'];
  plantCode: Scalars['String'];
  timelineEventCode?: InputMaybe<TimeLineEventCode>;
  toDate: Scalars['DateTime'];
};


export type QueryKitsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<KitSortInput>>;
  plantCode: Scalars['String'];
  where?: InputMaybe<KitFilterInput>;
};


export type QueryKitsByLotArgs = {
  lotNo: Scalars['String'];
};


export type QueryLotByLotNoArgs = {
  lotNo: Scalars['String'];
};


export type QueryLotInfoArgs = {
  lotNo: Scalars['String'];
};


export type QueryLotListByBomIdArgs = {
  id: Scalars['UUID'];
};


export type QueryLotOverviewArgs = {
  lotNo: Scalars['String'];
};


export type QueryLotPartInfoArgs = {
  lotNo: Scalars['String'];
  partNo: Scalars['String'];
};


export type QueryLotPartsByBomArgs = {
  bomId: Scalars['UUID'];
};


export type QueryLotPartsByShipmentArgs = {
  shipmentId: Scalars['UUID'];
};


export type QueryLotsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<LotSortInput>>;
  plantCode: Scalars['String'];
  where?: InputMaybe<LotFilterInput>;
};


export type QueryParseBomFileArgs = {
  text: Scalars['String'];
};


export type QueryParseShipFileArgs = {
  text: Scalars['String'];
};


export type QueryParseVinFileArgs = {
  text: Scalars['String'];
};


export type QueryPartnerStatusFilePayloadArgs = {
  plantCode: Scalars['String'];
  sequence: Scalars['Int'];
};


export type QueryPartsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<PartSortInput>>;
  where?: InputMaybe<PartFilterInput>;
};


export type QueryProductionStationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<ProductionStationSortInput>>;
  where?: InputMaybe<ProductionStationFilterInput>;
};


export type QueryRecentKitSnapshotRunsArgs = {
  count: Scalars['Int'];
  plantCode: Scalars['String'];
};


export type QueryRecentLotPartsReceivedArgs = {
  count?: Scalars['Int'];
};


export type QueryShipmentOverviewArgs = {
  shipmentId: Scalars['UUID'];
};


export type QueryShipmentPartsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<ShipmentPartSortInput>>;
  where?: InputMaybe<ShipmentPartFilterInput>;
};


export type QueryShipmentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<ShipmentSortInput>>;
  where?: InputMaybe<ShipmentFilterInput>;
};


export type QueryVehicleComponentByVinAndComponentArgs = {
  componentCode: Scalars['String'];
  vin: Scalars['String'];
};


export type QueryVehicleModelByIdArgs = {
  id: Scalars['UUID'];
};


export type QueryVehicleModelComponentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<VehicleModelComponentSortInput>>;
  where?: InputMaybe<VehicleModelComponentFilterInput>;
};


export type QueryVehicleModelsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<VehicleModelSortInput>>;
  where?: InputMaybe<VehicleModelFilterInput>;
};


export type QueryVinImportsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<KitVinImportSortInput>>;
  where?: InputMaybe<KitVinImportFilterInput>;
};

export type ReceiveHandlingUnitInput = {
  handlingUnitCode?: InputMaybe<Scalars['String']>;
  remove?: Scalars['Boolean'];
};

export type ReceiveHandlingUnitPayload = {
  __typename?: 'ReceiveHandlingUnitPayload';
  code?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  invoiceNo?: Maybe<Scalars['String']>;
  lotNo?: Maybe<Scalars['String']>;
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type ReceiveLotPartInput = {
  lotNo: Scalars['String'];
  partNo: Scalars['String'];
  quantity: Scalars['Int'];
};

export type ShipFile = {
  __typename?: 'ShipFile';
  created: Scalars['DateTime'];
  lots: Array<ShipFileLot>;
  plantCode: Scalars['String'];
  sequence: Scalars['Int'];
};

export type ShipFileInput = {
  created: Scalars['DateTime'];
  lots: Array<ShipFileLotInput>;
  plantCode: Scalars['String'];
  sequence: Scalars['Int'];
};

export type ShipFileInvoice = {
  __typename?: 'ShipFileInvoice';
  invoiceNo: Scalars['String'];
  parts: Array<ShipFilePart>;
  shipDate: Scalars['DateTime'];
};

export type ShipFileInvoiceInput = {
  invoiceNo: Scalars['String'];
  parts: Array<ShipFilePartInput>;
  shipDate: Scalars['DateTime'];
};

export type ShipFileLot = {
  __typename?: 'ShipFileLot';
  invoices: Array<ShipFileInvoice>;
  lotNo: Scalars['String'];
};

export type ShipFileLotInput = {
  invoices: Array<ShipFileInvoiceInput>;
  lotNo: Scalars['String'];
};

export type ShipFilePart = {
  __typename?: 'ShipFilePart';
  customerPartDesc: Scalars['String'];
  customerPartNo: Scalars['String'];
  handlingUnitCode: Scalars['String'];
  partNo: Scalars['String'];
  quantity: Scalars['Int'];
};

export type ShipFilePartInput = {
  customerPartDesc: Scalars['String'];
  customerPartNo: Scalars['String'];
  handlingUnitCode: Scalars['String'];
  partNo: Scalars['String'];
  quantity: Scalars['Int'];
};

export type Shipment = {
  __typename?: 'Shipment';
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  plant?: Maybe<Plant>;
  plantId: Scalars['UUID'];
  removedAt?: Maybe<Scalars['DateTime']>;
  sequence: Scalars['Int'];
  shipmentLots?: Maybe<Array<Maybe<ShipmentLot>>>;
};

export type ShipmentFilterInput = {
  and?: InputMaybe<Array<ShipmentFilterInput>>;
  createdAt?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  id?: InputMaybe<ComparableGuidOperationFilterInput>;
  or?: InputMaybe<Array<ShipmentFilterInput>>;
  plant?: InputMaybe<PlantFilterInput>;
  plantId?: InputMaybe<ComparableGuidOperationFilterInput>;
  removedAt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  sequence?: InputMaybe<ComparableInt32OperationFilterInput>;
  shipmentLots?: InputMaybe<ListFilterInputTypeOfShipmentLotFilterInput>;
};

export type ShipmentInvoice = {
  __typename?: 'ShipmentInvoice';
  createdAt: Scalars['DateTime'];
  handlingUnits: Array<HandlingUnit>;
  id: Scalars['UUID'];
  invoiceNo: Scalars['String'];
  removedAt?: Maybe<Scalars['DateTime']>;
  shipDate: Scalars['DateTime'];
  shipmentLot: ShipmentLot;
  shipmentLotId: Scalars['UUID'];
};

export type ShipmentInvoiceFilterInput = {
  and?: InputMaybe<Array<ShipmentInvoiceFilterInput>>;
  createdAt?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  handlingUnits?: InputMaybe<ListFilterInputTypeOfHandlingUnitFilterInput>;
  id?: InputMaybe<ComparableGuidOperationFilterInput>;
  invoiceNo?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<ShipmentInvoiceFilterInput>>;
  removedAt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  shipDate?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  shipmentLot?: InputMaybe<ShipmentLotFilterInput>;
  shipmentLotId?: InputMaybe<ComparableGuidOperationFilterInput>;
};

export type ShipmentInvoiceSortInput = {
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  invoiceNo?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
  shipDate?: InputMaybe<SortEnumType>;
  shipmentLot?: InputMaybe<ShipmentLotSortInput>;
  shipmentLotId?: InputMaybe<SortEnumType>;
};

export type ShipmentLot = {
  __typename?: 'ShipmentLot';
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  invoices?: Maybe<Array<Maybe<ShipmentInvoice>>>;
  lot?: Maybe<Lot>;
  lotId: Scalars['UUID'];
  removedAt?: Maybe<Scalars['DateTime']>;
  shipment?: Maybe<Shipment>;
  shipmentId: Scalars['UUID'];
};

export type ShipmentLotFilterInput = {
  and?: InputMaybe<Array<ShipmentLotFilterInput>>;
  createdAt?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  id?: InputMaybe<ComparableGuidOperationFilterInput>;
  invoices?: InputMaybe<ListFilterInputTypeOfShipmentInvoiceFilterInput>;
  lot?: InputMaybe<LotFilterInput>;
  lotId?: InputMaybe<ComparableGuidOperationFilterInput>;
  or?: InputMaybe<Array<ShipmentLotFilterInput>>;
  removedAt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  shipment?: InputMaybe<ShipmentFilterInput>;
  shipmentId?: InputMaybe<ComparableGuidOperationFilterInput>;
};

export type ShipmentLotSortInput = {
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  lot?: InputMaybe<LotSortInput>;
  lotId?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
  shipment?: InputMaybe<ShipmentSortInput>;
  shipmentId?: InputMaybe<SortEnumType>;
};

export type ShipmentOverviewDto = {
  __typename?: 'ShipmentOverviewDTO';
  bomId: Scalars['UUID'];
  bomSequence: Scalars['Int'];
  bomShipDiffCount: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  handlingUnitCount: Scalars['Int'];
  handlingUnitReceivedCount: Scalars['Int'];
  id: Scalars['UUID'];
  invoiceCount: Scalars['Int'];
  lotCount: Scalars['Int'];
  lotNumbers?: Maybe<Array<Maybe<Scalars['String']>>>;
  lotPartCount: Scalars['Int'];
  lotPartReceiveBomDiffCount: Scalars['Int'];
  lotPartReceivedCount: Scalars['Int'];
  partCount: Scalars['Int'];
  plantCode?: Maybe<Scalars['String']>;
  sequence: Scalars['Int'];
};

export type ShipmentPart = {
  __typename?: 'ShipmentPart';
  createdAt: Scalars['DateTime'];
  handlingUnit?: Maybe<HandlingUnit>;
  handlingUnitId?: Maybe<Scalars['UUID']>;
  id: Scalars['UUID'];
  part?: Maybe<Part>;
  partId: Scalars['UUID'];
  quantity: Scalars['Int'];
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type ShipmentPartFilterInput = {
  and?: InputMaybe<Array<ShipmentPartFilterInput>>;
  createdAt?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  handlingUnit?: InputMaybe<HandlingUnitFilterInput>;
  handlingUnitId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
  id?: InputMaybe<ComparableGuidOperationFilterInput>;
  or?: InputMaybe<Array<ShipmentPartFilterInput>>;
  part?: InputMaybe<PartFilterInput>;
  partId?: InputMaybe<ComparableGuidOperationFilterInput>;
  quantity?: InputMaybe<ComparableInt32OperationFilterInput>;
  removedAt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
};

export type ShipmentPartSortInput = {
  createdAt?: InputMaybe<SortEnumType>;
  handlingUnit?: InputMaybe<HandlingUnitSortInput>;
  handlingUnitId?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  part?: InputMaybe<PartSortInput>;
  partId?: InputMaybe<SortEnumType>;
  quantity?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type ShipmentPartsConnection = {
  __typename?: 'ShipmentPartsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ShipmentPartsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<ShipmentPart>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ShipmentPartsEdge = {
  __typename?: 'ShipmentPartsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ShipmentPart;
};

export type ShipmentSortInput = {
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  plant?: InputMaybe<PlantSortInput>;
  plantId?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
  sequence?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type ShipmentsConnection = {
  __typename?: 'ShipmentsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ShipmentsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Shipment>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ShipmentsEdge = {
  __typename?: 'ShipmentsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Shipment;
};

export enum SnapshotChangeStatus {
  Added = 'ADDED',
  Changed = 'CHANGED',
  Final = 'FINAL',
  NoChange = 'NO_CHANGE'
}

export type SnapshotChangeStatusOperationFilterInput = {
  eq?: InputMaybe<SnapshotChangeStatus>;
  in?: InputMaybe<Array<SnapshotChangeStatus>>;
  neq?: InputMaybe<SnapshotChangeStatus>;
  nin?: InputMaybe<Array<SnapshotChangeStatus>>;
};

export type SnapshotDto = {
  __typename?: 'SnapshotDTO';
  changedCount: Scalars['Int'];
  plantCode?: Maybe<Scalars['String']>;
  removedAt?: Maybe<Scalars['DateTime']>;
  runDate: Scalars['DateTime'];
  sequence: Scalars['Int'];
  snapshotCount: Scalars['Int'];
};

export enum SortEnumType {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StatcionSerialInfo = {
  __typename?: 'StatcionSerialInfo';
  createdAt?: Maybe<Scalars['DateTime']>;
  kitComponentId: Scalars['UUID'];
  serial1?: Maybe<Scalars['String']>;
  serial2?: Maybe<Scalars['String']>;
  stationCode: Scalars['String'];
  stationName: Scalars['String'];
  stationSequence: Scalars['Int'];
  verifiedAt?: Maybe<Scalars['DateTime']>;
};

export type StringOperationFilterInput = {
  and?: InputMaybe<Array<StringOperationFilterInput>>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ncontains?: InputMaybe<Scalars['String']>;
  nendsWith?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nstartsWith?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<StringOperationFilterInput>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export enum TimeLineEventCode {
  BuildCompleted = 'BUILD_COMPLETED',
  CustomReceived = 'CUSTOM_RECEIVED',
  GateReleased = 'GATE_RELEASED',
  PlanBuild = 'PLAN_BUILD',
  VerifyVin = 'VERIFY_VIN',
  WholeSale = 'WHOLE_SALE'
}

export type TimeLineEventCodeOperationFilterInput = {
  eq?: InputMaybe<TimeLineEventCode>;
  in?: InputMaybe<Array<TimeLineEventCode>>;
  neq?: InputMaybe<TimeLineEventCode>;
  nin?: InputMaybe<Array<TimeLineEventCode>>;
};

export type TimelineEventDto = {
  __typename?: 'TimelineEventDTO';
  createdAt?: Maybe<Scalars['DateTime']>;
  eventDate?: Maybe<Scalars['DateTime']>;
  eventNote?: Maybe<Scalars['String']>;
  eventType: TimeLineEventCode;
  removedAt?: Maybe<Scalars['DateTime']>;
  sequence: Scalars['Int'];
};

export type VehicleModel = {
  __typename?: 'VehicleModel';
  body: Scalars['String'];
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['UUID'];
  lots: Array<Lot>;
  model: Scalars['String'];
  modelComponents: Array<VehicleModelComponent>;
  modelYear: Scalars['String'];
  removedAt?: Maybe<Scalars['DateTime']>;
  series: Scalars['String'];
};

export type VehicleModelComponent = {
  __typename?: 'VehicleModelComponent';
  component?: Maybe<Component>;
  componentId: Scalars['UUID'];
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  productionStation?: Maybe<ProductionStation>;
  productionStationId: Scalars['UUID'];
  removedAt?: Maybe<Scalars['DateTime']>;
  vehicleModel?: Maybe<VehicleModel>;
  vehicleModelId: Scalars['UUID'];
};

export type VehicleModelComponentFilterInput = {
  and?: InputMaybe<Array<VehicleModelComponentFilterInput>>;
  component?: InputMaybe<ComponentFilterInput>;
  componentId?: InputMaybe<ComparableGuidOperationFilterInput>;
  createdAt?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  id?: InputMaybe<ComparableGuidOperationFilterInput>;
  or?: InputMaybe<Array<VehicleModelComponentFilterInput>>;
  productionStation?: InputMaybe<ProductionStationFilterInput>;
  productionStationId?: InputMaybe<ComparableGuidOperationFilterInput>;
  removedAt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  vehicleModel?: InputMaybe<VehicleModelFilterInput>;
  vehicleModelId?: InputMaybe<ComparableGuidOperationFilterInput>;
};

export type VehicleModelComponentSortInput = {
  component?: InputMaybe<ComponentSortInput>;
  componentId?: InputMaybe<SortEnumType>;
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  productionStation?: InputMaybe<ProductionStationSortInput>;
  productionStationId?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
  vehicleModel?: InputMaybe<VehicleModelSortInput>;
  vehicleModelId?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type VehicleModelComponentsConnection = {
  __typename?: 'VehicleModelComponentsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<VehicleModelComponentsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<VehicleModelComponent>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type VehicleModelComponentsEdge = {
  __typename?: 'VehicleModelComponentsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: VehicleModelComponent;
};

export type VehicleModelFilterInput = {
  and?: InputMaybe<Array<VehicleModelFilterInput>>;
  body?: InputMaybe<StringOperationFilterInput>;
  code?: InputMaybe<StringOperationFilterInput>;
  createdAt?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  description?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<ComparableGuidOperationFilterInput>;
  lots?: InputMaybe<ListFilterInputTypeOfLotFilterInput>;
  model?: InputMaybe<StringOperationFilterInput>;
  modelComponents?: InputMaybe<ListFilterInputTypeOfVehicleModelComponentFilterInput>;
  modelYear?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<VehicleModelFilterInput>>;
  removedAt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  series?: InputMaybe<StringOperationFilterInput>;
};

export type VehicleModelFromExistingInput = {
  code: Scalars['String'];
  existingModelCode: Scalars['String'];
  modelYear: Scalars['String'];
};

export type VehicleModelInput = {
  body: Scalars['String'];
  code: Scalars['String'];
  componentStationInputs: Array<ComponentStationInput>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['UUID']>;
  model: Scalars['String'];
  modelYear: Scalars['String'];
  series: Scalars['String'];
};

export type VehicleModelSortInput = {
  body?: InputMaybe<SortEnumType>;
  code?: InputMaybe<SortEnumType>;
  createdAt?: InputMaybe<SortEnumType>;
  description?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  model?: InputMaybe<SortEnumType>;
  modelYear?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
  series?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type VehicleModelsConnection = {
  __typename?: 'VehicleModelsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<VehicleModelsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<VehicleModel>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type VehicleModelsEdge = {
  __typename?: 'VehicleModelsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: VehicleModel;
};

export type VinFile = {
  __typename?: 'VinFile';
  kits?: Maybe<Array<Maybe<VinFileKit>>>;
  partnerPlantCode?: Maybe<Scalars['String']>;
  plantCode?: Maybe<Scalars['String']>;
  sequence: Scalars['Int'];
};

export type VinFileInput = {
  kits?: InputMaybe<Array<InputMaybe<VinFileKitInput>>>;
  partnerPlantCode?: InputMaybe<Scalars['String']>;
  plantCode?: InputMaybe<Scalars['String']>;
  sequence: Scalars['Int'];
};

export type VinFileKit = {
  __typename?: 'VinFileKit';
  kitNo?: Maybe<Scalars['String']>;
  lotNo?: Maybe<Scalars['String']>;
  vin?: Maybe<Scalars['String']>;
};

export type VinFileKitInput = {
  kitNo?: InputMaybe<Scalars['String']>;
  lotNo?: InputMaybe<Scalars['String']>;
  vin?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of items. */
export type VinImportsConnection = {
  __typename?: 'VinImportsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<VinImportsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<KitVinImport>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type VinImportsEdge = {
  __typename?: 'VinImportsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: KitVinImport;
};

export type ComponentsQueryVariables = Exact<{ [key: string]: never; }>;


export type ComponentsQuery = { __typename?: 'Query', components?: { __typename?: 'ComponentsConnection', nodes?: Array<{ __typename?: 'Component', code?: string | null, name?: string | null }> | null } | null };

export type ProductionStationsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductionStationsQuery = { __typename?: 'Query', productionStations?: { __typename?: 'ProductionStationsConnection', nodes?: Array<{ __typename?: 'ProductionStation', code: string, name: string, createdAt: any, removedAt?: any | null }> | null } | null };
