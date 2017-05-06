/// ===========================================================================================
/// Initial Amount View Model
/// ===========================================================================================
export interface IInitialAmountVm {
    Amount: string;
    BeginDate: string;
}

export class InitialAmountVm implements IInitialAmountVm {
    constructor(
        public Amount: string,
        public BeginDate: string
    ) {
    }
}