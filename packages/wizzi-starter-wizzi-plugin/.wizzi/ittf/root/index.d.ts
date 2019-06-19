type cb<T> = (err: any, result: T) => void;

interface provides {
    schemas: string[];
    modelTransformers: string[];
    artifactGenerators: string[];
}

interface ModelFactory {
}

interface ModelTransformer {
}

interface ArtifactGenerator {
}

interface FactoryPlugin {
    getName() : string;
    getFilename() : string;
    getProvides() : provides;
    getModelFactory(schemaName: string) : ModelFactory;
    getModelTransformer(transformerName: string) : ModelTransformer;
    getArtifactGenerator(artifactName: string) : ArtifactGenerator;
    getSchemaDefinition(schemaName: string) : Object;
}

interface wizziPackage {
    file: WizziFile
}

interface PluginOptions {
    // TODO, currently empty
}

export function createFactoryPlugin(wizziPackage: wizziPackage, options: PluginOptions, callback: cb<FactoryPlugin>): void;