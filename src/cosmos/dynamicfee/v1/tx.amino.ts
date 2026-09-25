/* eslint-disable */
import { MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/cosmos.dynamicfee.v1.MsgUpdateParams": {
    aminoType: "cosmos/x/dynamicfee/v1/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};