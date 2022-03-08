
export class Uusario {
    constructor(
        public nombre: string,
        public email: string,
        public img?: string,
        public pass?: string,
        public google?: boolean,
        public role?: string,
        public udi?: string
    ){}
}