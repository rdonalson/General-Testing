/// ===========================================================================================
/// Initial Amount Model
/// ===========================================================================================
export interface IInitialAmount {
    PkID: number;
    UserName: string;
    Amount: number;
    BeginDate: Date;
}

export class InitialAmount implements IInitialAmount {
    constructor(
        public PkID: number,
        public UserName: string,
        public Amount: number,
        public BeginDate: Date
    ) {
    }
}

