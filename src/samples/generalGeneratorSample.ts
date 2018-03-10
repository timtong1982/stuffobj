import { generalGenerator } from '../generator/generalGenerator';

interface ISampleInterface {
    propertyString: string;
    propertyNumber: number;
    propertyBoolean: boolean;
}

const result = generalGenerator<ISampleInterface>();

console.log(result);
