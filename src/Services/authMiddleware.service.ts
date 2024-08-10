import { Injectable, Scope } from "@nestjs/common";

@Injectable({ scope: Scope.REQUEST })
export class AuthenticationService {
    private company: string;
    constructor() {}

    setCompany(_company: string) {
        this.company = _company;
    }
    getCompany() {
        return this.company;
    }
}
