import { AppClient, CellType, decodeHashFromBase64, DnaHash, encodeHashToBase64, type EntryHash } from "@holochain/client";

export type WALUrl = string

export const hashEqual = (a:EntryHash, b:EntryHash) : boolean => {
  if (!a || !b) {
    return !a && !b
  }
  for (let i = a.length; -1 < i; i -= 1) {
    if ((a[i] !== b[i])) return false;
  }
  return true;
}

export const getMyDna = async (role:string, client: AppClient) : Promise<DnaHash|undefined>  => {
  const appInfo = await client.appInfo();
  if (appInfo) {
    const cellInfo = appInfo.cell_info[role][0];
    if (cellInfo.type === CellType.Provisioned) {
      return cellInfo.value.cell_id[0];
    }
  }
  return undefined
} 
