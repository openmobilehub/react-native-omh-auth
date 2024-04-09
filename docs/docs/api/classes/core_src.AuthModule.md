---
id: "core_src.AuthModule"
title: "Class: AuthModule<C>"
sidebar_label: "AuthModule"
custom_edit_url: null
---

[core/src](../modules/core_src.md).AuthModule

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | [`BaseAuthConfig`](../modules/core_src.md#baseauthconfig) |

## Constructors

### constructor

• **new AuthModule**\<`C`\>(`moduleName`): [`AuthModule`](core_src.AuthModule.md)\<`C`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | [`BaseAuthConfig`](../modules/core_src.md#baseauthconfig) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `moduleName` | `string` |

#### Returns

[`AuthModule`](core_src.AuthModule.md)\<`C`\>

#### Defined in

[core/src/AuthModule.ts:8](https://github.com/openmobilehub/rn-omh-auth/blob/b43af64eae277675f57051591f993f84fd70cd48/packages/core/src/AuthModule.ts#L8)

## Properties

### authNativeModule

• **authNativeModule**: `any`

#### Defined in

[core/src/AuthModule.ts:6](https://github.com/openmobilehub/rn-omh-auth/blob/b43af64eae277675f57051591f993f84fd70cd48/packages/core/src/AuthModule.ts#L6)

## Methods

### getAccessToken

▸ **getAccessToken**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Defined in

[core/src/AuthModule.ts:26](https://github.com/openmobilehub/rn-omh-auth/blob/b43af64eae277675f57051591f993f84fd70cd48/packages/core/src/AuthModule.ts#L26)

___

### getUser

▸ **getUser**(): `Promise`\<[`OmhUserProfile`](../modules/core_src.md#omhuserprofile)\>

#### Returns

`Promise`\<[`OmhUserProfile`](../modules/core_src.md#omhuserprofile)\>

#### Defined in

[core/src/AuthModule.ts:30](https://github.com/openmobilehub/rn-omh-auth/blob/b43af64eae277675f57051591f993f84fd70cd48/packages/core/src/AuthModule.ts#L30)

___

### initialize

▸ **initialize**(`config`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `C` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[core/src/AuthModule.ts:18](https://github.com/openmobilehub/rn-omh-auth/blob/b43af64eae277675f57051591f993f84fd70cd48/packages/core/src/AuthModule.ts#L18)

___

### refreshAccessToken

▸ **refreshAccessToken**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Defined in

[core/src/AuthModule.ts:34](https://github.com/openmobilehub/rn-omh-auth/blob/b43af64eae277675f57051591f993f84fd70cd48/packages/core/src/AuthModule.ts#L34)

___

### revokeAccessToken

▸ **revokeAccessToken**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[core/src/AuthModule.ts:38](https://github.com/openmobilehub/rn-omh-auth/blob/b43af64eae277675f57051591f993f84fd70cd48/packages/core/src/AuthModule.ts#L38)

___

### signIn

▸ **signIn**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[core/src/AuthModule.ts:22](https://github.com/openmobilehub/rn-omh-auth/blob/b43af64eae277675f57051591f993f84fd70cd48/packages/core/src/AuthModule.ts#L22)

___

### signOut

▸ **signOut**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[core/src/AuthModule.ts:42](https://github.com/openmobilehub/rn-omh-auth/blob/b43af64eae277675f57051591f993f84fd70cd48/packages/core/src/AuthModule.ts#L42)
