/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ListPagination {
        "count": number;
        "itemsPerPage": number;
        "offset": number;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface PokemonList {
        "listTitle": string;
    }
}
declare global {
    interface HTMLListPaginationElement extends Components.ListPagination, HTMLStencilElement {
    }
    var HTMLListPaginationElement: {
        prototype: HTMLListPaginationElement;
        new (): HTMLListPaginationElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLPokemonListElement extends Components.PokemonList, HTMLStencilElement {
    }
    var HTMLPokemonListElement: {
        prototype: HTMLPokemonListElement;
        new (): HTMLPokemonListElement;
    };
    interface HTMLElementTagNameMap {
        "list-pagination": HTMLListPaginationElement;
        "my-component": HTMLMyComponentElement;
        "pokemon-list": HTMLPokemonListElement;
    }
}
declare namespace LocalJSX {
    interface ListPagination {
        "count"?: number;
        "itemsPerPage"?: number;
        "offset"?: number;
        "onPaging"?: (event: CustomEvent<any>) => void;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface PokemonList {
        "listTitle"?: string;
    }
    interface IntrinsicElements {
        "list-pagination": ListPagination;
        "my-component": MyComponent;
        "pokemon-list": PokemonList;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "list-pagination": LocalJSX.ListPagination & JSXBase.HTMLAttributes<HTMLListPaginationElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "pokemon-list": LocalJSX.PokemonList & JSXBase.HTMLAttributes<HTMLPokemonListElement>;
        }
    }
}
