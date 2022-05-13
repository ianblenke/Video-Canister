import { InternalStorageConfig } from './interfaces';
export declare const SPAWN_PRINCIPAL_ID = "fvyzl-oaaaa-aaaal-qaxvq-cai";
export declare const INDEX_PRINCIPAL_ID = "fa7ig-piaaa-aaaal-qaxwa-cai";
export declare const IC0HOST = "https://ic0.app";
export declare const MANAGEMENT_PRINCIPAL_ID = "aaaaa-aa";
export declare const REQUIRED_CYCLES: bigint;
export declare const CHUNK_SIZE = 100000;
export declare const MIN_CHUNK_SIZE = 1;
export declare const MAX_CHUNK_SIZE = 15000000;
export declare const UPLOAD_ATTEMPTS_PER_CHUNK = 3;
export declare const DEFAULT_CONFIG: InternalStorageConfig;
export declare const enum CANISTER_TYPE {
    'VIDEO_CANISTER' = "VIDEO_CANISTER",
    'SPAWN_CANISTER' = "SPAWN_CANISTER",
    'MANAGEMENT_CANISTER' = "MANAGEMENT_CANISTER",
    'WALLET_CANISTER' = "WALLET_CANISTER",
    'INDEX_CANISTER' = "INDEX_CANISTER"
}
export declare const CANISTER_IDL_MAP: Map<string, any>;
