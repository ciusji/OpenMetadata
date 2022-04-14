/* eslint-disable @typescript-eslint/no-explicit-any */
/*
 *  Copyright 2021 Collate
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *  http://www.apache.org/licenses/LICENSE-2.0
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

/**
 * DynamoDB Connection Config
 */
export interface DynamoDBConnection {
  /**
   * AWS Access key ID.
   */
  awsAccessKeyId?: any;
  /**
   * AWS Region Name.
   */
  awsRegion?: string;
  /**
   * AWS Secret Access Key.
   */
  awsSecretAccessKey?: string;
  /**
   * AWS Session Token.
   */
  awsSessionToken?: string;
  connectionArguments?: { [key: string]: string };
  connectionOptions?: { [key: string]: string };
  /**
   * Database of the data source. This is optional parameter, if you would like to restrict
   * the metadata reading to a single database. When left blank , OpenMetadata Ingestion
   * attempts to scan all the databases in Druid.
   */
  database?: string;
  /**
   * EndPoint URL for the Dynamo DB
   */
  endPointURL?: string;
  /**
   * Host and port of the DynamoDB
   */
  hostPort?: string;
  supportsMetadataExtraction?: boolean;
  /**
   * Service Type
   */
  type?: DynamoDBType;
}

/**
 * Service Type
 *
 * Service type.
 */
export enum DynamoDBType {
  DynamoDB = 'DynamoDB',
}