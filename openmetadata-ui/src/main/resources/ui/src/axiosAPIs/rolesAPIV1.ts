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

import { AxiosResponse } from 'axios';
import { Operation } from 'fast-json-patch';
import { CreatePolicy } from '../generated/api/policies/createPolicy';
import { CreateRole } from '../generated/api/teams/createRole';
import { Policy } from '../generated/entity/policies/policy';
import { Role } from '../generated/entity/teams/role';
import { Paging } from '../generated/type/paging';
import APIClient from './index';

const patchConfig = {
  headers: { 'Content-type': 'application/json-patch+json' },
};

export const getRoles = async (
  fields: string,
  after?: string,
  before?: string,
  defaultRoles = false,
  limit = 10
) => {
  const params = {
    default: defaultRoles,
    limit,
    fields,
    after,
    before,
  };

  const response = await APIClient.get<{ data: Role[]; paging: Paging }>(
    '/roles',
    { params }
  );

  return response.data;
};

export const getPolicies = async (
  fields: string,
  after?: string,
  before?: string,
  limit = 100
) => {
  const params = {
    limit,
    fields,
    after,
    before,
  };

  const response = await APIClient.get<{ data: Policy[]; paging: Paging }>(
    '/policies',
    { params }
  );

  return response.data;
};

export const getRoleByName = async (name: string, fields: string) => {
  const response = await APIClient.get<Role>(`/roles/name/${name}`, {
    params: { fields },
  });

  return response.data;
};

export const getPolicyByName = async (name: string, fields: string) => {
  const response = await APIClient.get<Policy>(`/policies/name/${name}`, {
    params: { fields },
  });

  return response.data;
};

export const addRole = async (data: CreateRole) => {
  const response = await APIClient.post<CreateRole, AxiosResponse<Role>>(
    '/roles',
    data
  );

  return response.data;
};

export const addPolicy = async (data: CreatePolicy) => {
  const response = await APIClient.post<CreatePolicy, AxiosResponse<Policy>>(
    '/policies',
    data
  );

  return response.data;
};

export const patchRole = async (data: Operation[], id: string) => {
  const response = await APIClient.patch<Operation[], AxiosResponse<Role>>(
    `/roles/${id}`,
    data,
    patchConfig
  );

  return response.data;
};

export const patchPolicy = async (data: Operation[], id: string) => {
  const response = await APIClient.patch<Operation[], AxiosResponse<Policy>>(
    `/policies/${id}`,
    data,
    patchConfig
  );

  return response.data;
};