export class Dictionary<keyType, valueType> {

    public isDictionary: boolean = true;

    protected _keys:keyType[] = [];

    public add(key:keyType, value:valueType):void {
        let stringKey:string = this.createStringKey(key);
        if (this.hasKey(key)) {
            let error:string = "An element with the key '" + stringKey + "' already exists in the dictionary";
            throw error;
        } else {
            (<any>this)[stringKey] = value;
            this._keys.push(key);
        }
    }

    public updateValue(key: keyType, value: valueType): void {
        let stringKey: string = this.createStringKey(key);

        if (! this.hasKey(key)) {
            let error: string = "An element with the key '" + stringKey + "' does not exists in the dictionary";
            throw error;
        } else {
            (<any>this)[stringKey] = value;
        }
    }

    public get(key: keyType): valueType {
        return (<any>this)[this.createStringKey(key)];
    }

    public hasKey(key:keyType):boolean {
        return this.hasOwnProperty(this.createStringKey(key));
    }

    public remove(key:keyType):void {
        let stringKey:string = this.createStringKey(key);
        (<any>this)[stringKey] = undefined;
        delete (<any>this)[stringKey];
        let index = this._keys.indexOf(key);
        if (index > -1) {
            this._keys.splice(index, 1);
        }
    }

    public keys():keyType[] {
        return this._keys;
    }

    public count():number {
        return this._keys.length;
    }

    protected createStringKey(key:keyType):string {
        let stringKey:string;
        if (typeof(key) === "string") {
            stringKey = <any>key;
        } else {
            stringKey = JSON.stringify(key);
        }

        if (stringKey === "_keys") {
            throw "The key '_keys' is a reserved word and can not be used as a dictionary's key.";
        }
        return stringKey.toString();
    }
}