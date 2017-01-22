import { Injectable } from "angular2/core";
import { Http, Response } from "angular2/http";
import 'rxjs/Rx';

import { BaseService } from '../services.module';
import { BaseMethodIn, BaseMethodOut} from '../../entities/entities.module';
import { Dictionary } from '../../entities/entities.module';

@Injectable()
export class CommonService extends BaseService {

    constructor(http: Http) {
        super(http);
    }

    public pingServer(input: BaseMethodIn): any {
        let parameters = new Dictionary<string, BaseMethodIn>();
        parameters.add("input", input);
        let response = this.executeGet("Common", "PingServer", parameters).map(this.mapPingServerResponse.bind(this));
        return response;
    }

    private mapPingServerResponse(info: any): BaseMethodOut {
        let result = <BaseMethodOut>info;
        return result;
    }
}