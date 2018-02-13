import GLTF from "./Schema/GLTF";
import GLTFPrimitive from "./Schema/GLTFPrimitive";
import Geometry from "grimoirejs-fundamental/ref/Geometry/Geometry";
import GLTFImage from "./Schema/GLTFImage";

export interface ConvertToTextureArgument {
    tf: GLTF;
    image: HTMLImageElement;
    texIndex: string;
}

export interface LoadTextureResourceArgument {
    tf: GLTF;
    bufferViews: { [key: string]: ArrayBufferView };
}

export interface FetchImageResourceArgument {
    tf: GLTF;
    image: GLTFImage;
    bufferViews: { [key: string]: ArrayBufferView };
}

export interface LoadBufferViewsArgument {
    tf: GLTF;
    buffers: { [key: string]: ArrayBuffer };
}

export interface LoadPrimitivesOfMeshArgument {
    tf: GLTF;
    bufferViews: { [key: string]: ArrayBufferView }
}

export interface LoadPrimitiveArgument {
    tf: GLTF;
    bufferViews: { [key: string]: ArrayBufferView };
    primitive: GLTFPrimitive;
}

export interface AppendIndicesArgument {
    tf: GLTF;
    bufferViews: { [key: string]: ArrayBufferView };
    primitive: GLTFPrimitive;
    geometry: Geometry;
}

export interface AddVertexAttributesArgument {
    tf: GLTF;
    bufferViews: { [key: string]: ArrayBufferView };
    primitive: GLTFPrimitive;
    geometry: Geometry;
}

export default {};
