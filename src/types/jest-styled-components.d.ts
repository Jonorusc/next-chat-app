/* eslint-disable @typescript-eslint/no-unused-vars */
import { Plugin, NewPlugin } from 'pretty-format'

declare global {
  namespace jest {
    interface AsymetricMatcher {
      $$typeof: symbol
      // eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/no-explicit-any
      sample?: string | RegExp | object | Array<any> | Function
    }
    type Value = string | number | RegExp | AsymetricMatcher | undefined
    interface Options {
      media?: string
      modifier?: string
      supports?: string
    }
    interface Matchers<R, T> {
      toHaveStyleRule(property: string, value?: Value, options?: Options): R
    }
  }
}

export declare const StyleSheetSerializer: Exclude<Plugin, NewPlugin>
