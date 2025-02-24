import type { BaseConfig } from "./baseConfig";

class GrupoRoutes {
    protected config: BaseConfig;
    protected name: string;
    constructor(config: BaseConfig) {
        this.config = config;
        this.name = '/Grupo';
    };

    get entity(): string {
        return `${this.name}`;
    };

    get delete(): string {
        return `${this.name}/${this.config.id}`;
    };

    get update(): string {
        return `${this.name}/${this.config.id}`;
    };

     get login(): string {
        return `${this.name}/${this.config.id}`;
    };

};

export default GrupoRoutes;
