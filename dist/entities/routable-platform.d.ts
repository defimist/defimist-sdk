import { BigintIsh, ChainId } from '../constants';
/**
 * A platform to which Defimist can route through.
 */
export declare class RoutablePlatform {
    readonly name: string;
    readonly factoryAddress: {
        [supportedChainId in ChainId]?: string;
    };
    readonly routerAddress: {
        [supportedChainId in ChainId]?: string;
    };
    readonly initCodeHash: string;
    readonly defaultSwapFee: BigintIsh;
    static readonly DEFIMIST: RoutablePlatform;
    static readonly UNISWAP: RoutablePlatform;
    static readonly SUSHISWAP: RoutablePlatform;
    static readonly HONEYSWAP: RoutablePlatform;
    static readonly BAOSWAP: RoutablePlatform;
    static readonly LEVINSWAP: RoutablePlatform;
    constructor(name: string, factoryAddress: {
        [supportedChainId in ChainId]?: string;
    }, routerAddress: {
        [supportedChainId in ChainId]?: string;
    }, initCodeHash: string, defaultSwapFee: BigintIsh);
    supportsChain(chainId: ChainId): boolean;
}
