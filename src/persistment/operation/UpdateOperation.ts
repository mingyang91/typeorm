import {ColumnMetadata} from "../../metadata-builder/metadata/ColumnMetadata";

export class UpdateOperation {
    constructor(public entity: any,
                public entityId: any,
                public columns: ColumnMetadata[]) {
    }
}