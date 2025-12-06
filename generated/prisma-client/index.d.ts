
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Naukari
 * 
 */
export type Naukari = $Result.DefaultSelection<Prisma.$NaukariPayload>
/**
 * Model ImportantQuesAns
 * 
 */
export type ImportantQuesAns = $Result.DefaultSelection<Prisma.$ImportantQuesAnsPayload>
/**
 * Model UsefulLinkSection
 * 
 */
export type UsefulLinkSection = $Result.DefaultSelection<Prisma.$UsefulLinkSectionPayload>
/**
 * Model UsefulLink
 * 
 */
export type UsefulLink = $Result.DefaultSelection<Prisma.$UsefulLinkPayload>
/**
 * Model DiscoverMore
 * 
 */
export type DiscoverMore = $Result.DefaultSelection<Prisma.$DiscoverMorePayload>
/**
 * Model Section
 * 
 */
export type Section = $Result.DefaultSelection<Prisma.$SectionPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.naukari`: Exposes CRUD operations for the **Naukari** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Naukaris
    * const naukaris = await prisma.naukari.findMany()
    * ```
    */
  get naukari(): Prisma.NaukariDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.importantQuesAns`: Exposes CRUD operations for the **ImportantQuesAns** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ImportantQuesAns
    * const importantQuesAns = await prisma.importantQuesAns.findMany()
    * ```
    */
  get importantQuesAns(): Prisma.ImportantQuesAnsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usefulLinkSection`: Exposes CRUD operations for the **UsefulLinkSection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UsefulLinkSections
    * const usefulLinkSections = await prisma.usefulLinkSection.findMany()
    * ```
    */
  get usefulLinkSection(): Prisma.UsefulLinkSectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usefulLink`: Exposes CRUD operations for the **UsefulLink** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UsefulLinks
    * const usefulLinks = await prisma.usefulLink.findMany()
    * ```
    */
  get usefulLink(): Prisma.UsefulLinkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.discoverMore`: Exposes CRUD operations for the **DiscoverMore** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DiscoverMores
    * const discoverMores = await prisma.discoverMore.findMany()
    * ```
    */
  get discoverMore(): Prisma.DiscoverMoreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.section`: Exposes CRUD operations for the **Section** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sections
    * const sections = await prisma.section.findMany()
    * ```
    */
  get section(): Prisma.SectionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Naukari: 'Naukari',
    ImportantQuesAns: 'ImportantQuesAns',
    UsefulLinkSection: 'UsefulLinkSection',
    UsefulLink: 'UsefulLink',
    DiscoverMore: 'DiscoverMore',
    Section: 'Section'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "naukari" | "importantQuesAns" | "usefulLinkSection" | "usefulLink" | "discoverMore" | "section"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Naukari: {
        payload: Prisma.$NaukariPayload<ExtArgs>
        fields: Prisma.NaukariFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NaukariFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NaukariPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NaukariFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NaukariPayload>
          }
          findFirst: {
            args: Prisma.NaukariFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NaukariPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NaukariFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NaukariPayload>
          }
          findMany: {
            args: Prisma.NaukariFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NaukariPayload>[]
          }
          create: {
            args: Prisma.NaukariCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NaukariPayload>
          }
          createMany: {
            args: Prisma.NaukariCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NaukariCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NaukariPayload>[]
          }
          delete: {
            args: Prisma.NaukariDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NaukariPayload>
          }
          update: {
            args: Prisma.NaukariUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NaukariPayload>
          }
          deleteMany: {
            args: Prisma.NaukariDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NaukariUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NaukariUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NaukariPayload>[]
          }
          upsert: {
            args: Prisma.NaukariUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NaukariPayload>
          }
          aggregate: {
            args: Prisma.NaukariAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNaukari>
          }
          groupBy: {
            args: Prisma.NaukariGroupByArgs<ExtArgs>
            result: $Utils.Optional<NaukariGroupByOutputType>[]
          }
          count: {
            args: Prisma.NaukariCountArgs<ExtArgs>
            result: $Utils.Optional<NaukariCountAggregateOutputType> | number
          }
        }
      }
      ImportantQuesAns: {
        payload: Prisma.$ImportantQuesAnsPayload<ExtArgs>
        fields: Prisma.ImportantQuesAnsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImportantQuesAnsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportantQuesAnsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImportantQuesAnsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportantQuesAnsPayload>
          }
          findFirst: {
            args: Prisma.ImportantQuesAnsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportantQuesAnsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImportantQuesAnsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportantQuesAnsPayload>
          }
          findMany: {
            args: Prisma.ImportantQuesAnsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportantQuesAnsPayload>[]
          }
          create: {
            args: Prisma.ImportantQuesAnsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportantQuesAnsPayload>
          }
          createMany: {
            args: Prisma.ImportantQuesAnsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImportantQuesAnsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportantQuesAnsPayload>[]
          }
          delete: {
            args: Prisma.ImportantQuesAnsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportantQuesAnsPayload>
          }
          update: {
            args: Prisma.ImportantQuesAnsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportantQuesAnsPayload>
          }
          deleteMany: {
            args: Prisma.ImportantQuesAnsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImportantQuesAnsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImportantQuesAnsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportantQuesAnsPayload>[]
          }
          upsert: {
            args: Prisma.ImportantQuesAnsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportantQuesAnsPayload>
          }
          aggregate: {
            args: Prisma.ImportantQuesAnsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImportantQuesAns>
          }
          groupBy: {
            args: Prisma.ImportantQuesAnsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImportantQuesAnsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImportantQuesAnsCountArgs<ExtArgs>
            result: $Utils.Optional<ImportantQuesAnsCountAggregateOutputType> | number
          }
        }
      }
      UsefulLinkSection: {
        payload: Prisma.$UsefulLinkSectionPayload<ExtArgs>
        fields: Prisma.UsefulLinkSectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsefulLinkSectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsefulLinkSectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsefulLinkSectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsefulLinkSectionPayload>
          }
          findFirst: {
            args: Prisma.UsefulLinkSectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsefulLinkSectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsefulLinkSectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsefulLinkSectionPayload>
          }
          findMany: {
            args: Prisma.UsefulLinkSectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsefulLinkSectionPayload>[]
          }
          create: {
            args: Prisma.UsefulLinkSectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsefulLinkSectionPayload>
          }
          createMany: {
            args: Prisma.UsefulLinkSectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsefulLinkSectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsefulLinkSectionPayload>[]
          }
          delete: {
            args: Prisma.UsefulLinkSectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsefulLinkSectionPayload>
          }
          update: {
            args: Prisma.UsefulLinkSectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsefulLinkSectionPayload>
          }
          deleteMany: {
            args: Prisma.UsefulLinkSectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsefulLinkSectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsefulLinkSectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsefulLinkSectionPayload>[]
          }
          upsert: {
            args: Prisma.UsefulLinkSectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsefulLinkSectionPayload>
          }
          aggregate: {
            args: Prisma.UsefulLinkSectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsefulLinkSection>
          }
          groupBy: {
            args: Prisma.UsefulLinkSectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsefulLinkSectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsefulLinkSectionCountArgs<ExtArgs>
            result: $Utils.Optional<UsefulLinkSectionCountAggregateOutputType> | number
          }
        }
      }
      UsefulLink: {
        payload: Prisma.$UsefulLinkPayload<ExtArgs>
        fields: Prisma.UsefulLinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsefulLinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsefulLinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsefulLinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsefulLinkPayload>
          }
          findFirst: {
            args: Prisma.UsefulLinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsefulLinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsefulLinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsefulLinkPayload>
          }
          findMany: {
            args: Prisma.UsefulLinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsefulLinkPayload>[]
          }
          create: {
            args: Prisma.UsefulLinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsefulLinkPayload>
          }
          createMany: {
            args: Prisma.UsefulLinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsefulLinkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsefulLinkPayload>[]
          }
          delete: {
            args: Prisma.UsefulLinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsefulLinkPayload>
          }
          update: {
            args: Prisma.UsefulLinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsefulLinkPayload>
          }
          deleteMany: {
            args: Prisma.UsefulLinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsefulLinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsefulLinkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsefulLinkPayload>[]
          }
          upsert: {
            args: Prisma.UsefulLinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsefulLinkPayload>
          }
          aggregate: {
            args: Prisma.UsefulLinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsefulLink>
          }
          groupBy: {
            args: Prisma.UsefulLinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsefulLinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsefulLinkCountArgs<ExtArgs>
            result: $Utils.Optional<UsefulLinkCountAggregateOutputType> | number
          }
        }
      }
      DiscoverMore: {
        payload: Prisma.$DiscoverMorePayload<ExtArgs>
        fields: Prisma.DiscoverMoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiscoverMoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscoverMorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiscoverMoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscoverMorePayload>
          }
          findFirst: {
            args: Prisma.DiscoverMoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscoverMorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiscoverMoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscoverMorePayload>
          }
          findMany: {
            args: Prisma.DiscoverMoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscoverMorePayload>[]
          }
          create: {
            args: Prisma.DiscoverMoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscoverMorePayload>
          }
          createMany: {
            args: Prisma.DiscoverMoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DiscoverMoreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscoverMorePayload>[]
          }
          delete: {
            args: Prisma.DiscoverMoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscoverMorePayload>
          }
          update: {
            args: Prisma.DiscoverMoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscoverMorePayload>
          }
          deleteMany: {
            args: Prisma.DiscoverMoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiscoverMoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DiscoverMoreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscoverMorePayload>[]
          }
          upsert: {
            args: Prisma.DiscoverMoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscoverMorePayload>
          }
          aggregate: {
            args: Prisma.DiscoverMoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiscoverMore>
          }
          groupBy: {
            args: Prisma.DiscoverMoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiscoverMoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiscoverMoreCountArgs<ExtArgs>
            result: $Utils.Optional<DiscoverMoreCountAggregateOutputType> | number
          }
        }
      }
      Section: {
        payload: Prisma.$SectionPayload<ExtArgs>
        fields: Prisma.SectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          findFirst: {
            args: Prisma.SectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          findMany: {
            args: Prisma.SectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>[]
          }
          create: {
            args: Prisma.SectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          createMany: {
            args: Prisma.SectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>[]
          }
          delete: {
            args: Prisma.SectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          update: {
            args: Prisma.SectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          deleteMany: {
            args: Prisma.SectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>[]
          }
          upsert: {
            args: Prisma.SectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          aggregate: {
            args: Prisma.SectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSection>
          }
          groupBy: {
            args: Prisma.SectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SectionCountArgs<ExtArgs>
            result: $Utils.Optional<SectionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    naukari?: NaukariOmit
    importantQuesAns?: ImportantQuesAnsOmit
    usefulLinkSection?: UsefulLinkSectionOmit
    usefulLink?: UsefulLinkOmit
    discoverMore?: DiscoverMoreOmit
    section?: SectionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type NaukariCountOutputType
   */

  export type NaukariCountOutputType = {
    importantQuesAns: number
    usefulLinks: number
    discoverMoreLinks: number
  }

  export type NaukariCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    importantQuesAns?: boolean | NaukariCountOutputTypeCountImportantQuesAnsArgs
    usefulLinks?: boolean | NaukariCountOutputTypeCountUsefulLinksArgs
    discoverMoreLinks?: boolean | NaukariCountOutputTypeCountDiscoverMoreLinksArgs
  }

  // Custom InputTypes
  /**
   * NaukariCountOutputType without action
   */
  export type NaukariCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NaukariCountOutputType
     */
    select?: NaukariCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NaukariCountOutputType without action
   */
  export type NaukariCountOutputTypeCountImportantQuesAnsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImportantQuesAnsWhereInput
  }

  /**
   * NaukariCountOutputType without action
   */
  export type NaukariCountOutputTypeCountUsefulLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsefulLinkSectionWhereInput
  }

  /**
   * NaukariCountOutputType without action
   */
  export type NaukariCountOutputTypeCountDiscoverMoreLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiscoverMoreWhereInput
  }


  /**
   * Count Type UsefulLinkSectionCountOutputType
   */

  export type UsefulLinkSectionCountOutputType = {
    links: number
  }

  export type UsefulLinkSectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    links?: boolean | UsefulLinkSectionCountOutputTypeCountLinksArgs
  }

  // Custom InputTypes
  /**
   * UsefulLinkSectionCountOutputType without action
   */
  export type UsefulLinkSectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsefulLinkSectionCountOutputType
     */
    select?: UsefulLinkSectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsefulLinkSectionCountOutputType without action
   */
  export type UsefulLinkSectionCountOutputTypeCountLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsefulLinkWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    status: number | null
    created_by: number | null
    updated_by: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    status: number | null
    created_by: number | null
    updated_by: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    role: string | null
    password: string | null
    status: number | null
    createdAt: Date | null
    updatedAt: Date | null
    created_by: number | null
    updated_by: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    role: string | null
    password: string | null
    status: number | null
    createdAt: Date | null
    updatedAt: Date | null
    created_by: number | null
    updated_by: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    role: number
    password: number
    status: number
    createdAt: number
    updatedAt: number
    created_by: number
    updated_by: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    status?: true
    created_by?: true
    updated_by?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    status?: true
    created_by?: true
    updated_by?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    role?: true
    password?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    created_by?: true
    updated_by?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    role?: true
    password?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    created_by?: true
    updated_by?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    role?: true
    password?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    created_by?: true
    updated_by?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    role: string
    password: string
    status: number
    createdAt: Date
    updatedAt: Date
    created_by: number | null
    updated_by: number | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    password?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    created_by?: boolean
    updated_by?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    password?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    created_by?: boolean
    updated_by?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    password?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    created_by?: boolean
    updated_by?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    password?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    created_by?: boolean
    updated_by?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "role" | "password" | "status" | "createdAt" | "updatedAt" | "created_by" | "updated_by", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      role: string
      password: string
      status: number
      createdAt: Date
      updatedAt: Date
      created_by: number | null
      updated_by: number | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly status: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly created_by: FieldRef<"User", 'Int'>
    readonly updated_by: FieldRef<"User", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Naukari
   */

  export type AggregateNaukari = {
    _count: NaukariCountAggregateOutputType | null
    _avg: NaukariAvgAggregateOutputType | null
    _sum: NaukariSumAggregateOutputType | null
    _min: NaukariMinAggregateOutputType | null
    _max: NaukariMaxAggregateOutputType | null
  }

  export type NaukariAvgAggregateOutputType = {
    naukari_id: number | null
    status: number | null
    created_by: number | null
    updated_by: number | null
  }

  export type NaukariSumAggregateOutputType = {
    naukari_id: number | null
    status: number | null
    created_by: number | null
    updated_by: number | null
  }

  export type NaukariMinAggregateOutputType = {
    naukari_id: number | null
    title: string | null
    isResult: boolean | null
    isAdmitCard: boolean | null
    postDate: Date | null
    description: string | null
    slug: string | null
    seo_title: string | null
    seo_keywords: string | null
    seo_published_date: Date | null
    seo_description: string | null
    seo_section: string | null
    seo_sub_section: string | null
    seo_category: string | null
    status: number | null
    createdAt: Date | null
    updatedAt: Date | null
    created_by: number | null
    updated_by: number | null
  }

  export type NaukariMaxAggregateOutputType = {
    naukari_id: number | null
    title: string | null
    isResult: boolean | null
    isAdmitCard: boolean | null
    postDate: Date | null
    description: string | null
    slug: string | null
    seo_title: string | null
    seo_keywords: string | null
    seo_published_date: Date | null
    seo_description: string | null
    seo_section: string | null
    seo_sub_section: string | null
    seo_category: string | null
    status: number | null
    createdAt: Date | null
    updatedAt: Date | null
    created_by: number | null
    updated_by: number | null
  }

  export type NaukariCountAggregateOutputType = {
    naukari_id: number
    title: number
    isResult: number
    isAdmitCard: number
    postDate: number
    description: number
    slug: number
    seo_title: number
    seo_keywords: number
    seo_published_date: number
    seo_description: number
    seo_section: number
    seo_sub_section: number
    seo_category: number
    status: number
    createdAt: number
    updatedAt: number
    created_by: number
    updated_by: number
    _all: number
  }


  export type NaukariAvgAggregateInputType = {
    naukari_id?: true
    status?: true
    created_by?: true
    updated_by?: true
  }

  export type NaukariSumAggregateInputType = {
    naukari_id?: true
    status?: true
    created_by?: true
    updated_by?: true
  }

  export type NaukariMinAggregateInputType = {
    naukari_id?: true
    title?: true
    isResult?: true
    isAdmitCard?: true
    postDate?: true
    description?: true
    slug?: true
    seo_title?: true
    seo_keywords?: true
    seo_published_date?: true
    seo_description?: true
    seo_section?: true
    seo_sub_section?: true
    seo_category?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    created_by?: true
    updated_by?: true
  }

  export type NaukariMaxAggregateInputType = {
    naukari_id?: true
    title?: true
    isResult?: true
    isAdmitCard?: true
    postDate?: true
    description?: true
    slug?: true
    seo_title?: true
    seo_keywords?: true
    seo_published_date?: true
    seo_description?: true
    seo_section?: true
    seo_sub_section?: true
    seo_category?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    created_by?: true
    updated_by?: true
  }

  export type NaukariCountAggregateInputType = {
    naukari_id?: true
    title?: true
    isResult?: true
    isAdmitCard?: true
    postDate?: true
    description?: true
    slug?: true
    seo_title?: true
    seo_keywords?: true
    seo_published_date?: true
    seo_description?: true
    seo_section?: true
    seo_sub_section?: true
    seo_category?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    created_by?: true
    updated_by?: true
    _all?: true
  }

  export type NaukariAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Naukari to aggregate.
     */
    where?: NaukariWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Naukaris to fetch.
     */
    orderBy?: NaukariOrderByWithRelationInput | NaukariOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NaukariWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Naukaris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Naukaris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Naukaris
    **/
    _count?: true | NaukariCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NaukariAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NaukariSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NaukariMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NaukariMaxAggregateInputType
  }

  export type GetNaukariAggregateType<T extends NaukariAggregateArgs> = {
        [P in keyof T & keyof AggregateNaukari]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNaukari[P]>
      : GetScalarType<T[P], AggregateNaukari[P]>
  }




  export type NaukariGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NaukariWhereInput
    orderBy?: NaukariOrderByWithAggregationInput | NaukariOrderByWithAggregationInput[]
    by: NaukariScalarFieldEnum[] | NaukariScalarFieldEnum
    having?: NaukariScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NaukariCountAggregateInputType | true
    _avg?: NaukariAvgAggregateInputType
    _sum?: NaukariSumAggregateInputType
    _min?: NaukariMinAggregateInputType
    _max?: NaukariMaxAggregateInputType
  }

  export type NaukariGroupByOutputType = {
    naukari_id: number
    title: string
    isResult: boolean
    isAdmitCard: boolean
    postDate: Date
    description: string
    slug: string
    seo_title: string
    seo_keywords: string
    seo_published_date: Date
    seo_description: string
    seo_section: string
    seo_sub_section: string | null
    seo_category: string
    status: number
    createdAt: Date
    updatedAt: Date
    created_by: number | null
    updated_by: number | null
    _count: NaukariCountAggregateOutputType | null
    _avg: NaukariAvgAggregateOutputType | null
    _sum: NaukariSumAggregateOutputType | null
    _min: NaukariMinAggregateOutputType | null
    _max: NaukariMaxAggregateOutputType | null
  }

  type GetNaukariGroupByPayload<T extends NaukariGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NaukariGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NaukariGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NaukariGroupByOutputType[P]>
            : GetScalarType<T[P], NaukariGroupByOutputType[P]>
        }
      >
    >


  export type NaukariSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    naukari_id?: boolean
    title?: boolean
    isResult?: boolean
    isAdmitCard?: boolean
    postDate?: boolean
    description?: boolean
    slug?: boolean
    seo_title?: boolean
    seo_keywords?: boolean
    seo_published_date?: boolean
    seo_description?: boolean
    seo_section?: boolean
    seo_sub_section?: boolean
    seo_category?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    created_by?: boolean
    updated_by?: boolean
    importantQuesAns?: boolean | Naukari$importantQuesAnsArgs<ExtArgs>
    usefulLinks?: boolean | Naukari$usefulLinksArgs<ExtArgs>
    discoverMoreLinks?: boolean | Naukari$discoverMoreLinksArgs<ExtArgs>
    _count?: boolean | NaukariCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["naukari"]>

  export type NaukariSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    naukari_id?: boolean
    title?: boolean
    isResult?: boolean
    isAdmitCard?: boolean
    postDate?: boolean
    description?: boolean
    slug?: boolean
    seo_title?: boolean
    seo_keywords?: boolean
    seo_published_date?: boolean
    seo_description?: boolean
    seo_section?: boolean
    seo_sub_section?: boolean
    seo_category?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    created_by?: boolean
    updated_by?: boolean
  }, ExtArgs["result"]["naukari"]>

  export type NaukariSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    naukari_id?: boolean
    title?: boolean
    isResult?: boolean
    isAdmitCard?: boolean
    postDate?: boolean
    description?: boolean
    slug?: boolean
    seo_title?: boolean
    seo_keywords?: boolean
    seo_published_date?: boolean
    seo_description?: boolean
    seo_section?: boolean
    seo_sub_section?: boolean
    seo_category?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    created_by?: boolean
    updated_by?: boolean
  }, ExtArgs["result"]["naukari"]>

  export type NaukariSelectScalar = {
    naukari_id?: boolean
    title?: boolean
    isResult?: boolean
    isAdmitCard?: boolean
    postDate?: boolean
    description?: boolean
    slug?: boolean
    seo_title?: boolean
    seo_keywords?: boolean
    seo_published_date?: boolean
    seo_description?: boolean
    seo_section?: boolean
    seo_sub_section?: boolean
    seo_category?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    created_by?: boolean
    updated_by?: boolean
  }

  export type NaukariOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"naukari_id" | "title" | "isResult" | "isAdmitCard" | "postDate" | "description" | "slug" | "seo_title" | "seo_keywords" | "seo_published_date" | "seo_description" | "seo_section" | "seo_sub_section" | "seo_category" | "status" | "createdAt" | "updatedAt" | "created_by" | "updated_by", ExtArgs["result"]["naukari"]>
  export type NaukariInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    importantQuesAns?: boolean | Naukari$importantQuesAnsArgs<ExtArgs>
    usefulLinks?: boolean | Naukari$usefulLinksArgs<ExtArgs>
    discoverMoreLinks?: boolean | Naukari$discoverMoreLinksArgs<ExtArgs>
    _count?: boolean | NaukariCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NaukariIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type NaukariIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $NaukariPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Naukari"
    objects: {
      importantQuesAns: Prisma.$ImportantQuesAnsPayload<ExtArgs>[]
      usefulLinks: Prisma.$UsefulLinkSectionPayload<ExtArgs>[]
      discoverMoreLinks: Prisma.$DiscoverMorePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      naukari_id: number
      title: string
      isResult: boolean
      isAdmitCard: boolean
      postDate: Date
      description: string
      slug: string
      seo_title: string
      seo_keywords: string
      seo_published_date: Date
      seo_description: string
      seo_section: string
      seo_sub_section: string | null
      seo_category: string
      status: number
      createdAt: Date
      updatedAt: Date
      created_by: number | null
      updated_by: number | null
    }, ExtArgs["result"]["naukari"]>
    composites: {}
  }

  type NaukariGetPayload<S extends boolean | null | undefined | NaukariDefaultArgs> = $Result.GetResult<Prisma.$NaukariPayload, S>

  type NaukariCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NaukariFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NaukariCountAggregateInputType | true
    }

  export interface NaukariDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Naukari'], meta: { name: 'Naukari' } }
    /**
     * Find zero or one Naukari that matches the filter.
     * @param {NaukariFindUniqueArgs} args - Arguments to find a Naukari
     * @example
     * // Get one Naukari
     * const naukari = await prisma.naukari.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NaukariFindUniqueArgs>(args: SelectSubset<T, NaukariFindUniqueArgs<ExtArgs>>): Prisma__NaukariClient<$Result.GetResult<Prisma.$NaukariPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Naukari that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NaukariFindUniqueOrThrowArgs} args - Arguments to find a Naukari
     * @example
     * // Get one Naukari
     * const naukari = await prisma.naukari.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NaukariFindUniqueOrThrowArgs>(args: SelectSubset<T, NaukariFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NaukariClient<$Result.GetResult<Prisma.$NaukariPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Naukari that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NaukariFindFirstArgs} args - Arguments to find a Naukari
     * @example
     * // Get one Naukari
     * const naukari = await prisma.naukari.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NaukariFindFirstArgs>(args?: SelectSubset<T, NaukariFindFirstArgs<ExtArgs>>): Prisma__NaukariClient<$Result.GetResult<Prisma.$NaukariPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Naukari that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NaukariFindFirstOrThrowArgs} args - Arguments to find a Naukari
     * @example
     * // Get one Naukari
     * const naukari = await prisma.naukari.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NaukariFindFirstOrThrowArgs>(args?: SelectSubset<T, NaukariFindFirstOrThrowArgs<ExtArgs>>): Prisma__NaukariClient<$Result.GetResult<Prisma.$NaukariPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Naukaris that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NaukariFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Naukaris
     * const naukaris = await prisma.naukari.findMany()
     * 
     * // Get first 10 Naukaris
     * const naukaris = await prisma.naukari.findMany({ take: 10 })
     * 
     * // Only select the `naukari_id`
     * const naukariWithNaukari_idOnly = await prisma.naukari.findMany({ select: { naukari_id: true } })
     * 
     */
    findMany<T extends NaukariFindManyArgs>(args?: SelectSubset<T, NaukariFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NaukariPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Naukari.
     * @param {NaukariCreateArgs} args - Arguments to create a Naukari.
     * @example
     * // Create one Naukari
     * const Naukari = await prisma.naukari.create({
     *   data: {
     *     // ... data to create a Naukari
     *   }
     * })
     * 
     */
    create<T extends NaukariCreateArgs>(args: SelectSubset<T, NaukariCreateArgs<ExtArgs>>): Prisma__NaukariClient<$Result.GetResult<Prisma.$NaukariPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Naukaris.
     * @param {NaukariCreateManyArgs} args - Arguments to create many Naukaris.
     * @example
     * // Create many Naukaris
     * const naukari = await prisma.naukari.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NaukariCreateManyArgs>(args?: SelectSubset<T, NaukariCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Naukaris and returns the data saved in the database.
     * @param {NaukariCreateManyAndReturnArgs} args - Arguments to create many Naukaris.
     * @example
     * // Create many Naukaris
     * const naukari = await prisma.naukari.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Naukaris and only return the `naukari_id`
     * const naukariWithNaukari_idOnly = await prisma.naukari.createManyAndReturn({
     *   select: { naukari_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NaukariCreateManyAndReturnArgs>(args?: SelectSubset<T, NaukariCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NaukariPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Naukari.
     * @param {NaukariDeleteArgs} args - Arguments to delete one Naukari.
     * @example
     * // Delete one Naukari
     * const Naukari = await prisma.naukari.delete({
     *   where: {
     *     // ... filter to delete one Naukari
     *   }
     * })
     * 
     */
    delete<T extends NaukariDeleteArgs>(args: SelectSubset<T, NaukariDeleteArgs<ExtArgs>>): Prisma__NaukariClient<$Result.GetResult<Prisma.$NaukariPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Naukari.
     * @param {NaukariUpdateArgs} args - Arguments to update one Naukari.
     * @example
     * // Update one Naukari
     * const naukari = await prisma.naukari.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NaukariUpdateArgs>(args: SelectSubset<T, NaukariUpdateArgs<ExtArgs>>): Prisma__NaukariClient<$Result.GetResult<Prisma.$NaukariPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Naukaris.
     * @param {NaukariDeleteManyArgs} args - Arguments to filter Naukaris to delete.
     * @example
     * // Delete a few Naukaris
     * const { count } = await prisma.naukari.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NaukariDeleteManyArgs>(args?: SelectSubset<T, NaukariDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Naukaris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NaukariUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Naukaris
     * const naukari = await prisma.naukari.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NaukariUpdateManyArgs>(args: SelectSubset<T, NaukariUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Naukaris and returns the data updated in the database.
     * @param {NaukariUpdateManyAndReturnArgs} args - Arguments to update many Naukaris.
     * @example
     * // Update many Naukaris
     * const naukari = await prisma.naukari.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Naukaris and only return the `naukari_id`
     * const naukariWithNaukari_idOnly = await prisma.naukari.updateManyAndReturn({
     *   select: { naukari_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NaukariUpdateManyAndReturnArgs>(args: SelectSubset<T, NaukariUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NaukariPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Naukari.
     * @param {NaukariUpsertArgs} args - Arguments to update or create a Naukari.
     * @example
     * // Update or create a Naukari
     * const naukari = await prisma.naukari.upsert({
     *   create: {
     *     // ... data to create a Naukari
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Naukari we want to update
     *   }
     * })
     */
    upsert<T extends NaukariUpsertArgs>(args: SelectSubset<T, NaukariUpsertArgs<ExtArgs>>): Prisma__NaukariClient<$Result.GetResult<Prisma.$NaukariPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Naukaris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NaukariCountArgs} args - Arguments to filter Naukaris to count.
     * @example
     * // Count the number of Naukaris
     * const count = await prisma.naukari.count({
     *   where: {
     *     // ... the filter for the Naukaris we want to count
     *   }
     * })
    **/
    count<T extends NaukariCountArgs>(
      args?: Subset<T, NaukariCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NaukariCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Naukari.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NaukariAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NaukariAggregateArgs>(args: Subset<T, NaukariAggregateArgs>): Prisma.PrismaPromise<GetNaukariAggregateType<T>>

    /**
     * Group by Naukari.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NaukariGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NaukariGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NaukariGroupByArgs['orderBy'] }
        : { orderBy?: NaukariGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NaukariGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNaukariGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Naukari model
   */
  readonly fields: NaukariFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Naukari.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NaukariClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    importantQuesAns<T extends Naukari$importantQuesAnsArgs<ExtArgs> = {}>(args?: Subset<T, Naukari$importantQuesAnsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImportantQuesAnsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usefulLinks<T extends Naukari$usefulLinksArgs<ExtArgs> = {}>(args?: Subset<T, Naukari$usefulLinksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsefulLinkSectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    discoverMoreLinks<T extends Naukari$discoverMoreLinksArgs<ExtArgs> = {}>(args?: Subset<T, Naukari$discoverMoreLinksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscoverMorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Naukari model
   */
  interface NaukariFieldRefs {
    readonly naukari_id: FieldRef<"Naukari", 'Int'>
    readonly title: FieldRef<"Naukari", 'String'>
    readonly isResult: FieldRef<"Naukari", 'Boolean'>
    readonly isAdmitCard: FieldRef<"Naukari", 'Boolean'>
    readonly postDate: FieldRef<"Naukari", 'DateTime'>
    readonly description: FieldRef<"Naukari", 'String'>
    readonly slug: FieldRef<"Naukari", 'String'>
    readonly seo_title: FieldRef<"Naukari", 'String'>
    readonly seo_keywords: FieldRef<"Naukari", 'String'>
    readonly seo_published_date: FieldRef<"Naukari", 'DateTime'>
    readonly seo_description: FieldRef<"Naukari", 'String'>
    readonly seo_section: FieldRef<"Naukari", 'String'>
    readonly seo_sub_section: FieldRef<"Naukari", 'String'>
    readonly seo_category: FieldRef<"Naukari", 'String'>
    readonly status: FieldRef<"Naukari", 'Int'>
    readonly createdAt: FieldRef<"Naukari", 'DateTime'>
    readonly updatedAt: FieldRef<"Naukari", 'DateTime'>
    readonly created_by: FieldRef<"Naukari", 'Int'>
    readonly updated_by: FieldRef<"Naukari", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Naukari findUnique
   */
  export type NaukariFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Naukari
     */
    select?: NaukariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Naukari
     */
    omit?: NaukariOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NaukariInclude<ExtArgs> | null
    /**
     * Filter, which Naukari to fetch.
     */
    where: NaukariWhereUniqueInput
  }

  /**
   * Naukari findUniqueOrThrow
   */
  export type NaukariFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Naukari
     */
    select?: NaukariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Naukari
     */
    omit?: NaukariOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NaukariInclude<ExtArgs> | null
    /**
     * Filter, which Naukari to fetch.
     */
    where: NaukariWhereUniqueInput
  }

  /**
   * Naukari findFirst
   */
  export type NaukariFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Naukari
     */
    select?: NaukariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Naukari
     */
    omit?: NaukariOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NaukariInclude<ExtArgs> | null
    /**
     * Filter, which Naukari to fetch.
     */
    where?: NaukariWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Naukaris to fetch.
     */
    orderBy?: NaukariOrderByWithRelationInput | NaukariOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Naukaris.
     */
    cursor?: NaukariWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Naukaris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Naukaris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Naukaris.
     */
    distinct?: NaukariScalarFieldEnum | NaukariScalarFieldEnum[]
  }

  /**
   * Naukari findFirstOrThrow
   */
  export type NaukariFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Naukari
     */
    select?: NaukariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Naukari
     */
    omit?: NaukariOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NaukariInclude<ExtArgs> | null
    /**
     * Filter, which Naukari to fetch.
     */
    where?: NaukariWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Naukaris to fetch.
     */
    orderBy?: NaukariOrderByWithRelationInput | NaukariOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Naukaris.
     */
    cursor?: NaukariWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Naukaris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Naukaris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Naukaris.
     */
    distinct?: NaukariScalarFieldEnum | NaukariScalarFieldEnum[]
  }

  /**
   * Naukari findMany
   */
  export type NaukariFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Naukari
     */
    select?: NaukariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Naukari
     */
    omit?: NaukariOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NaukariInclude<ExtArgs> | null
    /**
     * Filter, which Naukaris to fetch.
     */
    where?: NaukariWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Naukaris to fetch.
     */
    orderBy?: NaukariOrderByWithRelationInput | NaukariOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Naukaris.
     */
    cursor?: NaukariWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Naukaris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Naukaris.
     */
    skip?: number
    distinct?: NaukariScalarFieldEnum | NaukariScalarFieldEnum[]
  }

  /**
   * Naukari create
   */
  export type NaukariCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Naukari
     */
    select?: NaukariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Naukari
     */
    omit?: NaukariOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NaukariInclude<ExtArgs> | null
    /**
     * The data needed to create a Naukari.
     */
    data: XOR<NaukariCreateInput, NaukariUncheckedCreateInput>
  }

  /**
   * Naukari createMany
   */
  export type NaukariCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Naukaris.
     */
    data: NaukariCreateManyInput | NaukariCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Naukari createManyAndReturn
   */
  export type NaukariCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Naukari
     */
    select?: NaukariSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Naukari
     */
    omit?: NaukariOmit<ExtArgs> | null
    /**
     * The data used to create many Naukaris.
     */
    data: NaukariCreateManyInput | NaukariCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Naukari update
   */
  export type NaukariUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Naukari
     */
    select?: NaukariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Naukari
     */
    omit?: NaukariOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NaukariInclude<ExtArgs> | null
    /**
     * The data needed to update a Naukari.
     */
    data: XOR<NaukariUpdateInput, NaukariUncheckedUpdateInput>
    /**
     * Choose, which Naukari to update.
     */
    where: NaukariWhereUniqueInput
  }

  /**
   * Naukari updateMany
   */
  export type NaukariUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Naukaris.
     */
    data: XOR<NaukariUpdateManyMutationInput, NaukariUncheckedUpdateManyInput>
    /**
     * Filter which Naukaris to update
     */
    where?: NaukariWhereInput
    /**
     * Limit how many Naukaris to update.
     */
    limit?: number
  }

  /**
   * Naukari updateManyAndReturn
   */
  export type NaukariUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Naukari
     */
    select?: NaukariSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Naukari
     */
    omit?: NaukariOmit<ExtArgs> | null
    /**
     * The data used to update Naukaris.
     */
    data: XOR<NaukariUpdateManyMutationInput, NaukariUncheckedUpdateManyInput>
    /**
     * Filter which Naukaris to update
     */
    where?: NaukariWhereInput
    /**
     * Limit how many Naukaris to update.
     */
    limit?: number
  }

  /**
   * Naukari upsert
   */
  export type NaukariUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Naukari
     */
    select?: NaukariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Naukari
     */
    omit?: NaukariOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NaukariInclude<ExtArgs> | null
    /**
     * The filter to search for the Naukari to update in case it exists.
     */
    where: NaukariWhereUniqueInput
    /**
     * In case the Naukari found by the `where` argument doesn't exist, create a new Naukari with this data.
     */
    create: XOR<NaukariCreateInput, NaukariUncheckedCreateInput>
    /**
     * In case the Naukari was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NaukariUpdateInput, NaukariUncheckedUpdateInput>
  }

  /**
   * Naukari delete
   */
  export type NaukariDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Naukari
     */
    select?: NaukariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Naukari
     */
    omit?: NaukariOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NaukariInclude<ExtArgs> | null
    /**
     * Filter which Naukari to delete.
     */
    where: NaukariWhereUniqueInput
  }

  /**
   * Naukari deleteMany
   */
  export type NaukariDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Naukaris to delete
     */
    where?: NaukariWhereInput
    /**
     * Limit how many Naukaris to delete.
     */
    limit?: number
  }

  /**
   * Naukari.importantQuesAns
   */
  export type Naukari$importantQuesAnsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportantQuesAns
     */
    select?: ImportantQuesAnsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportantQuesAns
     */
    omit?: ImportantQuesAnsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportantQuesAnsInclude<ExtArgs> | null
    where?: ImportantQuesAnsWhereInput
    orderBy?: ImportantQuesAnsOrderByWithRelationInput | ImportantQuesAnsOrderByWithRelationInput[]
    cursor?: ImportantQuesAnsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImportantQuesAnsScalarFieldEnum | ImportantQuesAnsScalarFieldEnum[]
  }

  /**
   * Naukari.usefulLinks
   */
  export type Naukari$usefulLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsefulLinkSection
     */
    select?: UsefulLinkSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsefulLinkSection
     */
    omit?: UsefulLinkSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsefulLinkSectionInclude<ExtArgs> | null
    where?: UsefulLinkSectionWhereInput
    orderBy?: UsefulLinkSectionOrderByWithRelationInput | UsefulLinkSectionOrderByWithRelationInput[]
    cursor?: UsefulLinkSectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsefulLinkSectionScalarFieldEnum | UsefulLinkSectionScalarFieldEnum[]
  }

  /**
   * Naukari.discoverMoreLinks
   */
  export type Naukari$discoverMoreLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscoverMore
     */
    select?: DiscoverMoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscoverMore
     */
    omit?: DiscoverMoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscoverMoreInclude<ExtArgs> | null
    where?: DiscoverMoreWhereInput
    orderBy?: DiscoverMoreOrderByWithRelationInput | DiscoverMoreOrderByWithRelationInput[]
    cursor?: DiscoverMoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiscoverMoreScalarFieldEnum | DiscoverMoreScalarFieldEnum[]
  }

  /**
   * Naukari without action
   */
  export type NaukariDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Naukari
     */
    select?: NaukariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Naukari
     */
    omit?: NaukariOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NaukariInclude<ExtArgs> | null
  }


  /**
   * Model ImportantQuesAns
   */

  export type AggregateImportantQuesAns = {
    _count: ImportantQuesAnsCountAggregateOutputType | null
    _avg: ImportantQuesAnsAvgAggregateOutputType | null
    _sum: ImportantQuesAnsSumAggregateOutputType | null
    _min: ImportantQuesAnsMinAggregateOutputType | null
    _max: ImportantQuesAnsMaxAggregateOutputType | null
  }

  export type ImportantQuesAnsAvgAggregateOutputType = {
    id: number | null
    naukari_id: number | null
  }

  export type ImportantQuesAnsSumAggregateOutputType = {
    id: number | null
    naukari_id: number | null
  }

  export type ImportantQuesAnsMinAggregateOutputType = {
    id: number | null
    question: string | null
    answer: string | null
    naukari_id: number | null
  }

  export type ImportantQuesAnsMaxAggregateOutputType = {
    id: number | null
    question: string | null
    answer: string | null
    naukari_id: number | null
  }

  export type ImportantQuesAnsCountAggregateOutputType = {
    id: number
    question: number
    answer: number
    naukari_id: number
    _all: number
  }


  export type ImportantQuesAnsAvgAggregateInputType = {
    id?: true
    naukari_id?: true
  }

  export type ImportantQuesAnsSumAggregateInputType = {
    id?: true
    naukari_id?: true
  }

  export type ImportantQuesAnsMinAggregateInputType = {
    id?: true
    question?: true
    answer?: true
    naukari_id?: true
  }

  export type ImportantQuesAnsMaxAggregateInputType = {
    id?: true
    question?: true
    answer?: true
    naukari_id?: true
  }

  export type ImportantQuesAnsCountAggregateInputType = {
    id?: true
    question?: true
    answer?: true
    naukari_id?: true
    _all?: true
  }

  export type ImportantQuesAnsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImportantQuesAns to aggregate.
     */
    where?: ImportantQuesAnsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImportantQuesAns to fetch.
     */
    orderBy?: ImportantQuesAnsOrderByWithRelationInput | ImportantQuesAnsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImportantQuesAnsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImportantQuesAns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImportantQuesAns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ImportantQuesAns
    **/
    _count?: true | ImportantQuesAnsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImportantQuesAnsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImportantQuesAnsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImportantQuesAnsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImportantQuesAnsMaxAggregateInputType
  }

  export type GetImportantQuesAnsAggregateType<T extends ImportantQuesAnsAggregateArgs> = {
        [P in keyof T & keyof AggregateImportantQuesAns]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImportantQuesAns[P]>
      : GetScalarType<T[P], AggregateImportantQuesAns[P]>
  }




  export type ImportantQuesAnsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImportantQuesAnsWhereInput
    orderBy?: ImportantQuesAnsOrderByWithAggregationInput | ImportantQuesAnsOrderByWithAggregationInput[]
    by: ImportantQuesAnsScalarFieldEnum[] | ImportantQuesAnsScalarFieldEnum
    having?: ImportantQuesAnsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImportantQuesAnsCountAggregateInputType | true
    _avg?: ImportantQuesAnsAvgAggregateInputType
    _sum?: ImportantQuesAnsSumAggregateInputType
    _min?: ImportantQuesAnsMinAggregateInputType
    _max?: ImportantQuesAnsMaxAggregateInputType
  }

  export type ImportantQuesAnsGroupByOutputType = {
    id: number
    question: string
    answer: string
    naukari_id: number
    _count: ImportantQuesAnsCountAggregateOutputType | null
    _avg: ImportantQuesAnsAvgAggregateOutputType | null
    _sum: ImportantQuesAnsSumAggregateOutputType | null
    _min: ImportantQuesAnsMinAggregateOutputType | null
    _max: ImportantQuesAnsMaxAggregateOutputType | null
  }

  type GetImportantQuesAnsGroupByPayload<T extends ImportantQuesAnsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImportantQuesAnsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImportantQuesAnsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImportantQuesAnsGroupByOutputType[P]>
            : GetScalarType<T[P], ImportantQuesAnsGroupByOutputType[P]>
        }
      >
    >


  export type ImportantQuesAnsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    answer?: boolean
    naukari_id?: boolean
    naukari?: boolean | NaukariDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["importantQuesAns"]>

  export type ImportantQuesAnsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    answer?: boolean
    naukari_id?: boolean
    naukari?: boolean | NaukariDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["importantQuesAns"]>

  export type ImportantQuesAnsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    answer?: boolean
    naukari_id?: boolean
    naukari?: boolean | NaukariDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["importantQuesAns"]>

  export type ImportantQuesAnsSelectScalar = {
    id?: boolean
    question?: boolean
    answer?: boolean
    naukari_id?: boolean
  }

  export type ImportantQuesAnsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "question" | "answer" | "naukari_id", ExtArgs["result"]["importantQuesAns"]>
  export type ImportantQuesAnsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    naukari?: boolean | NaukariDefaultArgs<ExtArgs>
  }
  export type ImportantQuesAnsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    naukari?: boolean | NaukariDefaultArgs<ExtArgs>
  }
  export type ImportantQuesAnsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    naukari?: boolean | NaukariDefaultArgs<ExtArgs>
  }

  export type $ImportantQuesAnsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ImportantQuesAns"
    objects: {
      naukari: Prisma.$NaukariPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      question: string
      answer: string
      naukari_id: number
    }, ExtArgs["result"]["importantQuesAns"]>
    composites: {}
  }

  type ImportantQuesAnsGetPayload<S extends boolean | null | undefined | ImportantQuesAnsDefaultArgs> = $Result.GetResult<Prisma.$ImportantQuesAnsPayload, S>

  type ImportantQuesAnsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImportantQuesAnsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImportantQuesAnsCountAggregateInputType | true
    }

  export interface ImportantQuesAnsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ImportantQuesAns'], meta: { name: 'ImportantQuesAns' } }
    /**
     * Find zero or one ImportantQuesAns that matches the filter.
     * @param {ImportantQuesAnsFindUniqueArgs} args - Arguments to find a ImportantQuesAns
     * @example
     * // Get one ImportantQuesAns
     * const importantQuesAns = await prisma.importantQuesAns.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImportantQuesAnsFindUniqueArgs>(args: SelectSubset<T, ImportantQuesAnsFindUniqueArgs<ExtArgs>>): Prisma__ImportantQuesAnsClient<$Result.GetResult<Prisma.$ImportantQuesAnsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ImportantQuesAns that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImportantQuesAnsFindUniqueOrThrowArgs} args - Arguments to find a ImportantQuesAns
     * @example
     * // Get one ImportantQuesAns
     * const importantQuesAns = await prisma.importantQuesAns.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImportantQuesAnsFindUniqueOrThrowArgs>(args: SelectSubset<T, ImportantQuesAnsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImportantQuesAnsClient<$Result.GetResult<Prisma.$ImportantQuesAnsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImportantQuesAns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportantQuesAnsFindFirstArgs} args - Arguments to find a ImportantQuesAns
     * @example
     * // Get one ImportantQuesAns
     * const importantQuesAns = await prisma.importantQuesAns.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImportantQuesAnsFindFirstArgs>(args?: SelectSubset<T, ImportantQuesAnsFindFirstArgs<ExtArgs>>): Prisma__ImportantQuesAnsClient<$Result.GetResult<Prisma.$ImportantQuesAnsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImportantQuesAns that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportantQuesAnsFindFirstOrThrowArgs} args - Arguments to find a ImportantQuesAns
     * @example
     * // Get one ImportantQuesAns
     * const importantQuesAns = await prisma.importantQuesAns.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImportantQuesAnsFindFirstOrThrowArgs>(args?: SelectSubset<T, ImportantQuesAnsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImportantQuesAnsClient<$Result.GetResult<Prisma.$ImportantQuesAnsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ImportantQuesAns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportantQuesAnsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ImportantQuesAns
     * const importantQuesAns = await prisma.importantQuesAns.findMany()
     * 
     * // Get first 10 ImportantQuesAns
     * const importantQuesAns = await prisma.importantQuesAns.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const importantQuesAnsWithIdOnly = await prisma.importantQuesAns.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImportantQuesAnsFindManyArgs>(args?: SelectSubset<T, ImportantQuesAnsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImportantQuesAnsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ImportantQuesAns.
     * @param {ImportantQuesAnsCreateArgs} args - Arguments to create a ImportantQuesAns.
     * @example
     * // Create one ImportantQuesAns
     * const ImportantQuesAns = await prisma.importantQuesAns.create({
     *   data: {
     *     // ... data to create a ImportantQuesAns
     *   }
     * })
     * 
     */
    create<T extends ImportantQuesAnsCreateArgs>(args: SelectSubset<T, ImportantQuesAnsCreateArgs<ExtArgs>>): Prisma__ImportantQuesAnsClient<$Result.GetResult<Prisma.$ImportantQuesAnsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ImportantQuesAns.
     * @param {ImportantQuesAnsCreateManyArgs} args - Arguments to create many ImportantQuesAns.
     * @example
     * // Create many ImportantQuesAns
     * const importantQuesAns = await prisma.importantQuesAns.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImportantQuesAnsCreateManyArgs>(args?: SelectSubset<T, ImportantQuesAnsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ImportantQuesAns and returns the data saved in the database.
     * @param {ImportantQuesAnsCreateManyAndReturnArgs} args - Arguments to create many ImportantQuesAns.
     * @example
     * // Create many ImportantQuesAns
     * const importantQuesAns = await prisma.importantQuesAns.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ImportantQuesAns and only return the `id`
     * const importantQuesAnsWithIdOnly = await prisma.importantQuesAns.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImportantQuesAnsCreateManyAndReturnArgs>(args?: SelectSubset<T, ImportantQuesAnsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImportantQuesAnsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ImportantQuesAns.
     * @param {ImportantQuesAnsDeleteArgs} args - Arguments to delete one ImportantQuesAns.
     * @example
     * // Delete one ImportantQuesAns
     * const ImportantQuesAns = await prisma.importantQuesAns.delete({
     *   where: {
     *     // ... filter to delete one ImportantQuesAns
     *   }
     * })
     * 
     */
    delete<T extends ImportantQuesAnsDeleteArgs>(args: SelectSubset<T, ImportantQuesAnsDeleteArgs<ExtArgs>>): Prisma__ImportantQuesAnsClient<$Result.GetResult<Prisma.$ImportantQuesAnsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ImportantQuesAns.
     * @param {ImportantQuesAnsUpdateArgs} args - Arguments to update one ImportantQuesAns.
     * @example
     * // Update one ImportantQuesAns
     * const importantQuesAns = await prisma.importantQuesAns.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImportantQuesAnsUpdateArgs>(args: SelectSubset<T, ImportantQuesAnsUpdateArgs<ExtArgs>>): Prisma__ImportantQuesAnsClient<$Result.GetResult<Prisma.$ImportantQuesAnsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ImportantQuesAns.
     * @param {ImportantQuesAnsDeleteManyArgs} args - Arguments to filter ImportantQuesAns to delete.
     * @example
     * // Delete a few ImportantQuesAns
     * const { count } = await prisma.importantQuesAns.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImportantQuesAnsDeleteManyArgs>(args?: SelectSubset<T, ImportantQuesAnsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImportantQuesAns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportantQuesAnsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ImportantQuesAns
     * const importantQuesAns = await prisma.importantQuesAns.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImportantQuesAnsUpdateManyArgs>(args: SelectSubset<T, ImportantQuesAnsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImportantQuesAns and returns the data updated in the database.
     * @param {ImportantQuesAnsUpdateManyAndReturnArgs} args - Arguments to update many ImportantQuesAns.
     * @example
     * // Update many ImportantQuesAns
     * const importantQuesAns = await prisma.importantQuesAns.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ImportantQuesAns and only return the `id`
     * const importantQuesAnsWithIdOnly = await prisma.importantQuesAns.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ImportantQuesAnsUpdateManyAndReturnArgs>(args: SelectSubset<T, ImportantQuesAnsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImportantQuesAnsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ImportantQuesAns.
     * @param {ImportantQuesAnsUpsertArgs} args - Arguments to update or create a ImportantQuesAns.
     * @example
     * // Update or create a ImportantQuesAns
     * const importantQuesAns = await prisma.importantQuesAns.upsert({
     *   create: {
     *     // ... data to create a ImportantQuesAns
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ImportantQuesAns we want to update
     *   }
     * })
     */
    upsert<T extends ImportantQuesAnsUpsertArgs>(args: SelectSubset<T, ImportantQuesAnsUpsertArgs<ExtArgs>>): Prisma__ImportantQuesAnsClient<$Result.GetResult<Prisma.$ImportantQuesAnsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ImportantQuesAns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportantQuesAnsCountArgs} args - Arguments to filter ImportantQuesAns to count.
     * @example
     * // Count the number of ImportantQuesAns
     * const count = await prisma.importantQuesAns.count({
     *   where: {
     *     // ... the filter for the ImportantQuesAns we want to count
     *   }
     * })
    **/
    count<T extends ImportantQuesAnsCountArgs>(
      args?: Subset<T, ImportantQuesAnsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImportantQuesAnsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ImportantQuesAns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportantQuesAnsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImportantQuesAnsAggregateArgs>(args: Subset<T, ImportantQuesAnsAggregateArgs>): Prisma.PrismaPromise<GetImportantQuesAnsAggregateType<T>>

    /**
     * Group by ImportantQuesAns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportantQuesAnsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ImportantQuesAnsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImportantQuesAnsGroupByArgs['orderBy'] }
        : { orderBy?: ImportantQuesAnsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ImportantQuesAnsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImportantQuesAnsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ImportantQuesAns model
   */
  readonly fields: ImportantQuesAnsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ImportantQuesAns.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImportantQuesAnsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    naukari<T extends NaukariDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NaukariDefaultArgs<ExtArgs>>): Prisma__NaukariClient<$Result.GetResult<Prisma.$NaukariPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ImportantQuesAns model
   */
  interface ImportantQuesAnsFieldRefs {
    readonly id: FieldRef<"ImportantQuesAns", 'Int'>
    readonly question: FieldRef<"ImportantQuesAns", 'String'>
    readonly answer: FieldRef<"ImportantQuesAns", 'String'>
    readonly naukari_id: FieldRef<"ImportantQuesAns", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ImportantQuesAns findUnique
   */
  export type ImportantQuesAnsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportantQuesAns
     */
    select?: ImportantQuesAnsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportantQuesAns
     */
    omit?: ImportantQuesAnsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportantQuesAnsInclude<ExtArgs> | null
    /**
     * Filter, which ImportantQuesAns to fetch.
     */
    where: ImportantQuesAnsWhereUniqueInput
  }

  /**
   * ImportantQuesAns findUniqueOrThrow
   */
  export type ImportantQuesAnsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportantQuesAns
     */
    select?: ImportantQuesAnsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportantQuesAns
     */
    omit?: ImportantQuesAnsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportantQuesAnsInclude<ExtArgs> | null
    /**
     * Filter, which ImportantQuesAns to fetch.
     */
    where: ImportantQuesAnsWhereUniqueInput
  }

  /**
   * ImportantQuesAns findFirst
   */
  export type ImportantQuesAnsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportantQuesAns
     */
    select?: ImportantQuesAnsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportantQuesAns
     */
    omit?: ImportantQuesAnsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportantQuesAnsInclude<ExtArgs> | null
    /**
     * Filter, which ImportantQuesAns to fetch.
     */
    where?: ImportantQuesAnsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImportantQuesAns to fetch.
     */
    orderBy?: ImportantQuesAnsOrderByWithRelationInput | ImportantQuesAnsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImportantQuesAns.
     */
    cursor?: ImportantQuesAnsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImportantQuesAns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImportantQuesAns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImportantQuesAns.
     */
    distinct?: ImportantQuesAnsScalarFieldEnum | ImportantQuesAnsScalarFieldEnum[]
  }

  /**
   * ImportantQuesAns findFirstOrThrow
   */
  export type ImportantQuesAnsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportantQuesAns
     */
    select?: ImportantQuesAnsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportantQuesAns
     */
    omit?: ImportantQuesAnsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportantQuesAnsInclude<ExtArgs> | null
    /**
     * Filter, which ImportantQuesAns to fetch.
     */
    where?: ImportantQuesAnsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImportantQuesAns to fetch.
     */
    orderBy?: ImportantQuesAnsOrderByWithRelationInput | ImportantQuesAnsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImportantQuesAns.
     */
    cursor?: ImportantQuesAnsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImportantQuesAns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImportantQuesAns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImportantQuesAns.
     */
    distinct?: ImportantQuesAnsScalarFieldEnum | ImportantQuesAnsScalarFieldEnum[]
  }

  /**
   * ImportantQuesAns findMany
   */
  export type ImportantQuesAnsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportantQuesAns
     */
    select?: ImportantQuesAnsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportantQuesAns
     */
    omit?: ImportantQuesAnsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportantQuesAnsInclude<ExtArgs> | null
    /**
     * Filter, which ImportantQuesAns to fetch.
     */
    where?: ImportantQuesAnsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImportantQuesAns to fetch.
     */
    orderBy?: ImportantQuesAnsOrderByWithRelationInput | ImportantQuesAnsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ImportantQuesAns.
     */
    cursor?: ImportantQuesAnsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImportantQuesAns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImportantQuesAns.
     */
    skip?: number
    distinct?: ImportantQuesAnsScalarFieldEnum | ImportantQuesAnsScalarFieldEnum[]
  }

  /**
   * ImportantQuesAns create
   */
  export type ImportantQuesAnsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportantQuesAns
     */
    select?: ImportantQuesAnsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportantQuesAns
     */
    omit?: ImportantQuesAnsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportantQuesAnsInclude<ExtArgs> | null
    /**
     * The data needed to create a ImportantQuesAns.
     */
    data: XOR<ImportantQuesAnsCreateInput, ImportantQuesAnsUncheckedCreateInput>
  }

  /**
   * ImportantQuesAns createMany
   */
  export type ImportantQuesAnsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ImportantQuesAns.
     */
    data: ImportantQuesAnsCreateManyInput | ImportantQuesAnsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ImportantQuesAns createManyAndReturn
   */
  export type ImportantQuesAnsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportantQuesAns
     */
    select?: ImportantQuesAnsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ImportantQuesAns
     */
    omit?: ImportantQuesAnsOmit<ExtArgs> | null
    /**
     * The data used to create many ImportantQuesAns.
     */
    data: ImportantQuesAnsCreateManyInput | ImportantQuesAnsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportantQuesAnsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ImportantQuesAns update
   */
  export type ImportantQuesAnsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportantQuesAns
     */
    select?: ImportantQuesAnsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportantQuesAns
     */
    omit?: ImportantQuesAnsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportantQuesAnsInclude<ExtArgs> | null
    /**
     * The data needed to update a ImportantQuesAns.
     */
    data: XOR<ImportantQuesAnsUpdateInput, ImportantQuesAnsUncheckedUpdateInput>
    /**
     * Choose, which ImportantQuesAns to update.
     */
    where: ImportantQuesAnsWhereUniqueInput
  }

  /**
   * ImportantQuesAns updateMany
   */
  export type ImportantQuesAnsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ImportantQuesAns.
     */
    data: XOR<ImportantQuesAnsUpdateManyMutationInput, ImportantQuesAnsUncheckedUpdateManyInput>
    /**
     * Filter which ImportantQuesAns to update
     */
    where?: ImportantQuesAnsWhereInput
    /**
     * Limit how many ImportantQuesAns to update.
     */
    limit?: number
  }

  /**
   * ImportantQuesAns updateManyAndReturn
   */
  export type ImportantQuesAnsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportantQuesAns
     */
    select?: ImportantQuesAnsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ImportantQuesAns
     */
    omit?: ImportantQuesAnsOmit<ExtArgs> | null
    /**
     * The data used to update ImportantQuesAns.
     */
    data: XOR<ImportantQuesAnsUpdateManyMutationInput, ImportantQuesAnsUncheckedUpdateManyInput>
    /**
     * Filter which ImportantQuesAns to update
     */
    where?: ImportantQuesAnsWhereInput
    /**
     * Limit how many ImportantQuesAns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportantQuesAnsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ImportantQuesAns upsert
   */
  export type ImportantQuesAnsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportantQuesAns
     */
    select?: ImportantQuesAnsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportantQuesAns
     */
    omit?: ImportantQuesAnsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportantQuesAnsInclude<ExtArgs> | null
    /**
     * The filter to search for the ImportantQuesAns to update in case it exists.
     */
    where: ImportantQuesAnsWhereUniqueInput
    /**
     * In case the ImportantQuesAns found by the `where` argument doesn't exist, create a new ImportantQuesAns with this data.
     */
    create: XOR<ImportantQuesAnsCreateInput, ImportantQuesAnsUncheckedCreateInput>
    /**
     * In case the ImportantQuesAns was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImportantQuesAnsUpdateInput, ImportantQuesAnsUncheckedUpdateInput>
  }

  /**
   * ImportantQuesAns delete
   */
  export type ImportantQuesAnsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportantQuesAns
     */
    select?: ImportantQuesAnsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportantQuesAns
     */
    omit?: ImportantQuesAnsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportantQuesAnsInclude<ExtArgs> | null
    /**
     * Filter which ImportantQuesAns to delete.
     */
    where: ImportantQuesAnsWhereUniqueInput
  }

  /**
   * ImportantQuesAns deleteMany
   */
  export type ImportantQuesAnsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImportantQuesAns to delete
     */
    where?: ImportantQuesAnsWhereInput
    /**
     * Limit how many ImportantQuesAns to delete.
     */
    limit?: number
  }

  /**
   * ImportantQuesAns without action
   */
  export type ImportantQuesAnsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportantQuesAns
     */
    select?: ImportantQuesAnsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportantQuesAns
     */
    omit?: ImportantQuesAnsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportantQuesAnsInclude<ExtArgs> | null
  }


  /**
   * Model UsefulLinkSection
   */

  export type AggregateUsefulLinkSection = {
    _count: UsefulLinkSectionCountAggregateOutputType | null
    _avg: UsefulLinkSectionAvgAggregateOutputType | null
    _sum: UsefulLinkSectionSumAggregateOutputType | null
    _min: UsefulLinkSectionMinAggregateOutputType | null
    _max: UsefulLinkSectionMaxAggregateOutputType | null
  }

  export type UsefulLinkSectionAvgAggregateOutputType = {
    id: number | null
    naukari_id: number | null
  }

  export type UsefulLinkSectionSumAggregateOutputType = {
    id: number | null
    naukari_id: number | null
  }

  export type UsefulLinkSectionMinAggregateOutputType = {
    id: number | null
    text: string | null
    naukari_id: number | null
  }

  export type UsefulLinkSectionMaxAggregateOutputType = {
    id: number | null
    text: string | null
    naukari_id: number | null
  }

  export type UsefulLinkSectionCountAggregateOutputType = {
    id: number
    text: number
    naukari_id: number
    _all: number
  }


  export type UsefulLinkSectionAvgAggregateInputType = {
    id?: true
    naukari_id?: true
  }

  export type UsefulLinkSectionSumAggregateInputType = {
    id?: true
    naukari_id?: true
  }

  export type UsefulLinkSectionMinAggregateInputType = {
    id?: true
    text?: true
    naukari_id?: true
  }

  export type UsefulLinkSectionMaxAggregateInputType = {
    id?: true
    text?: true
    naukari_id?: true
  }

  export type UsefulLinkSectionCountAggregateInputType = {
    id?: true
    text?: true
    naukari_id?: true
    _all?: true
  }

  export type UsefulLinkSectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsefulLinkSection to aggregate.
     */
    where?: UsefulLinkSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsefulLinkSections to fetch.
     */
    orderBy?: UsefulLinkSectionOrderByWithRelationInput | UsefulLinkSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsefulLinkSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsefulLinkSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsefulLinkSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UsefulLinkSections
    **/
    _count?: true | UsefulLinkSectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsefulLinkSectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsefulLinkSectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsefulLinkSectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsefulLinkSectionMaxAggregateInputType
  }

  export type GetUsefulLinkSectionAggregateType<T extends UsefulLinkSectionAggregateArgs> = {
        [P in keyof T & keyof AggregateUsefulLinkSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsefulLinkSection[P]>
      : GetScalarType<T[P], AggregateUsefulLinkSection[P]>
  }




  export type UsefulLinkSectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsefulLinkSectionWhereInput
    orderBy?: UsefulLinkSectionOrderByWithAggregationInput | UsefulLinkSectionOrderByWithAggregationInput[]
    by: UsefulLinkSectionScalarFieldEnum[] | UsefulLinkSectionScalarFieldEnum
    having?: UsefulLinkSectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsefulLinkSectionCountAggregateInputType | true
    _avg?: UsefulLinkSectionAvgAggregateInputType
    _sum?: UsefulLinkSectionSumAggregateInputType
    _min?: UsefulLinkSectionMinAggregateInputType
    _max?: UsefulLinkSectionMaxAggregateInputType
  }

  export type UsefulLinkSectionGroupByOutputType = {
    id: number
    text: string
    naukari_id: number
    _count: UsefulLinkSectionCountAggregateOutputType | null
    _avg: UsefulLinkSectionAvgAggregateOutputType | null
    _sum: UsefulLinkSectionSumAggregateOutputType | null
    _min: UsefulLinkSectionMinAggregateOutputType | null
    _max: UsefulLinkSectionMaxAggregateOutputType | null
  }

  type GetUsefulLinkSectionGroupByPayload<T extends UsefulLinkSectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsefulLinkSectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsefulLinkSectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsefulLinkSectionGroupByOutputType[P]>
            : GetScalarType<T[P], UsefulLinkSectionGroupByOutputType[P]>
        }
      >
    >


  export type UsefulLinkSectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    naukari_id?: boolean
    naukari?: boolean | NaukariDefaultArgs<ExtArgs>
    links?: boolean | UsefulLinkSection$linksArgs<ExtArgs>
    _count?: boolean | UsefulLinkSectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usefulLinkSection"]>

  export type UsefulLinkSectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    naukari_id?: boolean
    naukari?: boolean | NaukariDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usefulLinkSection"]>

  export type UsefulLinkSectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    naukari_id?: boolean
    naukari?: boolean | NaukariDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usefulLinkSection"]>

  export type UsefulLinkSectionSelectScalar = {
    id?: boolean
    text?: boolean
    naukari_id?: boolean
  }

  export type UsefulLinkSectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "naukari_id", ExtArgs["result"]["usefulLinkSection"]>
  export type UsefulLinkSectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    naukari?: boolean | NaukariDefaultArgs<ExtArgs>
    links?: boolean | UsefulLinkSection$linksArgs<ExtArgs>
    _count?: boolean | UsefulLinkSectionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsefulLinkSectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    naukari?: boolean | NaukariDefaultArgs<ExtArgs>
  }
  export type UsefulLinkSectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    naukari?: boolean | NaukariDefaultArgs<ExtArgs>
  }

  export type $UsefulLinkSectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UsefulLinkSection"
    objects: {
      naukari: Prisma.$NaukariPayload<ExtArgs>
      links: Prisma.$UsefulLinkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      text: string
      naukari_id: number
    }, ExtArgs["result"]["usefulLinkSection"]>
    composites: {}
  }

  type UsefulLinkSectionGetPayload<S extends boolean | null | undefined | UsefulLinkSectionDefaultArgs> = $Result.GetResult<Prisma.$UsefulLinkSectionPayload, S>

  type UsefulLinkSectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsefulLinkSectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsefulLinkSectionCountAggregateInputType | true
    }

  export interface UsefulLinkSectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UsefulLinkSection'], meta: { name: 'UsefulLinkSection' } }
    /**
     * Find zero or one UsefulLinkSection that matches the filter.
     * @param {UsefulLinkSectionFindUniqueArgs} args - Arguments to find a UsefulLinkSection
     * @example
     * // Get one UsefulLinkSection
     * const usefulLinkSection = await prisma.usefulLinkSection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsefulLinkSectionFindUniqueArgs>(args: SelectSubset<T, UsefulLinkSectionFindUniqueArgs<ExtArgs>>): Prisma__UsefulLinkSectionClient<$Result.GetResult<Prisma.$UsefulLinkSectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UsefulLinkSection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsefulLinkSectionFindUniqueOrThrowArgs} args - Arguments to find a UsefulLinkSection
     * @example
     * // Get one UsefulLinkSection
     * const usefulLinkSection = await prisma.usefulLinkSection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsefulLinkSectionFindUniqueOrThrowArgs>(args: SelectSubset<T, UsefulLinkSectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsefulLinkSectionClient<$Result.GetResult<Prisma.$UsefulLinkSectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsefulLinkSection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsefulLinkSectionFindFirstArgs} args - Arguments to find a UsefulLinkSection
     * @example
     * // Get one UsefulLinkSection
     * const usefulLinkSection = await prisma.usefulLinkSection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsefulLinkSectionFindFirstArgs>(args?: SelectSubset<T, UsefulLinkSectionFindFirstArgs<ExtArgs>>): Prisma__UsefulLinkSectionClient<$Result.GetResult<Prisma.$UsefulLinkSectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsefulLinkSection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsefulLinkSectionFindFirstOrThrowArgs} args - Arguments to find a UsefulLinkSection
     * @example
     * // Get one UsefulLinkSection
     * const usefulLinkSection = await prisma.usefulLinkSection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsefulLinkSectionFindFirstOrThrowArgs>(args?: SelectSubset<T, UsefulLinkSectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsefulLinkSectionClient<$Result.GetResult<Prisma.$UsefulLinkSectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UsefulLinkSections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsefulLinkSectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UsefulLinkSections
     * const usefulLinkSections = await prisma.usefulLinkSection.findMany()
     * 
     * // Get first 10 UsefulLinkSections
     * const usefulLinkSections = await prisma.usefulLinkSection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usefulLinkSectionWithIdOnly = await prisma.usefulLinkSection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsefulLinkSectionFindManyArgs>(args?: SelectSubset<T, UsefulLinkSectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsefulLinkSectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UsefulLinkSection.
     * @param {UsefulLinkSectionCreateArgs} args - Arguments to create a UsefulLinkSection.
     * @example
     * // Create one UsefulLinkSection
     * const UsefulLinkSection = await prisma.usefulLinkSection.create({
     *   data: {
     *     // ... data to create a UsefulLinkSection
     *   }
     * })
     * 
     */
    create<T extends UsefulLinkSectionCreateArgs>(args: SelectSubset<T, UsefulLinkSectionCreateArgs<ExtArgs>>): Prisma__UsefulLinkSectionClient<$Result.GetResult<Prisma.$UsefulLinkSectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UsefulLinkSections.
     * @param {UsefulLinkSectionCreateManyArgs} args - Arguments to create many UsefulLinkSections.
     * @example
     * // Create many UsefulLinkSections
     * const usefulLinkSection = await prisma.usefulLinkSection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsefulLinkSectionCreateManyArgs>(args?: SelectSubset<T, UsefulLinkSectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UsefulLinkSections and returns the data saved in the database.
     * @param {UsefulLinkSectionCreateManyAndReturnArgs} args - Arguments to create many UsefulLinkSections.
     * @example
     * // Create many UsefulLinkSections
     * const usefulLinkSection = await prisma.usefulLinkSection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UsefulLinkSections and only return the `id`
     * const usefulLinkSectionWithIdOnly = await prisma.usefulLinkSection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsefulLinkSectionCreateManyAndReturnArgs>(args?: SelectSubset<T, UsefulLinkSectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsefulLinkSectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UsefulLinkSection.
     * @param {UsefulLinkSectionDeleteArgs} args - Arguments to delete one UsefulLinkSection.
     * @example
     * // Delete one UsefulLinkSection
     * const UsefulLinkSection = await prisma.usefulLinkSection.delete({
     *   where: {
     *     // ... filter to delete one UsefulLinkSection
     *   }
     * })
     * 
     */
    delete<T extends UsefulLinkSectionDeleteArgs>(args: SelectSubset<T, UsefulLinkSectionDeleteArgs<ExtArgs>>): Prisma__UsefulLinkSectionClient<$Result.GetResult<Prisma.$UsefulLinkSectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UsefulLinkSection.
     * @param {UsefulLinkSectionUpdateArgs} args - Arguments to update one UsefulLinkSection.
     * @example
     * // Update one UsefulLinkSection
     * const usefulLinkSection = await prisma.usefulLinkSection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsefulLinkSectionUpdateArgs>(args: SelectSubset<T, UsefulLinkSectionUpdateArgs<ExtArgs>>): Prisma__UsefulLinkSectionClient<$Result.GetResult<Prisma.$UsefulLinkSectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UsefulLinkSections.
     * @param {UsefulLinkSectionDeleteManyArgs} args - Arguments to filter UsefulLinkSections to delete.
     * @example
     * // Delete a few UsefulLinkSections
     * const { count } = await prisma.usefulLinkSection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsefulLinkSectionDeleteManyArgs>(args?: SelectSubset<T, UsefulLinkSectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsefulLinkSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsefulLinkSectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UsefulLinkSections
     * const usefulLinkSection = await prisma.usefulLinkSection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsefulLinkSectionUpdateManyArgs>(args: SelectSubset<T, UsefulLinkSectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsefulLinkSections and returns the data updated in the database.
     * @param {UsefulLinkSectionUpdateManyAndReturnArgs} args - Arguments to update many UsefulLinkSections.
     * @example
     * // Update many UsefulLinkSections
     * const usefulLinkSection = await prisma.usefulLinkSection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UsefulLinkSections and only return the `id`
     * const usefulLinkSectionWithIdOnly = await prisma.usefulLinkSection.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsefulLinkSectionUpdateManyAndReturnArgs>(args: SelectSubset<T, UsefulLinkSectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsefulLinkSectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UsefulLinkSection.
     * @param {UsefulLinkSectionUpsertArgs} args - Arguments to update or create a UsefulLinkSection.
     * @example
     * // Update or create a UsefulLinkSection
     * const usefulLinkSection = await prisma.usefulLinkSection.upsert({
     *   create: {
     *     // ... data to create a UsefulLinkSection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UsefulLinkSection we want to update
     *   }
     * })
     */
    upsert<T extends UsefulLinkSectionUpsertArgs>(args: SelectSubset<T, UsefulLinkSectionUpsertArgs<ExtArgs>>): Prisma__UsefulLinkSectionClient<$Result.GetResult<Prisma.$UsefulLinkSectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UsefulLinkSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsefulLinkSectionCountArgs} args - Arguments to filter UsefulLinkSections to count.
     * @example
     * // Count the number of UsefulLinkSections
     * const count = await prisma.usefulLinkSection.count({
     *   where: {
     *     // ... the filter for the UsefulLinkSections we want to count
     *   }
     * })
    **/
    count<T extends UsefulLinkSectionCountArgs>(
      args?: Subset<T, UsefulLinkSectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsefulLinkSectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UsefulLinkSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsefulLinkSectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsefulLinkSectionAggregateArgs>(args: Subset<T, UsefulLinkSectionAggregateArgs>): Prisma.PrismaPromise<GetUsefulLinkSectionAggregateType<T>>

    /**
     * Group by UsefulLinkSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsefulLinkSectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsefulLinkSectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsefulLinkSectionGroupByArgs['orderBy'] }
        : { orderBy?: UsefulLinkSectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsefulLinkSectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsefulLinkSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UsefulLinkSection model
   */
  readonly fields: UsefulLinkSectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UsefulLinkSection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsefulLinkSectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    naukari<T extends NaukariDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NaukariDefaultArgs<ExtArgs>>): Prisma__NaukariClient<$Result.GetResult<Prisma.$NaukariPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    links<T extends UsefulLinkSection$linksArgs<ExtArgs> = {}>(args?: Subset<T, UsefulLinkSection$linksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsefulLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UsefulLinkSection model
   */
  interface UsefulLinkSectionFieldRefs {
    readonly id: FieldRef<"UsefulLinkSection", 'Int'>
    readonly text: FieldRef<"UsefulLinkSection", 'String'>
    readonly naukari_id: FieldRef<"UsefulLinkSection", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UsefulLinkSection findUnique
   */
  export type UsefulLinkSectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsefulLinkSection
     */
    select?: UsefulLinkSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsefulLinkSection
     */
    omit?: UsefulLinkSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsefulLinkSectionInclude<ExtArgs> | null
    /**
     * Filter, which UsefulLinkSection to fetch.
     */
    where: UsefulLinkSectionWhereUniqueInput
  }

  /**
   * UsefulLinkSection findUniqueOrThrow
   */
  export type UsefulLinkSectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsefulLinkSection
     */
    select?: UsefulLinkSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsefulLinkSection
     */
    omit?: UsefulLinkSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsefulLinkSectionInclude<ExtArgs> | null
    /**
     * Filter, which UsefulLinkSection to fetch.
     */
    where: UsefulLinkSectionWhereUniqueInput
  }

  /**
   * UsefulLinkSection findFirst
   */
  export type UsefulLinkSectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsefulLinkSection
     */
    select?: UsefulLinkSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsefulLinkSection
     */
    omit?: UsefulLinkSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsefulLinkSectionInclude<ExtArgs> | null
    /**
     * Filter, which UsefulLinkSection to fetch.
     */
    where?: UsefulLinkSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsefulLinkSections to fetch.
     */
    orderBy?: UsefulLinkSectionOrderByWithRelationInput | UsefulLinkSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsefulLinkSections.
     */
    cursor?: UsefulLinkSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsefulLinkSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsefulLinkSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsefulLinkSections.
     */
    distinct?: UsefulLinkSectionScalarFieldEnum | UsefulLinkSectionScalarFieldEnum[]
  }

  /**
   * UsefulLinkSection findFirstOrThrow
   */
  export type UsefulLinkSectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsefulLinkSection
     */
    select?: UsefulLinkSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsefulLinkSection
     */
    omit?: UsefulLinkSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsefulLinkSectionInclude<ExtArgs> | null
    /**
     * Filter, which UsefulLinkSection to fetch.
     */
    where?: UsefulLinkSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsefulLinkSections to fetch.
     */
    orderBy?: UsefulLinkSectionOrderByWithRelationInput | UsefulLinkSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsefulLinkSections.
     */
    cursor?: UsefulLinkSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsefulLinkSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsefulLinkSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsefulLinkSections.
     */
    distinct?: UsefulLinkSectionScalarFieldEnum | UsefulLinkSectionScalarFieldEnum[]
  }

  /**
   * UsefulLinkSection findMany
   */
  export type UsefulLinkSectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsefulLinkSection
     */
    select?: UsefulLinkSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsefulLinkSection
     */
    omit?: UsefulLinkSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsefulLinkSectionInclude<ExtArgs> | null
    /**
     * Filter, which UsefulLinkSections to fetch.
     */
    where?: UsefulLinkSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsefulLinkSections to fetch.
     */
    orderBy?: UsefulLinkSectionOrderByWithRelationInput | UsefulLinkSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UsefulLinkSections.
     */
    cursor?: UsefulLinkSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsefulLinkSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsefulLinkSections.
     */
    skip?: number
    distinct?: UsefulLinkSectionScalarFieldEnum | UsefulLinkSectionScalarFieldEnum[]
  }

  /**
   * UsefulLinkSection create
   */
  export type UsefulLinkSectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsefulLinkSection
     */
    select?: UsefulLinkSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsefulLinkSection
     */
    omit?: UsefulLinkSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsefulLinkSectionInclude<ExtArgs> | null
    /**
     * The data needed to create a UsefulLinkSection.
     */
    data: XOR<UsefulLinkSectionCreateInput, UsefulLinkSectionUncheckedCreateInput>
  }

  /**
   * UsefulLinkSection createMany
   */
  export type UsefulLinkSectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UsefulLinkSections.
     */
    data: UsefulLinkSectionCreateManyInput | UsefulLinkSectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UsefulLinkSection createManyAndReturn
   */
  export type UsefulLinkSectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsefulLinkSection
     */
    select?: UsefulLinkSectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsefulLinkSection
     */
    omit?: UsefulLinkSectionOmit<ExtArgs> | null
    /**
     * The data used to create many UsefulLinkSections.
     */
    data: UsefulLinkSectionCreateManyInput | UsefulLinkSectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsefulLinkSectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UsefulLinkSection update
   */
  export type UsefulLinkSectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsefulLinkSection
     */
    select?: UsefulLinkSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsefulLinkSection
     */
    omit?: UsefulLinkSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsefulLinkSectionInclude<ExtArgs> | null
    /**
     * The data needed to update a UsefulLinkSection.
     */
    data: XOR<UsefulLinkSectionUpdateInput, UsefulLinkSectionUncheckedUpdateInput>
    /**
     * Choose, which UsefulLinkSection to update.
     */
    where: UsefulLinkSectionWhereUniqueInput
  }

  /**
   * UsefulLinkSection updateMany
   */
  export type UsefulLinkSectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UsefulLinkSections.
     */
    data: XOR<UsefulLinkSectionUpdateManyMutationInput, UsefulLinkSectionUncheckedUpdateManyInput>
    /**
     * Filter which UsefulLinkSections to update
     */
    where?: UsefulLinkSectionWhereInput
    /**
     * Limit how many UsefulLinkSections to update.
     */
    limit?: number
  }

  /**
   * UsefulLinkSection updateManyAndReturn
   */
  export type UsefulLinkSectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsefulLinkSection
     */
    select?: UsefulLinkSectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsefulLinkSection
     */
    omit?: UsefulLinkSectionOmit<ExtArgs> | null
    /**
     * The data used to update UsefulLinkSections.
     */
    data: XOR<UsefulLinkSectionUpdateManyMutationInput, UsefulLinkSectionUncheckedUpdateManyInput>
    /**
     * Filter which UsefulLinkSections to update
     */
    where?: UsefulLinkSectionWhereInput
    /**
     * Limit how many UsefulLinkSections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsefulLinkSectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UsefulLinkSection upsert
   */
  export type UsefulLinkSectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsefulLinkSection
     */
    select?: UsefulLinkSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsefulLinkSection
     */
    omit?: UsefulLinkSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsefulLinkSectionInclude<ExtArgs> | null
    /**
     * The filter to search for the UsefulLinkSection to update in case it exists.
     */
    where: UsefulLinkSectionWhereUniqueInput
    /**
     * In case the UsefulLinkSection found by the `where` argument doesn't exist, create a new UsefulLinkSection with this data.
     */
    create: XOR<UsefulLinkSectionCreateInput, UsefulLinkSectionUncheckedCreateInput>
    /**
     * In case the UsefulLinkSection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsefulLinkSectionUpdateInput, UsefulLinkSectionUncheckedUpdateInput>
  }

  /**
   * UsefulLinkSection delete
   */
  export type UsefulLinkSectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsefulLinkSection
     */
    select?: UsefulLinkSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsefulLinkSection
     */
    omit?: UsefulLinkSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsefulLinkSectionInclude<ExtArgs> | null
    /**
     * Filter which UsefulLinkSection to delete.
     */
    where: UsefulLinkSectionWhereUniqueInput
  }

  /**
   * UsefulLinkSection deleteMany
   */
  export type UsefulLinkSectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsefulLinkSections to delete
     */
    where?: UsefulLinkSectionWhereInput
    /**
     * Limit how many UsefulLinkSections to delete.
     */
    limit?: number
  }

  /**
   * UsefulLinkSection.links
   */
  export type UsefulLinkSection$linksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsefulLink
     */
    select?: UsefulLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsefulLink
     */
    omit?: UsefulLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsefulLinkInclude<ExtArgs> | null
    where?: UsefulLinkWhereInput
    orderBy?: UsefulLinkOrderByWithRelationInput | UsefulLinkOrderByWithRelationInput[]
    cursor?: UsefulLinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsefulLinkScalarFieldEnum | UsefulLinkScalarFieldEnum[]
  }

  /**
   * UsefulLinkSection without action
   */
  export type UsefulLinkSectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsefulLinkSection
     */
    select?: UsefulLinkSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsefulLinkSection
     */
    omit?: UsefulLinkSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsefulLinkSectionInclude<ExtArgs> | null
  }


  /**
   * Model UsefulLink
   */

  export type AggregateUsefulLink = {
    _count: UsefulLinkCountAggregateOutputType | null
    _avg: UsefulLinkAvgAggregateOutputType | null
    _sum: UsefulLinkSumAggregateOutputType | null
    _min: UsefulLinkMinAggregateOutputType | null
    _max: UsefulLinkMaxAggregateOutputType | null
  }

  export type UsefulLinkAvgAggregateOutputType = {
    id: number | null
    section_id: number | null
  }

  export type UsefulLinkSumAggregateOutputType = {
    id: number | null
    section_id: number | null
  }

  export type UsefulLinkMinAggregateOutputType = {
    id: number | null
    display_name: string | null
    url: string | null
    section_id: number | null
  }

  export type UsefulLinkMaxAggregateOutputType = {
    id: number | null
    display_name: string | null
    url: string | null
    section_id: number | null
  }

  export type UsefulLinkCountAggregateOutputType = {
    id: number
    display_name: number
    url: number
    section_id: number
    _all: number
  }


  export type UsefulLinkAvgAggregateInputType = {
    id?: true
    section_id?: true
  }

  export type UsefulLinkSumAggregateInputType = {
    id?: true
    section_id?: true
  }

  export type UsefulLinkMinAggregateInputType = {
    id?: true
    display_name?: true
    url?: true
    section_id?: true
  }

  export type UsefulLinkMaxAggregateInputType = {
    id?: true
    display_name?: true
    url?: true
    section_id?: true
  }

  export type UsefulLinkCountAggregateInputType = {
    id?: true
    display_name?: true
    url?: true
    section_id?: true
    _all?: true
  }

  export type UsefulLinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsefulLink to aggregate.
     */
    where?: UsefulLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsefulLinks to fetch.
     */
    orderBy?: UsefulLinkOrderByWithRelationInput | UsefulLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsefulLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsefulLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsefulLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UsefulLinks
    **/
    _count?: true | UsefulLinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsefulLinkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsefulLinkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsefulLinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsefulLinkMaxAggregateInputType
  }

  export type GetUsefulLinkAggregateType<T extends UsefulLinkAggregateArgs> = {
        [P in keyof T & keyof AggregateUsefulLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsefulLink[P]>
      : GetScalarType<T[P], AggregateUsefulLink[P]>
  }




  export type UsefulLinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsefulLinkWhereInput
    orderBy?: UsefulLinkOrderByWithAggregationInput | UsefulLinkOrderByWithAggregationInput[]
    by: UsefulLinkScalarFieldEnum[] | UsefulLinkScalarFieldEnum
    having?: UsefulLinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsefulLinkCountAggregateInputType | true
    _avg?: UsefulLinkAvgAggregateInputType
    _sum?: UsefulLinkSumAggregateInputType
    _min?: UsefulLinkMinAggregateInputType
    _max?: UsefulLinkMaxAggregateInputType
  }

  export type UsefulLinkGroupByOutputType = {
    id: number
    display_name: string
    url: string
    section_id: number
    _count: UsefulLinkCountAggregateOutputType | null
    _avg: UsefulLinkAvgAggregateOutputType | null
    _sum: UsefulLinkSumAggregateOutputType | null
    _min: UsefulLinkMinAggregateOutputType | null
    _max: UsefulLinkMaxAggregateOutputType | null
  }

  type GetUsefulLinkGroupByPayload<T extends UsefulLinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsefulLinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsefulLinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsefulLinkGroupByOutputType[P]>
            : GetScalarType<T[P], UsefulLinkGroupByOutputType[P]>
        }
      >
    >


  export type UsefulLinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    display_name?: boolean
    url?: boolean
    section_id?: boolean
    section?: boolean | UsefulLinkSectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usefulLink"]>

  export type UsefulLinkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    display_name?: boolean
    url?: boolean
    section_id?: boolean
    section?: boolean | UsefulLinkSectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usefulLink"]>

  export type UsefulLinkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    display_name?: boolean
    url?: boolean
    section_id?: boolean
    section?: boolean | UsefulLinkSectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usefulLink"]>

  export type UsefulLinkSelectScalar = {
    id?: boolean
    display_name?: boolean
    url?: boolean
    section_id?: boolean
  }

  export type UsefulLinkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "display_name" | "url" | "section_id", ExtArgs["result"]["usefulLink"]>
  export type UsefulLinkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | UsefulLinkSectionDefaultArgs<ExtArgs>
  }
  export type UsefulLinkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | UsefulLinkSectionDefaultArgs<ExtArgs>
  }
  export type UsefulLinkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | UsefulLinkSectionDefaultArgs<ExtArgs>
  }

  export type $UsefulLinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UsefulLink"
    objects: {
      section: Prisma.$UsefulLinkSectionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      display_name: string
      url: string
      section_id: number
    }, ExtArgs["result"]["usefulLink"]>
    composites: {}
  }

  type UsefulLinkGetPayload<S extends boolean | null | undefined | UsefulLinkDefaultArgs> = $Result.GetResult<Prisma.$UsefulLinkPayload, S>

  type UsefulLinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsefulLinkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsefulLinkCountAggregateInputType | true
    }

  export interface UsefulLinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UsefulLink'], meta: { name: 'UsefulLink' } }
    /**
     * Find zero or one UsefulLink that matches the filter.
     * @param {UsefulLinkFindUniqueArgs} args - Arguments to find a UsefulLink
     * @example
     * // Get one UsefulLink
     * const usefulLink = await prisma.usefulLink.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsefulLinkFindUniqueArgs>(args: SelectSubset<T, UsefulLinkFindUniqueArgs<ExtArgs>>): Prisma__UsefulLinkClient<$Result.GetResult<Prisma.$UsefulLinkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UsefulLink that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsefulLinkFindUniqueOrThrowArgs} args - Arguments to find a UsefulLink
     * @example
     * // Get one UsefulLink
     * const usefulLink = await prisma.usefulLink.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsefulLinkFindUniqueOrThrowArgs>(args: SelectSubset<T, UsefulLinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsefulLinkClient<$Result.GetResult<Prisma.$UsefulLinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsefulLink that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsefulLinkFindFirstArgs} args - Arguments to find a UsefulLink
     * @example
     * // Get one UsefulLink
     * const usefulLink = await prisma.usefulLink.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsefulLinkFindFirstArgs>(args?: SelectSubset<T, UsefulLinkFindFirstArgs<ExtArgs>>): Prisma__UsefulLinkClient<$Result.GetResult<Prisma.$UsefulLinkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsefulLink that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsefulLinkFindFirstOrThrowArgs} args - Arguments to find a UsefulLink
     * @example
     * // Get one UsefulLink
     * const usefulLink = await prisma.usefulLink.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsefulLinkFindFirstOrThrowArgs>(args?: SelectSubset<T, UsefulLinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsefulLinkClient<$Result.GetResult<Prisma.$UsefulLinkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UsefulLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsefulLinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UsefulLinks
     * const usefulLinks = await prisma.usefulLink.findMany()
     * 
     * // Get first 10 UsefulLinks
     * const usefulLinks = await prisma.usefulLink.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usefulLinkWithIdOnly = await prisma.usefulLink.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsefulLinkFindManyArgs>(args?: SelectSubset<T, UsefulLinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsefulLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UsefulLink.
     * @param {UsefulLinkCreateArgs} args - Arguments to create a UsefulLink.
     * @example
     * // Create one UsefulLink
     * const UsefulLink = await prisma.usefulLink.create({
     *   data: {
     *     // ... data to create a UsefulLink
     *   }
     * })
     * 
     */
    create<T extends UsefulLinkCreateArgs>(args: SelectSubset<T, UsefulLinkCreateArgs<ExtArgs>>): Prisma__UsefulLinkClient<$Result.GetResult<Prisma.$UsefulLinkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UsefulLinks.
     * @param {UsefulLinkCreateManyArgs} args - Arguments to create many UsefulLinks.
     * @example
     * // Create many UsefulLinks
     * const usefulLink = await prisma.usefulLink.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsefulLinkCreateManyArgs>(args?: SelectSubset<T, UsefulLinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UsefulLinks and returns the data saved in the database.
     * @param {UsefulLinkCreateManyAndReturnArgs} args - Arguments to create many UsefulLinks.
     * @example
     * // Create many UsefulLinks
     * const usefulLink = await prisma.usefulLink.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UsefulLinks and only return the `id`
     * const usefulLinkWithIdOnly = await prisma.usefulLink.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsefulLinkCreateManyAndReturnArgs>(args?: SelectSubset<T, UsefulLinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsefulLinkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UsefulLink.
     * @param {UsefulLinkDeleteArgs} args - Arguments to delete one UsefulLink.
     * @example
     * // Delete one UsefulLink
     * const UsefulLink = await prisma.usefulLink.delete({
     *   where: {
     *     // ... filter to delete one UsefulLink
     *   }
     * })
     * 
     */
    delete<T extends UsefulLinkDeleteArgs>(args: SelectSubset<T, UsefulLinkDeleteArgs<ExtArgs>>): Prisma__UsefulLinkClient<$Result.GetResult<Prisma.$UsefulLinkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UsefulLink.
     * @param {UsefulLinkUpdateArgs} args - Arguments to update one UsefulLink.
     * @example
     * // Update one UsefulLink
     * const usefulLink = await prisma.usefulLink.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsefulLinkUpdateArgs>(args: SelectSubset<T, UsefulLinkUpdateArgs<ExtArgs>>): Prisma__UsefulLinkClient<$Result.GetResult<Prisma.$UsefulLinkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UsefulLinks.
     * @param {UsefulLinkDeleteManyArgs} args - Arguments to filter UsefulLinks to delete.
     * @example
     * // Delete a few UsefulLinks
     * const { count } = await prisma.usefulLink.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsefulLinkDeleteManyArgs>(args?: SelectSubset<T, UsefulLinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsefulLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsefulLinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UsefulLinks
     * const usefulLink = await prisma.usefulLink.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsefulLinkUpdateManyArgs>(args: SelectSubset<T, UsefulLinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsefulLinks and returns the data updated in the database.
     * @param {UsefulLinkUpdateManyAndReturnArgs} args - Arguments to update many UsefulLinks.
     * @example
     * // Update many UsefulLinks
     * const usefulLink = await prisma.usefulLink.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UsefulLinks and only return the `id`
     * const usefulLinkWithIdOnly = await prisma.usefulLink.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsefulLinkUpdateManyAndReturnArgs>(args: SelectSubset<T, UsefulLinkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsefulLinkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UsefulLink.
     * @param {UsefulLinkUpsertArgs} args - Arguments to update or create a UsefulLink.
     * @example
     * // Update or create a UsefulLink
     * const usefulLink = await prisma.usefulLink.upsert({
     *   create: {
     *     // ... data to create a UsefulLink
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UsefulLink we want to update
     *   }
     * })
     */
    upsert<T extends UsefulLinkUpsertArgs>(args: SelectSubset<T, UsefulLinkUpsertArgs<ExtArgs>>): Prisma__UsefulLinkClient<$Result.GetResult<Prisma.$UsefulLinkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UsefulLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsefulLinkCountArgs} args - Arguments to filter UsefulLinks to count.
     * @example
     * // Count the number of UsefulLinks
     * const count = await prisma.usefulLink.count({
     *   where: {
     *     // ... the filter for the UsefulLinks we want to count
     *   }
     * })
    **/
    count<T extends UsefulLinkCountArgs>(
      args?: Subset<T, UsefulLinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsefulLinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UsefulLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsefulLinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsefulLinkAggregateArgs>(args: Subset<T, UsefulLinkAggregateArgs>): Prisma.PrismaPromise<GetUsefulLinkAggregateType<T>>

    /**
     * Group by UsefulLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsefulLinkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsefulLinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsefulLinkGroupByArgs['orderBy'] }
        : { orderBy?: UsefulLinkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsefulLinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsefulLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UsefulLink model
   */
  readonly fields: UsefulLinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UsefulLink.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsefulLinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    section<T extends UsefulLinkSectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsefulLinkSectionDefaultArgs<ExtArgs>>): Prisma__UsefulLinkSectionClient<$Result.GetResult<Prisma.$UsefulLinkSectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UsefulLink model
   */
  interface UsefulLinkFieldRefs {
    readonly id: FieldRef<"UsefulLink", 'Int'>
    readonly display_name: FieldRef<"UsefulLink", 'String'>
    readonly url: FieldRef<"UsefulLink", 'String'>
    readonly section_id: FieldRef<"UsefulLink", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UsefulLink findUnique
   */
  export type UsefulLinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsefulLink
     */
    select?: UsefulLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsefulLink
     */
    omit?: UsefulLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsefulLinkInclude<ExtArgs> | null
    /**
     * Filter, which UsefulLink to fetch.
     */
    where: UsefulLinkWhereUniqueInput
  }

  /**
   * UsefulLink findUniqueOrThrow
   */
  export type UsefulLinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsefulLink
     */
    select?: UsefulLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsefulLink
     */
    omit?: UsefulLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsefulLinkInclude<ExtArgs> | null
    /**
     * Filter, which UsefulLink to fetch.
     */
    where: UsefulLinkWhereUniqueInput
  }

  /**
   * UsefulLink findFirst
   */
  export type UsefulLinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsefulLink
     */
    select?: UsefulLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsefulLink
     */
    omit?: UsefulLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsefulLinkInclude<ExtArgs> | null
    /**
     * Filter, which UsefulLink to fetch.
     */
    where?: UsefulLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsefulLinks to fetch.
     */
    orderBy?: UsefulLinkOrderByWithRelationInput | UsefulLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsefulLinks.
     */
    cursor?: UsefulLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsefulLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsefulLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsefulLinks.
     */
    distinct?: UsefulLinkScalarFieldEnum | UsefulLinkScalarFieldEnum[]
  }

  /**
   * UsefulLink findFirstOrThrow
   */
  export type UsefulLinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsefulLink
     */
    select?: UsefulLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsefulLink
     */
    omit?: UsefulLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsefulLinkInclude<ExtArgs> | null
    /**
     * Filter, which UsefulLink to fetch.
     */
    where?: UsefulLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsefulLinks to fetch.
     */
    orderBy?: UsefulLinkOrderByWithRelationInput | UsefulLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsefulLinks.
     */
    cursor?: UsefulLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsefulLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsefulLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsefulLinks.
     */
    distinct?: UsefulLinkScalarFieldEnum | UsefulLinkScalarFieldEnum[]
  }

  /**
   * UsefulLink findMany
   */
  export type UsefulLinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsefulLink
     */
    select?: UsefulLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsefulLink
     */
    omit?: UsefulLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsefulLinkInclude<ExtArgs> | null
    /**
     * Filter, which UsefulLinks to fetch.
     */
    where?: UsefulLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsefulLinks to fetch.
     */
    orderBy?: UsefulLinkOrderByWithRelationInput | UsefulLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UsefulLinks.
     */
    cursor?: UsefulLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsefulLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsefulLinks.
     */
    skip?: number
    distinct?: UsefulLinkScalarFieldEnum | UsefulLinkScalarFieldEnum[]
  }

  /**
   * UsefulLink create
   */
  export type UsefulLinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsefulLink
     */
    select?: UsefulLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsefulLink
     */
    omit?: UsefulLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsefulLinkInclude<ExtArgs> | null
    /**
     * The data needed to create a UsefulLink.
     */
    data: XOR<UsefulLinkCreateInput, UsefulLinkUncheckedCreateInput>
  }

  /**
   * UsefulLink createMany
   */
  export type UsefulLinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UsefulLinks.
     */
    data: UsefulLinkCreateManyInput | UsefulLinkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UsefulLink createManyAndReturn
   */
  export type UsefulLinkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsefulLink
     */
    select?: UsefulLinkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsefulLink
     */
    omit?: UsefulLinkOmit<ExtArgs> | null
    /**
     * The data used to create many UsefulLinks.
     */
    data: UsefulLinkCreateManyInput | UsefulLinkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsefulLinkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UsefulLink update
   */
  export type UsefulLinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsefulLink
     */
    select?: UsefulLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsefulLink
     */
    omit?: UsefulLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsefulLinkInclude<ExtArgs> | null
    /**
     * The data needed to update a UsefulLink.
     */
    data: XOR<UsefulLinkUpdateInput, UsefulLinkUncheckedUpdateInput>
    /**
     * Choose, which UsefulLink to update.
     */
    where: UsefulLinkWhereUniqueInput
  }

  /**
   * UsefulLink updateMany
   */
  export type UsefulLinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UsefulLinks.
     */
    data: XOR<UsefulLinkUpdateManyMutationInput, UsefulLinkUncheckedUpdateManyInput>
    /**
     * Filter which UsefulLinks to update
     */
    where?: UsefulLinkWhereInput
    /**
     * Limit how many UsefulLinks to update.
     */
    limit?: number
  }

  /**
   * UsefulLink updateManyAndReturn
   */
  export type UsefulLinkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsefulLink
     */
    select?: UsefulLinkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsefulLink
     */
    omit?: UsefulLinkOmit<ExtArgs> | null
    /**
     * The data used to update UsefulLinks.
     */
    data: XOR<UsefulLinkUpdateManyMutationInput, UsefulLinkUncheckedUpdateManyInput>
    /**
     * Filter which UsefulLinks to update
     */
    where?: UsefulLinkWhereInput
    /**
     * Limit how many UsefulLinks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsefulLinkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UsefulLink upsert
   */
  export type UsefulLinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsefulLink
     */
    select?: UsefulLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsefulLink
     */
    omit?: UsefulLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsefulLinkInclude<ExtArgs> | null
    /**
     * The filter to search for the UsefulLink to update in case it exists.
     */
    where: UsefulLinkWhereUniqueInput
    /**
     * In case the UsefulLink found by the `where` argument doesn't exist, create a new UsefulLink with this data.
     */
    create: XOR<UsefulLinkCreateInput, UsefulLinkUncheckedCreateInput>
    /**
     * In case the UsefulLink was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsefulLinkUpdateInput, UsefulLinkUncheckedUpdateInput>
  }

  /**
   * UsefulLink delete
   */
  export type UsefulLinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsefulLink
     */
    select?: UsefulLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsefulLink
     */
    omit?: UsefulLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsefulLinkInclude<ExtArgs> | null
    /**
     * Filter which UsefulLink to delete.
     */
    where: UsefulLinkWhereUniqueInput
  }

  /**
   * UsefulLink deleteMany
   */
  export type UsefulLinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsefulLinks to delete
     */
    where?: UsefulLinkWhereInput
    /**
     * Limit how many UsefulLinks to delete.
     */
    limit?: number
  }

  /**
   * UsefulLink without action
   */
  export type UsefulLinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsefulLink
     */
    select?: UsefulLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsefulLink
     */
    omit?: UsefulLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsefulLinkInclude<ExtArgs> | null
  }


  /**
   * Model DiscoverMore
   */

  export type AggregateDiscoverMore = {
    _count: DiscoverMoreCountAggregateOutputType | null
    _avg: DiscoverMoreAvgAggregateOutputType | null
    _sum: DiscoverMoreSumAggregateOutputType | null
    _min: DiscoverMoreMinAggregateOutputType | null
    _max: DiscoverMoreMaxAggregateOutputType | null
  }

  export type DiscoverMoreAvgAggregateOutputType = {
    id: number | null
    naukari_id: number | null
  }

  export type DiscoverMoreSumAggregateOutputType = {
    id: number | null
    naukari_id: number | null
  }

  export type DiscoverMoreMinAggregateOutputType = {
    id: number | null
    display_name: string | null
    url: string | null
    naukari_id: number | null
  }

  export type DiscoverMoreMaxAggregateOutputType = {
    id: number | null
    display_name: string | null
    url: string | null
    naukari_id: number | null
  }

  export type DiscoverMoreCountAggregateOutputType = {
    id: number
    display_name: number
    url: number
    naukari_id: number
    _all: number
  }


  export type DiscoverMoreAvgAggregateInputType = {
    id?: true
    naukari_id?: true
  }

  export type DiscoverMoreSumAggregateInputType = {
    id?: true
    naukari_id?: true
  }

  export type DiscoverMoreMinAggregateInputType = {
    id?: true
    display_name?: true
    url?: true
    naukari_id?: true
  }

  export type DiscoverMoreMaxAggregateInputType = {
    id?: true
    display_name?: true
    url?: true
    naukari_id?: true
  }

  export type DiscoverMoreCountAggregateInputType = {
    id?: true
    display_name?: true
    url?: true
    naukari_id?: true
    _all?: true
  }

  export type DiscoverMoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiscoverMore to aggregate.
     */
    where?: DiscoverMoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscoverMores to fetch.
     */
    orderBy?: DiscoverMoreOrderByWithRelationInput | DiscoverMoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiscoverMoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscoverMores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscoverMores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DiscoverMores
    **/
    _count?: true | DiscoverMoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DiscoverMoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DiscoverMoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiscoverMoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiscoverMoreMaxAggregateInputType
  }

  export type GetDiscoverMoreAggregateType<T extends DiscoverMoreAggregateArgs> = {
        [P in keyof T & keyof AggregateDiscoverMore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiscoverMore[P]>
      : GetScalarType<T[P], AggregateDiscoverMore[P]>
  }




  export type DiscoverMoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiscoverMoreWhereInput
    orderBy?: DiscoverMoreOrderByWithAggregationInput | DiscoverMoreOrderByWithAggregationInput[]
    by: DiscoverMoreScalarFieldEnum[] | DiscoverMoreScalarFieldEnum
    having?: DiscoverMoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiscoverMoreCountAggregateInputType | true
    _avg?: DiscoverMoreAvgAggregateInputType
    _sum?: DiscoverMoreSumAggregateInputType
    _min?: DiscoverMoreMinAggregateInputType
    _max?: DiscoverMoreMaxAggregateInputType
  }

  export type DiscoverMoreGroupByOutputType = {
    id: number
    display_name: string
    url: string
    naukari_id: number
    _count: DiscoverMoreCountAggregateOutputType | null
    _avg: DiscoverMoreAvgAggregateOutputType | null
    _sum: DiscoverMoreSumAggregateOutputType | null
    _min: DiscoverMoreMinAggregateOutputType | null
    _max: DiscoverMoreMaxAggregateOutputType | null
  }

  type GetDiscoverMoreGroupByPayload<T extends DiscoverMoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiscoverMoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiscoverMoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiscoverMoreGroupByOutputType[P]>
            : GetScalarType<T[P], DiscoverMoreGroupByOutputType[P]>
        }
      >
    >


  export type DiscoverMoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    display_name?: boolean
    url?: boolean
    naukari_id?: boolean
    naukari?: boolean | NaukariDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["discoverMore"]>

  export type DiscoverMoreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    display_name?: boolean
    url?: boolean
    naukari_id?: boolean
    naukari?: boolean | NaukariDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["discoverMore"]>

  export type DiscoverMoreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    display_name?: boolean
    url?: boolean
    naukari_id?: boolean
    naukari?: boolean | NaukariDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["discoverMore"]>

  export type DiscoverMoreSelectScalar = {
    id?: boolean
    display_name?: boolean
    url?: boolean
    naukari_id?: boolean
  }

  export type DiscoverMoreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "display_name" | "url" | "naukari_id", ExtArgs["result"]["discoverMore"]>
  export type DiscoverMoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    naukari?: boolean | NaukariDefaultArgs<ExtArgs>
  }
  export type DiscoverMoreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    naukari?: boolean | NaukariDefaultArgs<ExtArgs>
  }
  export type DiscoverMoreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    naukari?: boolean | NaukariDefaultArgs<ExtArgs>
  }

  export type $DiscoverMorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DiscoverMore"
    objects: {
      naukari: Prisma.$NaukariPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      display_name: string
      url: string
      naukari_id: number
    }, ExtArgs["result"]["discoverMore"]>
    composites: {}
  }

  type DiscoverMoreGetPayload<S extends boolean | null | undefined | DiscoverMoreDefaultArgs> = $Result.GetResult<Prisma.$DiscoverMorePayload, S>

  type DiscoverMoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiscoverMoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiscoverMoreCountAggregateInputType | true
    }

  export interface DiscoverMoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DiscoverMore'], meta: { name: 'DiscoverMore' } }
    /**
     * Find zero or one DiscoverMore that matches the filter.
     * @param {DiscoverMoreFindUniqueArgs} args - Arguments to find a DiscoverMore
     * @example
     * // Get one DiscoverMore
     * const discoverMore = await prisma.discoverMore.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiscoverMoreFindUniqueArgs>(args: SelectSubset<T, DiscoverMoreFindUniqueArgs<ExtArgs>>): Prisma__DiscoverMoreClient<$Result.GetResult<Prisma.$DiscoverMorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DiscoverMore that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiscoverMoreFindUniqueOrThrowArgs} args - Arguments to find a DiscoverMore
     * @example
     * // Get one DiscoverMore
     * const discoverMore = await prisma.discoverMore.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiscoverMoreFindUniqueOrThrowArgs>(args: SelectSubset<T, DiscoverMoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiscoverMoreClient<$Result.GetResult<Prisma.$DiscoverMorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiscoverMore that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscoverMoreFindFirstArgs} args - Arguments to find a DiscoverMore
     * @example
     * // Get one DiscoverMore
     * const discoverMore = await prisma.discoverMore.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiscoverMoreFindFirstArgs>(args?: SelectSubset<T, DiscoverMoreFindFirstArgs<ExtArgs>>): Prisma__DiscoverMoreClient<$Result.GetResult<Prisma.$DiscoverMorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiscoverMore that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscoverMoreFindFirstOrThrowArgs} args - Arguments to find a DiscoverMore
     * @example
     * // Get one DiscoverMore
     * const discoverMore = await prisma.discoverMore.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiscoverMoreFindFirstOrThrowArgs>(args?: SelectSubset<T, DiscoverMoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiscoverMoreClient<$Result.GetResult<Prisma.$DiscoverMorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DiscoverMores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscoverMoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DiscoverMores
     * const discoverMores = await prisma.discoverMore.findMany()
     * 
     * // Get first 10 DiscoverMores
     * const discoverMores = await prisma.discoverMore.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const discoverMoreWithIdOnly = await prisma.discoverMore.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DiscoverMoreFindManyArgs>(args?: SelectSubset<T, DiscoverMoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscoverMorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DiscoverMore.
     * @param {DiscoverMoreCreateArgs} args - Arguments to create a DiscoverMore.
     * @example
     * // Create one DiscoverMore
     * const DiscoverMore = await prisma.discoverMore.create({
     *   data: {
     *     // ... data to create a DiscoverMore
     *   }
     * })
     * 
     */
    create<T extends DiscoverMoreCreateArgs>(args: SelectSubset<T, DiscoverMoreCreateArgs<ExtArgs>>): Prisma__DiscoverMoreClient<$Result.GetResult<Prisma.$DiscoverMorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DiscoverMores.
     * @param {DiscoverMoreCreateManyArgs} args - Arguments to create many DiscoverMores.
     * @example
     * // Create many DiscoverMores
     * const discoverMore = await prisma.discoverMore.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiscoverMoreCreateManyArgs>(args?: SelectSubset<T, DiscoverMoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DiscoverMores and returns the data saved in the database.
     * @param {DiscoverMoreCreateManyAndReturnArgs} args - Arguments to create many DiscoverMores.
     * @example
     * // Create many DiscoverMores
     * const discoverMore = await prisma.discoverMore.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DiscoverMores and only return the `id`
     * const discoverMoreWithIdOnly = await prisma.discoverMore.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DiscoverMoreCreateManyAndReturnArgs>(args?: SelectSubset<T, DiscoverMoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscoverMorePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DiscoverMore.
     * @param {DiscoverMoreDeleteArgs} args - Arguments to delete one DiscoverMore.
     * @example
     * // Delete one DiscoverMore
     * const DiscoverMore = await prisma.discoverMore.delete({
     *   where: {
     *     // ... filter to delete one DiscoverMore
     *   }
     * })
     * 
     */
    delete<T extends DiscoverMoreDeleteArgs>(args: SelectSubset<T, DiscoverMoreDeleteArgs<ExtArgs>>): Prisma__DiscoverMoreClient<$Result.GetResult<Prisma.$DiscoverMorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DiscoverMore.
     * @param {DiscoverMoreUpdateArgs} args - Arguments to update one DiscoverMore.
     * @example
     * // Update one DiscoverMore
     * const discoverMore = await prisma.discoverMore.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiscoverMoreUpdateArgs>(args: SelectSubset<T, DiscoverMoreUpdateArgs<ExtArgs>>): Prisma__DiscoverMoreClient<$Result.GetResult<Prisma.$DiscoverMorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DiscoverMores.
     * @param {DiscoverMoreDeleteManyArgs} args - Arguments to filter DiscoverMores to delete.
     * @example
     * // Delete a few DiscoverMores
     * const { count } = await prisma.discoverMore.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiscoverMoreDeleteManyArgs>(args?: SelectSubset<T, DiscoverMoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiscoverMores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscoverMoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DiscoverMores
     * const discoverMore = await prisma.discoverMore.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiscoverMoreUpdateManyArgs>(args: SelectSubset<T, DiscoverMoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiscoverMores and returns the data updated in the database.
     * @param {DiscoverMoreUpdateManyAndReturnArgs} args - Arguments to update many DiscoverMores.
     * @example
     * // Update many DiscoverMores
     * const discoverMore = await prisma.discoverMore.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DiscoverMores and only return the `id`
     * const discoverMoreWithIdOnly = await prisma.discoverMore.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DiscoverMoreUpdateManyAndReturnArgs>(args: SelectSubset<T, DiscoverMoreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscoverMorePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DiscoverMore.
     * @param {DiscoverMoreUpsertArgs} args - Arguments to update or create a DiscoverMore.
     * @example
     * // Update or create a DiscoverMore
     * const discoverMore = await prisma.discoverMore.upsert({
     *   create: {
     *     // ... data to create a DiscoverMore
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DiscoverMore we want to update
     *   }
     * })
     */
    upsert<T extends DiscoverMoreUpsertArgs>(args: SelectSubset<T, DiscoverMoreUpsertArgs<ExtArgs>>): Prisma__DiscoverMoreClient<$Result.GetResult<Prisma.$DiscoverMorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DiscoverMores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscoverMoreCountArgs} args - Arguments to filter DiscoverMores to count.
     * @example
     * // Count the number of DiscoverMores
     * const count = await prisma.discoverMore.count({
     *   where: {
     *     // ... the filter for the DiscoverMores we want to count
     *   }
     * })
    **/
    count<T extends DiscoverMoreCountArgs>(
      args?: Subset<T, DiscoverMoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiscoverMoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DiscoverMore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscoverMoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DiscoverMoreAggregateArgs>(args: Subset<T, DiscoverMoreAggregateArgs>): Prisma.PrismaPromise<GetDiscoverMoreAggregateType<T>>

    /**
     * Group by DiscoverMore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscoverMoreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DiscoverMoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiscoverMoreGroupByArgs['orderBy'] }
        : { orderBy?: DiscoverMoreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DiscoverMoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiscoverMoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DiscoverMore model
   */
  readonly fields: DiscoverMoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DiscoverMore.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiscoverMoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    naukari<T extends NaukariDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NaukariDefaultArgs<ExtArgs>>): Prisma__NaukariClient<$Result.GetResult<Prisma.$NaukariPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DiscoverMore model
   */
  interface DiscoverMoreFieldRefs {
    readonly id: FieldRef<"DiscoverMore", 'Int'>
    readonly display_name: FieldRef<"DiscoverMore", 'String'>
    readonly url: FieldRef<"DiscoverMore", 'String'>
    readonly naukari_id: FieldRef<"DiscoverMore", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * DiscoverMore findUnique
   */
  export type DiscoverMoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscoverMore
     */
    select?: DiscoverMoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscoverMore
     */
    omit?: DiscoverMoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscoverMoreInclude<ExtArgs> | null
    /**
     * Filter, which DiscoverMore to fetch.
     */
    where: DiscoverMoreWhereUniqueInput
  }

  /**
   * DiscoverMore findUniqueOrThrow
   */
  export type DiscoverMoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscoverMore
     */
    select?: DiscoverMoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscoverMore
     */
    omit?: DiscoverMoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscoverMoreInclude<ExtArgs> | null
    /**
     * Filter, which DiscoverMore to fetch.
     */
    where: DiscoverMoreWhereUniqueInput
  }

  /**
   * DiscoverMore findFirst
   */
  export type DiscoverMoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscoverMore
     */
    select?: DiscoverMoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscoverMore
     */
    omit?: DiscoverMoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscoverMoreInclude<ExtArgs> | null
    /**
     * Filter, which DiscoverMore to fetch.
     */
    where?: DiscoverMoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscoverMores to fetch.
     */
    orderBy?: DiscoverMoreOrderByWithRelationInput | DiscoverMoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiscoverMores.
     */
    cursor?: DiscoverMoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscoverMores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscoverMores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiscoverMores.
     */
    distinct?: DiscoverMoreScalarFieldEnum | DiscoverMoreScalarFieldEnum[]
  }

  /**
   * DiscoverMore findFirstOrThrow
   */
  export type DiscoverMoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscoverMore
     */
    select?: DiscoverMoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscoverMore
     */
    omit?: DiscoverMoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscoverMoreInclude<ExtArgs> | null
    /**
     * Filter, which DiscoverMore to fetch.
     */
    where?: DiscoverMoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscoverMores to fetch.
     */
    orderBy?: DiscoverMoreOrderByWithRelationInput | DiscoverMoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiscoverMores.
     */
    cursor?: DiscoverMoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscoverMores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscoverMores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiscoverMores.
     */
    distinct?: DiscoverMoreScalarFieldEnum | DiscoverMoreScalarFieldEnum[]
  }

  /**
   * DiscoverMore findMany
   */
  export type DiscoverMoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscoverMore
     */
    select?: DiscoverMoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscoverMore
     */
    omit?: DiscoverMoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscoverMoreInclude<ExtArgs> | null
    /**
     * Filter, which DiscoverMores to fetch.
     */
    where?: DiscoverMoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscoverMores to fetch.
     */
    orderBy?: DiscoverMoreOrderByWithRelationInput | DiscoverMoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DiscoverMores.
     */
    cursor?: DiscoverMoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscoverMores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscoverMores.
     */
    skip?: number
    distinct?: DiscoverMoreScalarFieldEnum | DiscoverMoreScalarFieldEnum[]
  }

  /**
   * DiscoverMore create
   */
  export type DiscoverMoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscoverMore
     */
    select?: DiscoverMoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscoverMore
     */
    omit?: DiscoverMoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscoverMoreInclude<ExtArgs> | null
    /**
     * The data needed to create a DiscoverMore.
     */
    data: XOR<DiscoverMoreCreateInput, DiscoverMoreUncheckedCreateInput>
  }

  /**
   * DiscoverMore createMany
   */
  export type DiscoverMoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DiscoverMores.
     */
    data: DiscoverMoreCreateManyInput | DiscoverMoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DiscoverMore createManyAndReturn
   */
  export type DiscoverMoreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscoverMore
     */
    select?: DiscoverMoreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DiscoverMore
     */
    omit?: DiscoverMoreOmit<ExtArgs> | null
    /**
     * The data used to create many DiscoverMores.
     */
    data: DiscoverMoreCreateManyInput | DiscoverMoreCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscoverMoreIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DiscoverMore update
   */
  export type DiscoverMoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscoverMore
     */
    select?: DiscoverMoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscoverMore
     */
    omit?: DiscoverMoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscoverMoreInclude<ExtArgs> | null
    /**
     * The data needed to update a DiscoverMore.
     */
    data: XOR<DiscoverMoreUpdateInput, DiscoverMoreUncheckedUpdateInput>
    /**
     * Choose, which DiscoverMore to update.
     */
    where: DiscoverMoreWhereUniqueInput
  }

  /**
   * DiscoverMore updateMany
   */
  export type DiscoverMoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DiscoverMores.
     */
    data: XOR<DiscoverMoreUpdateManyMutationInput, DiscoverMoreUncheckedUpdateManyInput>
    /**
     * Filter which DiscoverMores to update
     */
    where?: DiscoverMoreWhereInput
    /**
     * Limit how many DiscoverMores to update.
     */
    limit?: number
  }

  /**
   * DiscoverMore updateManyAndReturn
   */
  export type DiscoverMoreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscoverMore
     */
    select?: DiscoverMoreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DiscoverMore
     */
    omit?: DiscoverMoreOmit<ExtArgs> | null
    /**
     * The data used to update DiscoverMores.
     */
    data: XOR<DiscoverMoreUpdateManyMutationInput, DiscoverMoreUncheckedUpdateManyInput>
    /**
     * Filter which DiscoverMores to update
     */
    where?: DiscoverMoreWhereInput
    /**
     * Limit how many DiscoverMores to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscoverMoreIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DiscoverMore upsert
   */
  export type DiscoverMoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscoverMore
     */
    select?: DiscoverMoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscoverMore
     */
    omit?: DiscoverMoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscoverMoreInclude<ExtArgs> | null
    /**
     * The filter to search for the DiscoverMore to update in case it exists.
     */
    where: DiscoverMoreWhereUniqueInput
    /**
     * In case the DiscoverMore found by the `where` argument doesn't exist, create a new DiscoverMore with this data.
     */
    create: XOR<DiscoverMoreCreateInput, DiscoverMoreUncheckedCreateInput>
    /**
     * In case the DiscoverMore was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiscoverMoreUpdateInput, DiscoverMoreUncheckedUpdateInput>
  }

  /**
   * DiscoverMore delete
   */
  export type DiscoverMoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscoverMore
     */
    select?: DiscoverMoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscoverMore
     */
    omit?: DiscoverMoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscoverMoreInclude<ExtArgs> | null
    /**
     * Filter which DiscoverMore to delete.
     */
    where: DiscoverMoreWhereUniqueInput
  }

  /**
   * DiscoverMore deleteMany
   */
  export type DiscoverMoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiscoverMores to delete
     */
    where?: DiscoverMoreWhereInput
    /**
     * Limit how many DiscoverMores to delete.
     */
    limit?: number
  }

  /**
   * DiscoverMore without action
   */
  export type DiscoverMoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscoverMore
     */
    select?: DiscoverMoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscoverMore
     */
    omit?: DiscoverMoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscoverMoreInclude<ExtArgs> | null
  }


  /**
   * Model Section
   */

  export type AggregateSection = {
    _count: SectionCountAggregateOutputType | null
    _avg: SectionAvgAggregateOutputType | null
    _sum: SectionSumAggregateOutputType | null
    _min: SectionMinAggregateOutputType | null
    _max: SectionMaxAggregateOutputType | null
  }

  export type SectionAvgAggregateOutputType = {
    section_id: number | null
    status: number | null
    created_by: number | null
    updated_by: number | null
  }

  export type SectionSumAggregateOutputType = {
    section_id: number | null
    status: number | null
    created_by: number | null
    updated_by: number | null
  }

  export type SectionMinAggregateOutputType = {
    section_id: number | null
    display_name: string | null
    img_url: string | null
    url: string | null
    status: number | null
    createdAt: Date | null
    updatedAt: Date | null
    created_by: number | null
    updated_by: number | null
  }

  export type SectionMaxAggregateOutputType = {
    section_id: number | null
    display_name: string | null
    img_url: string | null
    url: string | null
    status: number | null
    createdAt: Date | null
    updatedAt: Date | null
    created_by: number | null
    updated_by: number | null
  }

  export type SectionCountAggregateOutputType = {
    section_id: number
    display_name: number
    img_url: number
    url: number
    status: number
    createdAt: number
    updatedAt: number
    created_by: number
    updated_by: number
    _all: number
  }


  export type SectionAvgAggregateInputType = {
    section_id?: true
    status?: true
    created_by?: true
    updated_by?: true
  }

  export type SectionSumAggregateInputType = {
    section_id?: true
    status?: true
    created_by?: true
    updated_by?: true
  }

  export type SectionMinAggregateInputType = {
    section_id?: true
    display_name?: true
    img_url?: true
    url?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    created_by?: true
    updated_by?: true
  }

  export type SectionMaxAggregateInputType = {
    section_id?: true
    display_name?: true
    img_url?: true
    url?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    created_by?: true
    updated_by?: true
  }

  export type SectionCountAggregateInputType = {
    section_id?: true
    display_name?: true
    img_url?: true
    url?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    created_by?: true
    updated_by?: true
    _all?: true
  }

  export type SectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Section to aggregate.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sections
    **/
    _count?: true | SectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SectionMaxAggregateInputType
  }

  export type GetSectionAggregateType<T extends SectionAggregateArgs> = {
        [P in keyof T & keyof AggregateSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSection[P]>
      : GetScalarType<T[P], AggregateSection[P]>
  }




  export type SectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectionWhereInput
    orderBy?: SectionOrderByWithAggregationInput | SectionOrderByWithAggregationInput[]
    by: SectionScalarFieldEnum[] | SectionScalarFieldEnum
    having?: SectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SectionCountAggregateInputType | true
    _avg?: SectionAvgAggregateInputType
    _sum?: SectionSumAggregateInputType
    _min?: SectionMinAggregateInputType
    _max?: SectionMaxAggregateInputType
  }

  export type SectionGroupByOutputType = {
    section_id: number
    display_name: string
    img_url: string
    url: string
    status: number
    createdAt: Date
    updatedAt: Date
    created_by: number | null
    updated_by: number | null
    _count: SectionCountAggregateOutputType | null
    _avg: SectionAvgAggregateOutputType | null
    _sum: SectionSumAggregateOutputType | null
    _min: SectionMinAggregateOutputType | null
    _max: SectionMaxAggregateOutputType | null
  }

  type GetSectionGroupByPayload<T extends SectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SectionGroupByOutputType[P]>
            : GetScalarType<T[P], SectionGroupByOutputType[P]>
        }
      >
    >


  export type SectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    section_id?: boolean
    display_name?: boolean
    img_url?: boolean
    url?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    created_by?: boolean
    updated_by?: boolean
  }, ExtArgs["result"]["section"]>

  export type SectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    section_id?: boolean
    display_name?: boolean
    img_url?: boolean
    url?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    created_by?: boolean
    updated_by?: boolean
  }, ExtArgs["result"]["section"]>

  export type SectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    section_id?: boolean
    display_name?: boolean
    img_url?: boolean
    url?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    created_by?: boolean
    updated_by?: boolean
  }, ExtArgs["result"]["section"]>

  export type SectionSelectScalar = {
    section_id?: boolean
    display_name?: boolean
    img_url?: boolean
    url?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    created_by?: boolean
    updated_by?: boolean
  }

  export type SectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"section_id" | "display_name" | "img_url" | "url" | "status" | "createdAt" | "updatedAt" | "created_by" | "updated_by", ExtArgs["result"]["section"]>

  export type $SectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Section"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      section_id: number
      display_name: string
      img_url: string
      url: string
      status: number
      createdAt: Date
      updatedAt: Date
      created_by: number | null
      updated_by: number | null
    }, ExtArgs["result"]["section"]>
    composites: {}
  }

  type SectionGetPayload<S extends boolean | null | undefined | SectionDefaultArgs> = $Result.GetResult<Prisma.$SectionPayload, S>

  type SectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SectionCountAggregateInputType | true
    }

  export interface SectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Section'], meta: { name: 'Section' } }
    /**
     * Find zero or one Section that matches the filter.
     * @param {SectionFindUniqueArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SectionFindUniqueArgs>(args: SelectSubset<T, SectionFindUniqueArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Section that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SectionFindUniqueOrThrowArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SectionFindUniqueOrThrowArgs>(args: SelectSubset<T, SectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Section that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindFirstArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SectionFindFirstArgs>(args?: SelectSubset<T, SectionFindFirstArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Section that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindFirstOrThrowArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SectionFindFirstOrThrowArgs>(args?: SelectSubset<T, SectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sections
     * const sections = await prisma.section.findMany()
     * 
     * // Get first 10 Sections
     * const sections = await prisma.section.findMany({ take: 10 })
     * 
     * // Only select the `section_id`
     * const sectionWithSection_idOnly = await prisma.section.findMany({ select: { section_id: true } })
     * 
     */
    findMany<T extends SectionFindManyArgs>(args?: SelectSubset<T, SectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Section.
     * @param {SectionCreateArgs} args - Arguments to create a Section.
     * @example
     * // Create one Section
     * const Section = await prisma.section.create({
     *   data: {
     *     // ... data to create a Section
     *   }
     * })
     * 
     */
    create<T extends SectionCreateArgs>(args: SelectSubset<T, SectionCreateArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sections.
     * @param {SectionCreateManyArgs} args - Arguments to create many Sections.
     * @example
     * // Create many Sections
     * const section = await prisma.section.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SectionCreateManyArgs>(args?: SelectSubset<T, SectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sections and returns the data saved in the database.
     * @param {SectionCreateManyAndReturnArgs} args - Arguments to create many Sections.
     * @example
     * // Create many Sections
     * const section = await prisma.section.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sections and only return the `section_id`
     * const sectionWithSection_idOnly = await prisma.section.createManyAndReturn({
     *   select: { section_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SectionCreateManyAndReturnArgs>(args?: SelectSubset<T, SectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Section.
     * @param {SectionDeleteArgs} args - Arguments to delete one Section.
     * @example
     * // Delete one Section
     * const Section = await prisma.section.delete({
     *   where: {
     *     // ... filter to delete one Section
     *   }
     * })
     * 
     */
    delete<T extends SectionDeleteArgs>(args: SelectSubset<T, SectionDeleteArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Section.
     * @param {SectionUpdateArgs} args - Arguments to update one Section.
     * @example
     * // Update one Section
     * const section = await prisma.section.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SectionUpdateArgs>(args: SelectSubset<T, SectionUpdateArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sections.
     * @param {SectionDeleteManyArgs} args - Arguments to filter Sections to delete.
     * @example
     * // Delete a few Sections
     * const { count } = await prisma.section.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SectionDeleteManyArgs>(args?: SelectSubset<T, SectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sections
     * const section = await prisma.section.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SectionUpdateManyArgs>(args: SelectSubset<T, SectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sections and returns the data updated in the database.
     * @param {SectionUpdateManyAndReturnArgs} args - Arguments to update many Sections.
     * @example
     * // Update many Sections
     * const section = await prisma.section.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sections and only return the `section_id`
     * const sectionWithSection_idOnly = await prisma.section.updateManyAndReturn({
     *   select: { section_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SectionUpdateManyAndReturnArgs>(args: SelectSubset<T, SectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Section.
     * @param {SectionUpsertArgs} args - Arguments to update or create a Section.
     * @example
     * // Update or create a Section
     * const section = await prisma.section.upsert({
     *   create: {
     *     // ... data to create a Section
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Section we want to update
     *   }
     * })
     */
    upsert<T extends SectionUpsertArgs>(args: SelectSubset<T, SectionUpsertArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionCountArgs} args - Arguments to filter Sections to count.
     * @example
     * // Count the number of Sections
     * const count = await prisma.section.count({
     *   where: {
     *     // ... the filter for the Sections we want to count
     *   }
     * })
    **/
    count<T extends SectionCountArgs>(
      args?: Subset<T, SectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Section.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SectionAggregateArgs>(args: Subset<T, SectionAggregateArgs>): Prisma.PrismaPromise<GetSectionAggregateType<T>>

    /**
     * Group by Section.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SectionGroupByArgs['orderBy'] }
        : { orderBy?: SectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Section model
   */
  readonly fields: SectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Section.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Section model
   */
  interface SectionFieldRefs {
    readonly section_id: FieldRef<"Section", 'Int'>
    readonly display_name: FieldRef<"Section", 'String'>
    readonly img_url: FieldRef<"Section", 'String'>
    readonly url: FieldRef<"Section", 'String'>
    readonly status: FieldRef<"Section", 'Int'>
    readonly createdAt: FieldRef<"Section", 'DateTime'>
    readonly updatedAt: FieldRef<"Section", 'DateTime'>
    readonly created_by: FieldRef<"Section", 'Int'>
    readonly updated_by: FieldRef<"Section", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Section findUnique
   */
  export type SectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section findUniqueOrThrow
   */
  export type SectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section findFirst
   */
  export type SectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sections.
     */
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Section findFirstOrThrow
   */
  export type SectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sections.
     */
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Section findMany
   */
  export type SectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Filter, which Sections to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Section create
   */
  export type SectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * The data needed to create a Section.
     */
    data: XOR<SectionCreateInput, SectionUncheckedCreateInput>
  }

  /**
   * Section createMany
   */
  export type SectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sections.
     */
    data: SectionCreateManyInput | SectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Section createManyAndReturn
   */
  export type SectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * The data used to create many Sections.
     */
    data: SectionCreateManyInput | SectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Section update
   */
  export type SectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * The data needed to update a Section.
     */
    data: XOR<SectionUpdateInput, SectionUncheckedUpdateInput>
    /**
     * Choose, which Section to update.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section updateMany
   */
  export type SectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sections.
     */
    data: XOR<SectionUpdateManyMutationInput, SectionUncheckedUpdateManyInput>
    /**
     * Filter which Sections to update
     */
    where?: SectionWhereInput
    /**
     * Limit how many Sections to update.
     */
    limit?: number
  }

  /**
   * Section updateManyAndReturn
   */
  export type SectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * The data used to update Sections.
     */
    data: XOR<SectionUpdateManyMutationInput, SectionUncheckedUpdateManyInput>
    /**
     * Filter which Sections to update
     */
    where?: SectionWhereInput
    /**
     * Limit how many Sections to update.
     */
    limit?: number
  }

  /**
   * Section upsert
   */
  export type SectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * The filter to search for the Section to update in case it exists.
     */
    where: SectionWhereUniqueInput
    /**
     * In case the Section found by the `where` argument doesn't exist, create a new Section with this data.
     */
    create: XOR<SectionCreateInput, SectionUncheckedCreateInput>
    /**
     * In case the Section was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SectionUpdateInput, SectionUncheckedUpdateInput>
  }

  /**
   * Section delete
   */
  export type SectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Filter which Section to delete.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section deleteMany
   */
  export type SectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sections to delete
     */
    where?: SectionWhereInput
    /**
     * Limit how many Sections to delete.
     */
    limit?: number
  }

  /**
   * Section without action
   */
  export type SectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    role: 'role',
    password: 'password',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    created_by: 'created_by',
    updated_by: 'updated_by'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const NaukariScalarFieldEnum: {
    naukari_id: 'naukari_id',
    title: 'title',
    isResult: 'isResult',
    isAdmitCard: 'isAdmitCard',
    postDate: 'postDate',
    description: 'description',
    slug: 'slug',
    seo_title: 'seo_title',
    seo_keywords: 'seo_keywords',
    seo_published_date: 'seo_published_date',
    seo_description: 'seo_description',
    seo_section: 'seo_section',
    seo_sub_section: 'seo_sub_section',
    seo_category: 'seo_category',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    created_by: 'created_by',
    updated_by: 'updated_by'
  };

  export type NaukariScalarFieldEnum = (typeof NaukariScalarFieldEnum)[keyof typeof NaukariScalarFieldEnum]


  export const ImportantQuesAnsScalarFieldEnum: {
    id: 'id',
    question: 'question',
    answer: 'answer',
    naukari_id: 'naukari_id'
  };

  export type ImportantQuesAnsScalarFieldEnum = (typeof ImportantQuesAnsScalarFieldEnum)[keyof typeof ImportantQuesAnsScalarFieldEnum]


  export const UsefulLinkSectionScalarFieldEnum: {
    id: 'id',
    text: 'text',
    naukari_id: 'naukari_id'
  };

  export type UsefulLinkSectionScalarFieldEnum = (typeof UsefulLinkSectionScalarFieldEnum)[keyof typeof UsefulLinkSectionScalarFieldEnum]


  export const UsefulLinkScalarFieldEnum: {
    id: 'id',
    display_name: 'display_name',
    url: 'url',
    section_id: 'section_id'
  };

  export type UsefulLinkScalarFieldEnum = (typeof UsefulLinkScalarFieldEnum)[keyof typeof UsefulLinkScalarFieldEnum]


  export const DiscoverMoreScalarFieldEnum: {
    id: 'id',
    display_name: 'display_name',
    url: 'url',
    naukari_id: 'naukari_id'
  };

  export type DiscoverMoreScalarFieldEnum = (typeof DiscoverMoreScalarFieldEnum)[keyof typeof DiscoverMoreScalarFieldEnum]


  export const SectionScalarFieldEnum: {
    section_id: 'section_id',
    display_name: 'display_name',
    img_url: 'img_url',
    url: 'url',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    created_by: 'created_by',
    updated_by: 'updated_by'
  };

  export type SectionScalarFieldEnum = (typeof SectionScalarFieldEnum)[keyof typeof SectionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    status?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    created_by?: IntNullableFilter<"User"> | number | null
    updated_by?: IntNullableFilter<"User"> | number | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    created_by?: SortOrderInput | SortOrder
    updated_by?: SortOrderInput | SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    status?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    created_by?: IntNullableFilter<"User"> | number | null
    updated_by?: IntNullableFilter<"User"> | number | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    created_by?: SortOrderInput | SortOrder
    updated_by?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    status?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    created_by?: IntNullableWithAggregatesFilter<"User"> | number | null
    updated_by?: IntNullableWithAggregatesFilter<"User"> | number | null
  }

  export type NaukariWhereInput = {
    AND?: NaukariWhereInput | NaukariWhereInput[]
    OR?: NaukariWhereInput[]
    NOT?: NaukariWhereInput | NaukariWhereInput[]
    naukari_id?: IntFilter<"Naukari"> | number
    title?: StringFilter<"Naukari"> | string
    isResult?: BoolFilter<"Naukari"> | boolean
    isAdmitCard?: BoolFilter<"Naukari"> | boolean
    postDate?: DateTimeFilter<"Naukari"> | Date | string
    description?: StringFilter<"Naukari"> | string
    slug?: StringFilter<"Naukari"> | string
    seo_title?: StringFilter<"Naukari"> | string
    seo_keywords?: StringFilter<"Naukari"> | string
    seo_published_date?: DateTimeFilter<"Naukari"> | Date | string
    seo_description?: StringFilter<"Naukari"> | string
    seo_section?: StringFilter<"Naukari"> | string
    seo_sub_section?: StringNullableFilter<"Naukari"> | string | null
    seo_category?: StringFilter<"Naukari"> | string
    status?: IntFilter<"Naukari"> | number
    createdAt?: DateTimeFilter<"Naukari"> | Date | string
    updatedAt?: DateTimeFilter<"Naukari"> | Date | string
    created_by?: IntNullableFilter<"Naukari"> | number | null
    updated_by?: IntNullableFilter<"Naukari"> | number | null
    importantQuesAns?: ImportantQuesAnsListRelationFilter
    usefulLinks?: UsefulLinkSectionListRelationFilter
    discoverMoreLinks?: DiscoverMoreListRelationFilter
  }

  export type NaukariOrderByWithRelationInput = {
    naukari_id?: SortOrder
    title?: SortOrder
    isResult?: SortOrder
    isAdmitCard?: SortOrder
    postDate?: SortOrder
    description?: SortOrder
    slug?: SortOrder
    seo_title?: SortOrder
    seo_keywords?: SortOrder
    seo_published_date?: SortOrder
    seo_description?: SortOrder
    seo_section?: SortOrder
    seo_sub_section?: SortOrderInput | SortOrder
    seo_category?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    created_by?: SortOrderInput | SortOrder
    updated_by?: SortOrderInput | SortOrder
    importantQuesAns?: ImportantQuesAnsOrderByRelationAggregateInput
    usefulLinks?: UsefulLinkSectionOrderByRelationAggregateInput
    discoverMoreLinks?: DiscoverMoreOrderByRelationAggregateInput
  }

  export type NaukariWhereUniqueInput = Prisma.AtLeast<{
    naukari_id?: number
    slug?: string
    AND?: NaukariWhereInput | NaukariWhereInput[]
    OR?: NaukariWhereInput[]
    NOT?: NaukariWhereInput | NaukariWhereInput[]
    title?: StringFilter<"Naukari"> | string
    isResult?: BoolFilter<"Naukari"> | boolean
    isAdmitCard?: BoolFilter<"Naukari"> | boolean
    postDate?: DateTimeFilter<"Naukari"> | Date | string
    description?: StringFilter<"Naukari"> | string
    seo_title?: StringFilter<"Naukari"> | string
    seo_keywords?: StringFilter<"Naukari"> | string
    seo_published_date?: DateTimeFilter<"Naukari"> | Date | string
    seo_description?: StringFilter<"Naukari"> | string
    seo_section?: StringFilter<"Naukari"> | string
    seo_sub_section?: StringNullableFilter<"Naukari"> | string | null
    seo_category?: StringFilter<"Naukari"> | string
    status?: IntFilter<"Naukari"> | number
    createdAt?: DateTimeFilter<"Naukari"> | Date | string
    updatedAt?: DateTimeFilter<"Naukari"> | Date | string
    created_by?: IntNullableFilter<"Naukari"> | number | null
    updated_by?: IntNullableFilter<"Naukari"> | number | null
    importantQuesAns?: ImportantQuesAnsListRelationFilter
    usefulLinks?: UsefulLinkSectionListRelationFilter
    discoverMoreLinks?: DiscoverMoreListRelationFilter
  }, "naukari_id" | "slug">

  export type NaukariOrderByWithAggregationInput = {
    naukari_id?: SortOrder
    title?: SortOrder
    isResult?: SortOrder
    isAdmitCard?: SortOrder
    postDate?: SortOrder
    description?: SortOrder
    slug?: SortOrder
    seo_title?: SortOrder
    seo_keywords?: SortOrder
    seo_published_date?: SortOrder
    seo_description?: SortOrder
    seo_section?: SortOrder
    seo_sub_section?: SortOrderInput | SortOrder
    seo_category?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    created_by?: SortOrderInput | SortOrder
    updated_by?: SortOrderInput | SortOrder
    _count?: NaukariCountOrderByAggregateInput
    _avg?: NaukariAvgOrderByAggregateInput
    _max?: NaukariMaxOrderByAggregateInput
    _min?: NaukariMinOrderByAggregateInput
    _sum?: NaukariSumOrderByAggregateInput
  }

  export type NaukariScalarWhereWithAggregatesInput = {
    AND?: NaukariScalarWhereWithAggregatesInput | NaukariScalarWhereWithAggregatesInput[]
    OR?: NaukariScalarWhereWithAggregatesInput[]
    NOT?: NaukariScalarWhereWithAggregatesInput | NaukariScalarWhereWithAggregatesInput[]
    naukari_id?: IntWithAggregatesFilter<"Naukari"> | number
    title?: StringWithAggregatesFilter<"Naukari"> | string
    isResult?: BoolWithAggregatesFilter<"Naukari"> | boolean
    isAdmitCard?: BoolWithAggregatesFilter<"Naukari"> | boolean
    postDate?: DateTimeWithAggregatesFilter<"Naukari"> | Date | string
    description?: StringWithAggregatesFilter<"Naukari"> | string
    slug?: StringWithAggregatesFilter<"Naukari"> | string
    seo_title?: StringWithAggregatesFilter<"Naukari"> | string
    seo_keywords?: StringWithAggregatesFilter<"Naukari"> | string
    seo_published_date?: DateTimeWithAggregatesFilter<"Naukari"> | Date | string
    seo_description?: StringWithAggregatesFilter<"Naukari"> | string
    seo_section?: StringWithAggregatesFilter<"Naukari"> | string
    seo_sub_section?: StringNullableWithAggregatesFilter<"Naukari"> | string | null
    seo_category?: StringWithAggregatesFilter<"Naukari"> | string
    status?: IntWithAggregatesFilter<"Naukari"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Naukari"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Naukari"> | Date | string
    created_by?: IntNullableWithAggregatesFilter<"Naukari"> | number | null
    updated_by?: IntNullableWithAggregatesFilter<"Naukari"> | number | null
  }

  export type ImportantQuesAnsWhereInput = {
    AND?: ImportantQuesAnsWhereInput | ImportantQuesAnsWhereInput[]
    OR?: ImportantQuesAnsWhereInput[]
    NOT?: ImportantQuesAnsWhereInput | ImportantQuesAnsWhereInput[]
    id?: IntFilter<"ImportantQuesAns"> | number
    question?: StringFilter<"ImportantQuesAns"> | string
    answer?: StringFilter<"ImportantQuesAns"> | string
    naukari_id?: IntFilter<"ImportantQuesAns"> | number
    naukari?: XOR<NaukariScalarRelationFilter, NaukariWhereInput>
  }

  export type ImportantQuesAnsOrderByWithRelationInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    naukari_id?: SortOrder
    naukari?: NaukariOrderByWithRelationInput
  }

  export type ImportantQuesAnsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ImportantQuesAnsWhereInput | ImportantQuesAnsWhereInput[]
    OR?: ImportantQuesAnsWhereInput[]
    NOT?: ImportantQuesAnsWhereInput | ImportantQuesAnsWhereInput[]
    question?: StringFilter<"ImportantQuesAns"> | string
    answer?: StringFilter<"ImportantQuesAns"> | string
    naukari_id?: IntFilter<"ImportantQuesAns"> | number
    naukari?: XOR<NaukariScalarRelationFilter, NaukariWhereInput>
  }, "id">

  export type ImportantQuesAnsOrderByWithAggregationInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    naukari_id?: SortOrder
    _count?: ImportantQuesAnsCountOrderByAggregateInput
    _avg?: ImportantQuesAnsAvgOrderByAggregateInput
    _max?: ImportantQuesAnsMaxOrderByAggregateInput
    _min?: ImportantQuesAnsMinOrderByAggregateInput
    _sum?: ImportantQuesAnsSumOrderByAggregateInput
  }

  export type ImportantQuesAnsScalarWhereWithAggregatesInput = {
    AND?: ImportantQuesAnsScalarWhereWithAggregatesInput | ImportantQuesAnsScalarWhereWithAggregatesInput[]
    OR?: ImportantQuesAnsScalarWhereWithAggregatesInput[]
    NOT?: ImportantQuesAnsScalarWhereWithAggregatesInput | ImportantQuesAnsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ImportantQuesAns"> | number
    question?: StringWithAggregatesFilter<"ImportantQuesAns"> | string
    answer?: StringWithAggregatesFilter<"ImportantQuesAns"> | string
    naukari_id?: IntWithAggregatesFilter<"ImportantQuesAns"> | number
  }

  export type UsefulLinkSectionWhereInput = {
    AND?: UsefulLinkSectionWhereInput | UsefulLinkSectionWhereInput[]
    OR?: UsefulLinkSectionWhereInput[]
    NOT?: UsefulLinkSectionWhereInput | UsefulLinkSectionWhereInput[]
    id?: IntFilter<"UsefulLinkSection"> | number
    text?: StringFilter<"UsefulLinkSection"> | string
    naukari_id?: IntFilter<"UsefulLinkSection"> | number
    naukari?: XOR<NaukariScalarRelationFilter, NaukariWhereInput>
    links?: UsefulLinkListRelationFilter
  }

  export type UsefulLinkSectionOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    naukari_id?: SortOrder
    naukari?: NaukariOrderByWithRelationInput
    links?: UsefulLinkOrderByRelationAggregateInput
  }

  export type UsefulLinkSectionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UsefulLinkSectionWhereInput | UsefulLinkSectionWhereInput[]
    OR?: UsefulLinkSectionWhereInput[]
    NOT?: UsefulLinkSectionWhereInput | UsefulLinkSectionWhereInput[]
    text?: StringFilter<"UsefulLinkSection"> | string
    naukari_id?: IntFilter<"UsefulLinkSection"> | number
    naukari?: XOR<NaukariScalarRelationFilter, NaukariWhereInput>
    links?: UsefulLinkListRelationFilter
  }, "id">

  export type UsefulLinkSectionOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    naukari_id?: SortOrder
    _count?: UsefulLinkSectionCountOrderByAggregateInput
    _avg?: UsefulLinkSectionAvgOrderByAggregateInput
    _max?: UsefulLinkSectionMaxOrderByAggregateInput
    _min?: UsefulLinkSectionMinOrderByAggregateInput
    _sum?: UsefulLinkSectionSumOrderByAggregateInput
  }

  export type UsefulLinkSectionScalarWhereWithAggregatesInput = {
    AND?: UsefulLinkSectionScalarWhereWithAggregatesInput | UsefulLinkSectionScalarWhereWithAggregatesInput[]
    OR?: UsefulLinkSectionScalarWhereWithAggregatesInput[]
    NOT?: UsefulLinkSectionScalarWhereWithAggregatesInput | UsefulLinkSectionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UsefulLinkSection"> | number
    text?: StringWithAggregatesFilter<"UsefulLinkSection"> | string
    naukari_id?: IntWithAggregatesFilter<"UsefulLinkSection"> | number
  }

  export type UsefulLinkWhereInput = {
    AND?: UsefulLinkWhereInput | UsefulLinkWhereInput[]
    OR?: UsefulLinkWhereInput[]
    NOT?: UsefulLinkWhereInput | UsefulLinkWhereInput[]
    id?: IntFilter<"UsefulLink"> | number
    display_name?: StringFilter<"UsefulLink"> | string
    url?: StringFilter<"UsefulLink"> | string
    section_id?: IntFilter<"UsefulLink"> | number
    section?: XOR<UsefulLinkSectionScalarRelationFilter, UsefulLinkSectionWhereInput>
  }

  export type UsefulLinkOrderByWithRelationInput = {
    id?: SortOrder
    display_name?: SortOrder
    url?: SortOrder
    section_id?: SortOrder
    section?: UsefulLinkSectionOrderByWithRelationInput
  }

  export type UsefulLinkWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UsefulLinkWhereInput | UsefulLinkWhereInput[]
    OR?: UsefulLinkWhereInput[]
    NOT?: UsefulLinkWhereInput | UsefulLinkWhereInput[]
    display_name?: StringFilter<"UsefulLink"> | string
    url?: StringFilter<"UsefulLink"> | string
    section_id?: IntFilter<"UsefulLink"> | number
    section?: XOR<UsefulLinkSectionScalarRelationFilter, UsefulLinkSectionWhereInput>
  }, "id">

  export type UsefulLinkOrderByWithAggregationInput = {
    id?: SortOrder
    display_name?: SortOrder
    url?: SortOrder
    section_id?: SortOrder
    _count?: UsefulLinkCountOrderByAggregateInput
    _avg?: UsefulLinkAvgOrderByAggregateInput
    _max?: UsefulLinkMaxOrderByAggregateInput
    _min?: UsefulLinkMinOrderByAggregateInput
    _sum?: UsefulLinkSumOrderByAggregateInput
  }

  export type UsefulLinkScalarWhereWithAggregatesInput = {
    AND?: UsefulLinkScalarWhereWithAggregatesInput | UsefulLinkScalarWhereWithAggregatesInput[]
    OR?: UsefulLinkScalarWhereWithAggregatesInput[]
    NOT?: UsefulLinkScalarWhereWithAggregatesInput | UsefulLinkScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UsefulLink"> | number
    display_name?: StringWithAggregatesFilter<"UsefulLink"> | string
    url?: StringWithAggregatesFilter<"UsefulLink"> | string
    section_id?: IntWithAggregatesFilter<"UsefulLink"> | number
  }

  export type DiscoverMoreWhereInput = {
    AND?: DiscoverMoreWhereInput | DiscoverMoreWhereInput[]
    OR?: DiscoverMoreWhereInput[]
    NOT?: DiscoverMoreWhereInput | DiscoverMoreWhereInput[]
    id?: IntFilter<"DiscoverMore"> | number
    display_name?: StringFilter<"DiscoverMore"> | string
    url?: StringFilter<"DiscoverMore"> | string
    naukari_id?: IntFilter<"DiscoverMore"> | number
    naukari?: XOR<NaukariScalarRelationFilter, NaukariWhereInput>
  }

  export type DiscoverMoreOrderByWithRelationInput = {
    id?: SortOrder
    display_name?: SortOrder
    url?: SortOrder
    naukari_id?: SortOrder
    naukari?: NaukariOrderByWithRelationInput
  }

  export type DiscoverMoreWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DiscoverMoreWhereInput | DiscoverMoreWhereInput[]
    OR?: DiscoverMoreWhereInput[]
    NOT?: DiscoverMoreWhereInput | DiscoverMoreWhereInput[]
    display_name?: StringFilter<"DiscoverMore"> | string
    url?: StringFilter<"DiscoverMore"> | string
    naukari_id?: IntFilter<"DiscoverMore"> | number
    naukari?: XOR<NaukariScalarRelationFilter, NaukariWhereInput>
  }, "id">

  export type DiscoverMoreOrderByWithAggregationInput = {
    id?: SortOrder
    display_name?: SortOrder
    url?: SortOrder
    naukari_id?: SortOrder
    _count?: DiscoverMoreCountOrderByAggregateInput
    _avg?: DiscoverMoreAvgOrderByAggregateInput
    _max?: DiscoverMoreMaxOrderByAggregateInput
    _min?: DiscoverMoreMinOrderByAggregateInput
    _sum?: DiscoverMoreSumOrderByAggregateInput
  }

  export type DiscoverMoreScalarWhereWithAggregatesInput = {
    AND?: DiscoverMoreScalarWhereWithAggregatesInput | DiscoverMoreScalarWhereWithAggregatesInput[]
    OR?: DiscoverMoreScalarWhereWithAggregatesInput[]
    NOT?: DiscoverMoreScalarWhereWithAggregatesInput | DiscoverMoreScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DiscoverMore"> | number
    display_name?: StringWithAggregatesFilter<"DiscoverMore"> | string
    url?: StringWithAggregatesFilter<"DiscoverMore"> | string
    naukari_id?: IntWithAggregatesFilter<"DiscoverMore"> | number
  }

  export type SectionWhereInput = {
    AND?: SectionWhereInput | SectionWhereInput[]
    OR?: SectionWhereInput[]
    NOT?: SectionWhereInput | SectionWhereInput[]
    section_id?: IntFilter<"Section"> | number
    display_name?: StringFilter<"Section"> | string
    img_url?: StringFilter<"Section"> | string
    url?: StringFilter<"Section"> | string
    status?: IntFilter<"Section"> | number
    createdAt?: DateTimeFilter<"Section"> | Date | string
    updatedAt?: DateTimeFilter<"Section"> | Date | string
    created_by?: IntNullableFilter<"Section"> | number | null
    updated_by?: IntNullableFilter<"Section"> | number | null
  }

  export type SectionOrderByWithRelationInput = {
    section_id?: SortOrder
    display_name?: SortOrder
    img_url?: SortOrder
    url?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    created_by?: SortOrderInput | SortOrder
    updated_by?: SortOrderInput | SortOrder
  }

  export type SectionWhereUniqueInput = Prisma.AtLeast<{
    section_id?: number
    AND?: SectionWhereInput | SectionWhereInput[]
    OR?: SectionWhereInput[]
    NOT?: SectionWhereInput | SectionWhereInput[]
    display_name?: StringFilter<"Section"> | string
    img_url?: StringFilter<"Section"> | string
    url?: StringFilter<"Section"> | string
    status?: IntFilter<"Section"> | number
    createdAt?: DateTimeFilter<"Section"> | Date | string
    updatedAt?: DateTimeFilter<"Section"> | Date | string
    created_by?: IntNullableFilter<"Section"> | number | null
    updated_by?: IntNullableFilter<"Section"> | number | null
  }, "section_id">

  export type SectionOrderByWithAggregationInput = {
    section_id?: SortOrder
    display_name?: SortOrder
    img_url?: SortOrder
    url?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    created_by?: SortOrderInput | SortOrder
    updated_by?: SortOrderInput | SortOrder
    _count?: SectionCountOrderByAggregateInput
    _avg?: SectionAvgOrderByAggregateInput
    _max?: SectionMaxOrderByAggregateInput
    _min?: SectionMinOrderByAggregateInput
    _sum?: SectionSumOrderByAggregateInput
  }

  export type SectionScalarWhereWithAggregatesInput = {
    AND?: SectionScalarWhereWithAggregatesInput | SectionScalarWhereWithAggregatesInput[]
    OR?: SectionScalarWhereWithAggregatesInput[]
    NOT?: SectionScalarWhereWithAggregatesInput | SectionScalarWhereWithAggregatesInput[]
    section_id?: IntWithAggregatesFilter<"Section"> | number
    display_name?: StringWithAggregatesFilter<"Section"> | string
    img_url?: StringWithAggregatesFilter<"Section"> | string
    url?: StringWithAggregatesFilter<"Section"> | string
    status?: IntWithAggregatesFilter<"Section"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Section"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Section"> | Date | string
    created_by?: IntNullableWithAggregatesFilter<"Section"> | number | null
    updated_by?: IntNullableWithAggregatesFilter<"Section"> | number | null
  }

  export type UserCreateInput = {
    name: string
    email: string
    role: string
    password: string
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    created_by?: number | null
    updated_by?: number | null
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    role: string
    password: string
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    created_by?: number | null
    updated_by?: number | null
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    role: string
    password: string
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    created_by?: number | null
    updated_by?: number | null
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type NaukariCreateInput = {
    title: string
    isResult?: boolean
    isAdmitCard?: boolean
    postDate: Date | string
    description: string
    slug: string
    seo_title: string
    seo_keywords: string
    seo_published_date: Date | string
    seo_description: string
    seo_section: string
    seo_sub_section?: string | null
    seo_category: string
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    created_by?: number | null
    updated_by?: number | null
    importantQuesAns?: ImportantQuesAnsCreateNestedManyWithoutNaukariInput
    usefulLinks?: UsefulLinkSectionCreateNestedManyWithoutNaukariInput
    discoverMoreLinks?: DiscoverMoreCreateNestedManyWithoutNaukariInput
  }

  export type NaukariUncheckedCreateInput = {
    naukari_id?: number
    title: string
    isResult?: boolean
    isAdmitCard?: boolean
    postDate: Date | string
    description: string
    slug: string
    seo_title: string
    seo_keywords: string
    seo_published_date: Date | string
    seo_description: string
    seo_section: string
    seo_sub_section?: string | null
    seo_category: string
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    created_by?: number | null
    updated_by?: number | null
    importantQuesAns?: ImportantQuesAnsUncheckedCreateNestedManyWithoutNaukariInput
    usefulLinks?: UsefulLinkSectionUncheckedCreateNestedManyWithoutNaukariInput
    discoverMoreLinks?: DiscoverMoreUncheckedCreateNestedManyWithoutNaukariInput
  }

  export type NaukariUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    isResult?: BoolFieldUpdateOperationsInput | boolean
    isAdmitCard?: BoolFieldUpdateOperationsInput | boolean
    postDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    seo_title?: StringFieldUpdateOperationsInput | string
    seo_keywords?: StringFieldUpdateOperationsInput | string
    seo_published_date?: DateTimeFieldUpdateOperationsInput | Date | string
    seo_description?: StringFieldUpdateOperationsInput | string
    seo_section?: StringFieldUpdateOperationsInput | string
    seo_sub_section?: NullableStringFieldUpdateOperationsInput | string | null
    seo_category?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    importantQuesAns?: ImportantQuesAnsUpdateManyWithoutNaukariNestedInput
    usefulLinks?: UsefulLinkSectionUpdateManyWithoutNaukariNestedInput
    discoverMoreLinks?: DiscoverMoreUpdateManyWithoutNaukariNestedInput
  }

  export type NaukariUncheckedUpdateInput = {
    naukari_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    isResult?: BoolFieldUpdateOperationsInput | boolean
    isAdmitCard?: BoolFieldUpdateOperationsInput | boolean
    postDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    seo_title?: StringFieldUpdateOperationsInput | string
    seo_keywords?: StringFieldUpdateOperationsInput | string
    seo_published_date?: DateTimeFieldUpdateOperationsInput | Date | string
    seo_description?: StringFieldUpdateOperationsInput | string
    seo_section?: StringFieldUpdateOperationsInput | string
    seo_sub_section?: NullableStringFieldUpdateOperationsInput | string | null
    seo_category?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    importantQuesAns?: ImportantQuesAnsUncheckedUpdateManyWithoutNaukariNestedInput
    usefulLinks?: UsefulLinkSectionUncheckedUpdateManyWithoutNaukariNestedInput
    discoverMoreLinks?: DiscoverMoreUncheckedUpdateManyWithoutNaukariNestedInput
  }

  export type NaukariCreateManyInput = {
    naukari_id?: number
    title: string
    isResult?: boolean
    isAdmitCard?: boolean
    postDate: Date | string
    description: string
    slug: string
    seo_title: string
    seo_keywords: string
    seo_published_date: Date | string
    seo_description: string
    seo_section: string
    seo_sub_section?: string | null
    seo_category: string
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    created_by?: number | null
    updated_by?: number | null
  }

  export type NaukariUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    isResult?: BoolFieldUpdateOperationsInput | boolean
    isAdmitCard?: BoolFieldUpdateOperationsInput | boolean
    postDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    seo_title?: StringFieldUpdateOperationsInput | string
    seo_keywords?: StringFieldUpdateOperationsInput | string
    seo_published_date?: DateTimeFieldUpdateOperationsInput | Date | string
    seo_description?: StringFieldUpdateOperationsInput | string
    seo_section?: StringFieldUpdateOperationsInput | string
    seo_sub_section?: NullableStringFieldUpdateOperationsInput | string | null
    seo_category?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type NaukariUncheckedUpdateManyInput = {
    naukari_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    isResult?: BoolFieldUpdateOperationsInput | boolean
    isAdmitCard?: BoolFieldUpdateOperationsInput | boolean
    postDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    seo_title?: StringFieldUpdateOperationsInput | string
    seo_keywords?: StringFieldUpdateOperationsInput | string
    seo_published_date?: DateTimeFieldUpdateOperationsInput | Date | string
    seo_description?: StringFieldUpdateOperationsInput | string
    seo_section?: StringFieldUpdateOperationsInput | string
    seo_sub_section?: NullableStringFieldUpdateOperationsInput | string | null
    seo_category?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ImportantQuesAnsCreateInput = {
    question: string
    answer: string
    naukari: NaukariCreateNestedOneWithoutImportantQuesAnsInput
  }

  export type ImportantQuesAnsUncheckedCreateInput = {
    id?: number
    question: string
    answer: string
    naukari_id: number
  }

  export type ImportantQuesAnsUpdateInput = {
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    naukari?: NaukariUpdateOneRequiredWithoutImportantQuesAnsNestedInput
  }

  export type ImportantQuesAnsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    naukari_id?: IntFieldUpdateOperationsInput | number
  }

  export type ImportantQuesAnsCreateManyInput = {
    id?: number
    question: string
    answer: string
    naukari_id: number
  }

  export type ImportantQuesAnsUpdateManyMutationInput = {
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
  }

  export type ImportantQuesAnsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    naukari_id?: IntFieldUpdateOperationsInput | number
  }

  export type UsefulLinkSectionCreateInput = {
    text: string
    naukari: NaukariCreateNestedOneWithoutUsefulLinksInput
    links?: UsefulLinkCreateNestedManyWithoutSectionInput
  }

  export type UsefulLinkSectionUncheckedCreateInput = {
    id?: number
    text: string
    naukari_id: number
    links?: UsefulLinkUncheckedCreateNestedManyWithoutSectionInput
  }

  export type UsefulLinkSectionUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    naukari?: NaukariUpdateOneRequiredWithoutUsefulLinksNestedInput
    links?: UsefulLinkUpdateManyWithoutSectionNestedInput
  }

  export type UsefulLinkSectionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    naukari_id?: IntFieldUpdateOperationsInput | number
    links?: UsefulLinkUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type UsefulLinkSectionCreateManyInput = {
    id?: number
    text: string
    naukari_id: number
  }

  export type UsefulLinkSectionUpdateManyMutationInput = {
    text?: StringFieldUpdateOperationsInput | string
  }

  export type UsefulLinkSectionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    naukari_id?: IntFieldUpdateOperationsInput | number
  }

  export type UsefulLinkCreateInput = {
    display_name: string
    url: string
    section: UsefulLinkSectionCreateNestedOneWithoutLinksInput
  }

  export type UsefulLinkUncheckedCreateInput = {
    id?: number
    display_name: string
    url: string
    section_id: number
  }

  export type UsefulLinkUpdateInput = {
    display_name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    section?: UsefulLinkSectionUpdateOneRequiredWithoutLinksNestedInput
  }

  export type UsefulLinkUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    display_name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    section_id?: IntFieldUpdateOperationsInput | number
  }

  export type UsefulLinkCreateManyInput = {
    id?: number
    display_name: string
    url: string
    section_id: number
  }

  export type UsefulLinkUpdateManyMutationInput = {
    display_name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type UsefulLinkUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    display_name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    section_id?: IntFieldUpdateOperationsInput | number
  }

  export type DiscoverMoreCreateInput = {
    display_name: string
    url: string
    naukari: NaukariCreateNestedOneWithoutDiscoverMoreLinksInput
  }

  export type DiscoverMoreUncheckedCreateInput = {
    id?: number
    display_name: string
    url: string
    naukari_id: number
  }

  export type DiscoverMoreUpdateInput = {
    display_name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    naukari?: NaukariUpdateOneRequiredWithoutDiscoverMoreLinksNestedInput
  }

  export type DiscoverMoreUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    display_name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    naukari_id?: IntFieldUpdateOperationsInput | number
  }

  export type DiscoverMoreCreateManyInput = {
    id?: number
    display_name: string
    url: string
    naukari_id: number
  }

  export type DiscoverMoreUpdateManyMutationInput = {
    display_name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type DiscoverMoreUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    display_name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    naukari_id?: IntFieldUpdateOperationsInput | number
  }

  export type SectionCreateInput = {
    display_name: string
    img_url: string
    url: string
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    created_by?: number | null
    updated_by?: number | null
  }

  export type SectionUncheckedCreateInput = {
    section_id?: number
    display_name: string
    img_url: string
    url: string
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    created_by?: number | null
    updated_by?: number | null
  }

  export type SectionUpdateInput = {
    display_name?: StringFieldUpdateOperationsInput | string
    img_url?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SectionUncheckedUpdateInput = {
    section_id?: IntFieldUpdateOperationsInput | number
    display_name?: StringFieldUpdateOperationsInput | string
    img_url?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SectionCreateManyInput = {
    section_id?: number
    display_name: string
    img_url: string
    url: string
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    created_by?: number | null
    updated_by?: number | null
  }

  export type SectionUpdateManyMutationInput = {
    display_name?: StringFieldUpdateOperationsInput | string
    img_url?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SectionUncheckedUpdateManyInput = {
    section_id?: IntFieldUpdateOperationsInput | number
    display_name?: StringFieldUpdateOperationsInput | string
    img_url?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ImportantQuesAnsListRelationFilter = {
    every?: ImportantQuesAnsWhereInput
    some?: ImportantQuesAnsWhereInput
    none?: ImportantQuesAnsWhereInput
  }

  export type UsefulLinkSectionListRelationFilter = {
    every?: UsefulLinkSectionWhereInput
    some?: UsefulLinkSectionWhereInput
    none?: UsefulLinkSectionWhereInput
  }

  export type DiscoverMoreListRelationFilter = {
    every?: DiscoverMoreWhereInput
    some?: DiscoverMoreWhereInput
    none?: DiscoverMoreWhereInput
  }

  export type ImportantQuesAnsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsefulLinkSectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DiscoverMoreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NaukariCountOrderByAggregateInput = {
    naukari_id?: SortOrder
    title?: SortOrder
    isResult?: SortOrder
    isAdmitCard?: SortOrder
    postDate?: SortOrder
    description?: SortOrder
    slug?: SortOrder
    seo_title?: SortOrder
    seo_keywords?: SortOrder
    seo_published_date?: SortOrder
    seo_description?: SortOrder
    seo_section?: SortOrder
    seo_sub_section?: SortOrder
    seo_category?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type NaukariAvgOrderByAggregateInput = {
    naukari_id?: SortOrder
    status?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type NaukariMaxOrderByAggregateInput = {
    naukari_id?: SortOrder
    title?: SortOrder
    isResult?: SortOrder
    isAdmitCard?: SortOrder
    postDate?: SortOrder
    description?: SortOrder
    slug?: SortOrder
    seo_title?: SortOrder
    seo_keywords?: SortOrder
    seo_published_date?: SortOrder
    seo_description?: SortOrder
    seo_section?: SortOrder
    seo_sub_section?: SortOrder
    seo_category?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type NaukariMinOrderByAggregateInput = {
    naukari_id?: SortOrder
    title?: SortOrder
    isResult?: SortOrder
    isAdmitCard?: SortOrder
    postDate?: SortOrder
    description?: SortOrder
    slug?: SortOrder
    seo_title?: SortOrder
    seo_keywords?: SortOrder
    seo_published_date?: SortOrder
    seo_description?: SortOrder
    seo_section?: SortOrder
    seo_sub_section?: SortOrder
    seo_category?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type NaukariSumOrderByAggregateInput = {
    naukari_id?: SortOrder
    status?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NaukariScalarRelationFilter = {
    is?: NaukariWhereInput
    isNot?: NaukariWhereInput
  }

  export type ImportantQuesAnsCountOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    naukari_id?: SortOrder
  }

  export type ImportantQuesAnsAvgOrderByAggregateInput = {
    id?: SortOrder
    naukari_id?: SortOrder
  }

  export type ImportantQuesAnsMaxOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    naukari_id?: SortOrder
  }

  export type ImportantQuesAnsMinOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    naukari_id?: SortOrder
  }

  export type ImportantQuesAnsSumOrderByAggregateInput = {
    id?: SortOrder
    naukari_id?: SortOrder
  }

  export type UsefulLinkListRelationFilter = {
    every?: UsefulLinkWhereInput
    some?: UsefulLinkWhereInput
    none?: UsefulLinkWhereInput
  }

  export type UsefulLinkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsefulLinkSectionCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    naukari_id?: SortOrder
  }

  export type UsefulLinkSectionAvgOrderByAggregateInput = {
    id?: SortOrder
    naukari_id?: SortOrder
  }

  export type UsefulLinkSectionMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    naukari_id?: SortOrder
  }

  export type UsefulLinkSectionMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    naukari_id?: SortOrder
  }

  export type UsefulLinkSectionSumOrderByAggregateInput = {
    id?: SortOrder
    naukari_id?: SortOrder
  }

  export type UsefulLinkSectionScalarRelationFilter = {
    is?: UsefulLinkSectionWhereInput
    isNot?: UsefulLinkSectionWhereInput
  }

  export type UsefulLinkCountOrderByAggregateInput = {
    id?: SortOrder
    display_name?: SortOrder
    url?: SortOrder
    section_id?: SortOrder
  }

  export type UsefulLinkAvgOrderByAggregateInput = {
    id?: SortOrder
    section_id?: SortOrder
  }

  export type UsefulLinkMaxOrderByAggregateInput = {
    id?: SortOrder
    display_name?: SortOrder
    url?: SortOrder
    section_id?: SortOrder
  }

  export type UsefulLinkMinOrderByAggregateInput = {
    id?: SortOrder
    display_name?: SortOrder
    url?: SortOrder
    section_id?: SortOrder
  }

  export type UsefulLinkSumOrderByAggregateInput = {
    id?: SortOrder
    section_id?: SortOrder
  }

  export type DiscoverMoreCountOrderByAggregateInput = {
    id?: SortOrder
    display_name?: SortOrder
    url?: SortOrder
    naukari_id?: SortOrder
  }

  export type DiscoverMoreAvgOrderByAggregateInput = {
    id?: SortOrder
    naukari_id?: SortOrder
  }

  export type DiscoverMoreMaxOrderByAggregateInput = {
    id?: SortOrder
    display_name?: SortOrder
    url?: SortOrder
    naukari_id?: SortOrder
  }

  export type DiscoverMoreMinOrderByAggregateInput = {
    id?: SortOrder
    display_name?: SortOrder
    url?: SortOrder
    naukari_id?: SortOrder
  }

  export type DiscoverMoreSumOrderByAggregateInput = {
    id?: SortOrder
    naukari_id?: SortOrder
  }

  export type SectionCountOrderByAggregateInput = {
    section_id?: SortOrder
    display_name?: SortOrder
    img_url?: SortOrder
    url?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type SectionAvgOrderByAggregateInput = {
    section_id?: SortOrder
    status?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type SectionMaxOrderByAggregateInput = {
    section_id?: SortOrder
    display_name?: SortOrder
    img_url?: SortOrder
    url?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type SectionMinOrderByAggregateInput = {
    section_id?: SortOrder
    display_name?: SortOrder
    img_url?: SortOrder
    url?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type SectionSumOrderByAggregateInput = {
    section_id?: SortOrder
    status?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ImportantQuesAnsCreateNestedManyWithoutNaukariInput = {
    create?: XOR<ImportantQuesAnsCreateWithoutNaukariInput, ImportantQuesAnsUncheckedCreateWithoutNaukariInput> | ImportantQuesAnsCreateWithoutNaukariInput[] | ImportantQuesAnsUncheckedCreateWithoutNaukariInput[]
    connectOrCreate?: ImportantQuesAnsCreateOrConnectWithoutNaukariInput | ImportantQuesAnsCreateOrConnectWithoutNaukariInput[]
    createMany?: ImportantQuesAnsCreateManyNaukariInputEnvelope
    connect?: ImportantQuesAnsWhereUniqueInput | ImportantQuesAnsWhereUniqueInput[]
  }

  export type UsefulLinkSectionCreateNestedManyWithoutNaukariInput = {
    create?: XOR<UsefulLinkSectionCreateWithoutNaukariInput, UsefulLinkSectionUncheckedCreateWithoutNaukariInput> | UsefulLinkSectionCreateWithoutNaukariInput[] | UsefulLinkSectionUncheckedCreateWithoutNaukariInput[]
    connectOrCreate?: UsefulLinkSectionCreateOrConnectWithoutNaukariInput | UsefulLinkSectionCreateOrConnectWithoutNaukariInput[]
    createMany?: UsefulLinkSectionCreateManyNaukariInputEnvelope
    connect?: UsefulLinkSectionWhereUniqueInput | UsefulLinkSectionWhereUniqueInput[]
  }

  export type DiscoverMoreCreateNestedManyWithoutNaukariInput = {
    create?: XOR<DiscoverMoreCreateWithoutNaukariInput, DiscoverMoreUncheckedCreateWithoutNaukariInput> | DiscoverMoreCreateWithoutNaukariInput[] | DiscoverMoreUncheckedCreateWithoutNaukariInput[]
    connectOrCreate?: DiscoverMoreCreateOrConnectWithoutNaukariInput | DiscoverMoreCreateOrConnectWithoutNaukariInput[]
    createMany?: DiscoverMoreCreateManyNaukariInputEnvelope
    connect?: DiscoverMoreWhereUniqueInput | DiscoverMoreWhereUniqueInput[]
  }

  export type ImportantQuesAnsUncheckedCreateNestedManyWithoutNaukariInput = {
    create?: XOR<ImportantQuesAnsCreateWithoutNaukariInput, ImportantQuesAnsUncheckedCreateWithoutNaukariInput> | ImportantQuesAnsCreateWithoutNaukariInput[] | ImportantQuesAnsUncheckedCreateWithoutNaukariInput[]
    connectOrCreate?: ImportantQuesAnsCreateOrConnectWithoutNaukariInput | ImportantQuesAnsCreateOrConnectWithoutNaukariInput[]
    createMany?: ImportantQuesAnsCreateManyNaukariInputEnvelope
    connect?: ImportantQuesAnsWhereUniqueInput | ImportantQuesAnsWhereUniqueInput[]
  }

  export type UsefulLinkSectionUncheckedCreateNestedManyWithoutNaukariInput = {
    create?: XOR<UsefulLinkSectionCreateWithoutNaukariInput, UsefulLinkSectionUncheckedCreateWithoutNaukariInput> | UsefulLinkSectionCreateWithoutNaukariInput[] | UsefulLinkSectionUncheckedCreateWithoutNaukariInput[]
    connectOrCreate?: UsefulLinkSectionCreateOrConnectWithoutNaukariInput | UsefulLinkSectionCreateOrConnectWithoutNaukariInput[]
    createMany?: UsefulLinkSectionCreateManyNaukariInputEnvelope
    connect?: UsefulLinkSectionWhereUniqueInput | UsefulLinkSectionWhereUniqueInput[]
  }

  export type DiscoverMoreUncheckedCreateNestedManyWithoutNaukariInput = {
    create?: XOR<DiscoverMoreCreateWithoutNaukariInput, DiscoverMoreUncheckedCreateWithoutNaukariInput> | DiscoverMoreCreateWithoutNaukariInput[] | DiscoverMoreUncheckedCreateWithoutNaukariInput[]
    connectOrCreate?: DiscoverMoreCreateOrConnectWithoutNaukariInput | DiscoverMoreCreateOrConnectWithoutNaukariInput[]
    createMany?: DiscoverMoreCreateManyNaukariInputEnvelope
    connect?: DiscoverMoreWhereUniqueInput | DiscoverMoreWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ImportantQuesAnsUpdateManyWithoutNaukariNestedInput = {
    create?: XOR<ImportantQuesAnsCreateWithoutNaukariInput, ImportantQuesAnsUncheckedCreateWithoutNaukariInput> | ImportantQuesAnsCreateWithoutNaukariInput[] | ImportantQuesAnsUncheckedCreateWithoutNaukariInput[]
    connectOrCreate?: ImportantQuesAnsCreateOrConnectWithoutNaukariInput | ImportantQuesAnsCreateOrConnectWithoutNaukariInput[]
    upsert?: ImportantQuesAnsUpsertWithWhereUniqueWithoutNaukariInput | ImportantQuesAnsUpsertWithWhereUniqueWithoutNaukariInput[]
    createMany?: ImportantQuesAnsCreateManyNaukariInputEnvelope
    set?: ImportantQuesAnsWhereUniqueInput | ImportantQuesAnsWhereUniqueInput[]
    disconnect?: ImportantQuesAnsWhereUniqueInput | ImportantQuesAnsWhereUniqueInput[]
    delete?: ImportantQuesAnsWhereUniqueInput | ImportantQuesAnsWhereUniqueInput[]
    connect?: ImportantQuesAnsWhereUniqueInput | ImportantQuesAnsWhereUniqueInput[]
    update?: ImportantQuesAnsUpdateWithWhereUniqueWithoutNaukariInput | ImportantQuesAnsUpdateWithWhereUniqueWithoutNaukariInput[]
    updateMany?: ImportantQuesAnsUpdateManyWithWhereWithoutNaukariInput | ImportantQuesAnsUpdateManyWithWhereWithoutNaukariInput[]
    deleteMany?: ImportantQuesAnsScalarWhereInput | ImportantQuesAnsScalarWhereInput[]
  }

  export type UsefulLinkSectionUpdateManyWithoutNaukariNestedInput = {
    create?: XOR<UsefulLinkSectionCreateWithoutNaukariInput, UsefulLinkSectionUncheckedCreateWithoutNaukariInput> | UsefulLinkSectionCreateWithoutNaukariInput[] | UsefulLinkSectionUncheckedCreateWithoutNaukariInput[]
    connectOrCreate?: UsefulLinkSectionCreateOrConnectWithoutNaukariInput | UsefulLinkSectionCreateOrConnectWithoutNaukariInput[]
    upsert?: UsefulLinkSectionUpsertWithWhereUniqueWithoutNaukariInput | UsefulLinkSectionUpsertWithWhereUniqueWithoutNaukariInput[]
    createMany?: UsefulLinkSectionCreateManyNaukariInputEnvelope
    set?: UsefulLinkSectionWhereUniqueInput | UsefulLinkSectionWhereUniqueInput[]
    disconnect?: UsefulLinkSectionWhereUniqueInput | UsefulLinkSectionWhereUniqueInput[]
    delete?: UsefulLinkSectionWhereUniqueInput | UsefulLinkSectionWhereUniqueInput[]
    connect?: UsefulLinkSectionWhereUniqueInput | UsefulLinkSectionWhereUniqueInput[]
    update?: UsefulLinkSectionUpdateWithWhereUniqueWithoutNaukariInput | UsefulLinkSectionUpdateWithWhereUniqueWithoutNaukariInput[]
    updateMany?: UsefulLinkSectionUpdateManyWithWhereWithoutNaukariInput | UsefulLinkSectionUpdateManyWithWhereWithoutNaukariInput[]
    deleteMany?: UsefulLinkSectionScalarWhereInput | UsefulLinkSectionScalarWhereInput[]
  }

  export type DiscoverMoreUpdateManyWithoutNaukariNestedInput = {
    create?: XOR<DiscoverMoreCreateWithoutNaukariInput, DiscoverMoreUncheckedCreateWithoutNaukariInput> | DiscoverMoreCreateWithoutNaukariInput[] | DiscoverMoreUncheckedCreateWithoutNaukariInput[]
    connectOrCreate?: DiscoverMoreCreateOrConnectWithoutNaukariInput | DiscoverMoreCreateOrConnectWithoutNaukariInput[]
    upsert?: DiscoverMoreUpsertWithWhereUniqueWithoutNaukariInput | DiscoverMoreUpsertWithWhereUniqueWithoutNaukariInput[]
    createMany?: DiscoverMoreCreateManyNaukariInputEnvelope
    set?: DiscoverMoreWhereUniqueInput | DiscoverMoreWhereUniqueInput[]
    disconnect?: DiscoverMoreWhereUniqueInput | DiscoverMoreWhereUniqueInput[]
    delete?: DiscoverMoreWhereUniqueInput | DiscoverMoreWhereUniqueInput[]
    connect?: DiscoverMoreWhereUniqueInput | DiscoverMoreWhereUniqueInput[]
    update?: DiscoverMoreUpdateWithWhereUniqueWithoutNaukariInput | DiscoverMoreUpdateWithWhereUniqueWithoutNaukariInput[]
    updateMany?: DiscoverMoreUpdateManyWithWhereWithoutNaukariInput | DiscoverMoreUpdateManyWithWhereWithoutNaukariInput[]
    deleteMany?: DiscoverMoreScalarWhereInput | DiscoverMoreScalarWhereInput[]
  }

  export type ImportantQuesAnsUncheckedUpdateManyWithoutNaukariNestedInput = {
    create?: XOR<ImportantQuesAnsCreateWithoutNaukariInput, ImportantQuesAnsUncheckedCreateWithoutNaukariInput> | ImportantQuesAnsCreateWithoutNaukariInput[] | ImportantQuesAnsUncheckedCreateWithoutNaukariInput[]
    connectOrCreate?: ImportantQuesAnsCreateOrConnectWithoutNaukariInput | ImportantQuesAnsCreateOrConnectWithoutNaukariInput[]
    upsert?: ImportantQuesAnsUpsertWithWhereUniqueWithoutNaukariInput | ImportantQuesAnsUpsertWithWhereUniqueWithoutNaukariInput[]
    createMany?: ImportantQuesAnsCreateManyNaukariInputEnvelope
    set?: ImportantQuesAnsWhereUniqueInput | ImportantQuesAnsWhereUniqueInput[]
    disconnect?: ImportantQuesAnsWhereUniqueInput | ImportantQuesAnsWhereUniqueInput[]
    delete?: ImportantQuesAnsWhereUniqueInput | ImportantQuesAnsWhereUniqueInput[]
    connect?: ImportantQuesAnsWhereUniqueInput | ImportantQuesAnsWhereUniqueInput[]
    update?: ImportantQuesAnsUpdateWithWhereUniqueWithoutNaukariInput | ImportantQuesAnsUpdateWithWhereUniqueWithoutNaukariInput[]
    updateMany?: ImportantQuesAnsUpdateManyWithWhereWithoutNaukariInput | ImportantQuesAnsUpdateManyWithWhereWithoutNaukariInput[]
    deleteMany?: ImportantQuesAnsScalarWhereInput | ImportantQuesAnsScalarWhereInput[]
  }

  export type UsefulLinkSectionUncheckedUpdateManyWithoutNaukariNestedInput = {
    create?: XOR<UsefulLinkSectionCreateWithoutNaukariInput, UsefulLinkSectionUncheckedCreateWithoutNaukariInput> | UsefulLinkSectionCreateWithoutNaukariInput[] | UsefulLinkSectionUncheckedCreateWithoutNaukariInput[]
    connectOrCreate?: UsefulLinkSectionCreateOrConnectWithoutNaukariInput | UsefulLinkSectionCreateOrConnectWithoutNaukariInput[]
    upsert?: UsefulLinkSectionUpsertWithWhereUniqueWithoutNaukariInput | UsefulLinkSectionUpsertWithWhereUniqueWithoutNaukariInput[]
    createMany?: UsefulLinkSectionCreateManyNaukariInputEnvelope
    set?: UsefulLinkSectionWhereUniqueInput | UsefulLinkSectionWhereUniqueInput[]
    disconnect?: UsefulLinkSectionWhereUniqueInput | UsefulLinkSectionWhereUniqueInput[]
    delete?: UsefulLinkSectionWhereUniqueInput | UsefulLinkSectionWhereUniqueInput[]
    connect?: UsefulLinkSectionWhereUniqueInput | UsefulLinkSectionWhereUniqueInput[]
    update?: UsefulLinkSectionUpdateWithWhereUniqueWithoutNaukariInput | UsefulLinkSectionUpdateWithWhereUniqueWithoutNaukariInput[]
    updateMany?: UsefulLinkSectionUpdateManyWithWhereWithoutNaukariInput | UsefulLinkSectionUpdateManyWithWhereWithoutNaukariInput[]
    deleteMany?: UsefulLinkSectionScalarWhereInput | UsefulLinkSectionScalarWhereInput[]
  }

  export type DiscoverMoreUncheckedUpdateManyWithoutNaukariNestedInput = {
    create?: XOR<DiscoverMoreCreateWithoutNaukariInput, DiscoverMoreUncheckedCreateWithoutNaukariInput> | DiscoverMoreCreateWithoutNaukariInput[] | DiscoverMoreUncheckedCreateWithoutNaukariInput[]
    connectOrCreate?: DiscoverMoreCreateOrConnectWithoutNaukariInput | DiscoverMoreCreateOrConnectWithoutNaukariInput[]
    upsert?: DiscoverMoreUpsertWithWhereUniqueWithoutNaukariInput | DiscoverMoreUpsertWithWhereUniqueWithoutNaukariInput[]
    createMany?: DiscoverMoreCreateManyNaukariInputEnvelope
    set?: DiscoverMoreWhereUniqueInput | DiscoverMoreWhereUniqueInput[]
    disconnect?: DiscoverMoreWhereUniqueInput | DiscoverMoreWhereUniqueInput[]
    delete?: DiscoverMoreWhereUniqueInput | DiscoverMoreWhereUniqueInput[]
    connect?: DiscoverMoreWhereUniqueInput | DiscoverMoreWhereUniqueInput[]
    update?: DiscoverMoreUpdateWithWhereUniqueWithoutNaukariInput | DiscoverMoreUpdateWithWhereUniqueWithoutNaukariInput[]
    updateMany?: DiscoverMoreUpdateManyWithWhereWithoutNaukariInput | DiscoverMoreUpdateManyWithWhereWithoutNaukariInput[]
    deleteMany?: DiscoverMoreScalarWhereInput | DiscoverMoreScalarWhereInput[]
  }

  export type NaukariCreateNestedOneWithoutImportantQuesAnsInput = {
    create?: XOR<NaukariCreateWithoutImportantQuesAnsInput, NaukariUncheckedCreateWithoutImportantQuesAnsInput>
    connectOrCreate?: NaukariCreateOrConnectWithoutImportantQuesAnsInput
    connect?: NaukariWhereUniqueInput
  }

  export type NaukariUpdateOneRequiredWithoutImportantQuesAnsNestedInput = {
    create?: XOR<NaukariCreateWithoutImportantQuesAnsInput, NaukariUncheckedCreateWithoutImportantQuesAnsInput>
    connectOrCreate?: NaukariCreateOrConnectWithoutImportantQuesAnsInput
    upsert?: NaukariUpsertWithoutImportantQuesAnsInput
    connect?: NaukariWhereUniqueInput
    update?: XOR<XOR<NaukariUpdateToOneWithWhereWithoutImportantQuesAnsInput, NaukariUpdateWithoutImportantQuesAnsInput>, NaukariUncheckedUpdateWithoutImportantQuesAnsInput>
  }

  export type NaukariCreateNestedOneWithoutUsefulLinksInput = {
    create?: XOR<NaukariCreateWithoutUsefulLinksInput, NaukariUncheckedCreateWithoutUsefulLinksInput>
    connectOrCreate?: NaukariCreateOrConnectWithoutUsefulLinksInput
    connect?: NaukariWhereUniqueInput
  }

  export type UsefulLinkCreateNestedManyWithoutSectionInput = {
    create?: XOR<UsefulLinkCreateWithoutSectionInput, UsefulLinkUncheckedCreateWithoutSectionInput> | UsefulLinkCreateWithoutSectionInput[] | UsefulLinkUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: UsefulLinkCreateOrConnectWithoutSectionInput | UsefulLinkCreateOrConnectWithoutSectionInput[]
    createMany?: UsefulLinkCreateManySectionInputEnvelope
    connect?: UsefulLinkWhereUniqueInput | UsefulLinkWhereUniqueInput[]
  }

  export type UsefulLinkUncheckedCreateNestedManyWithoutSectionInput = {
    create?: XOR<UsefulLinkCreateWithoutSectionInput, UsefulLinkUncheckedCreateWithoutSectionInput> | UsefulLinkCreateWithoutSectionInput[] | UsefulLinkUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: UsefulLinkCreateOrConnectWithoutSectionInput | UsefulLinkCreateOrConnectWithoutSectionInput[]
    createMany?: UsefulLinkCreateManySectionInputEnvelope
    connect?: UsefulLinkWhereUniqueInput | UsefulLinkWhereUniqueInput[]
  }

  export type NaukariUpdateOneRequiredWithoutUsefulLinksNestedInput = {
    create?: XOR<NaukariCreateWithoutUsefulLinksInput, NaukariUncheckedCreateWithoutUsefulLinksInput>
    connectOrCreate?: NaukariCreateOrConnectWithoutUsefulLinksInput
    upsert?: NaukariUpsertWithoutUsefulLinksInput
    connect?: NaukariWhereUniqueInput
    update?: XOR<XOR<NaukariUpdateToOneWithWhereWithoutUsefulLinksInput, NaukariUpdateWithoutUsefulLinksInput>, NaukariUncheckedUpdateWithoutUsefulLinksInput>
  }

  export type UsefulLinkUpdateManyWithoutSectionNestedInput = {
    create?: XOR<UsefulLinkCreateWithoutSectionInput, UsefulLinkUncheckedCreateWithoutSectionInput> | UsefulLinkCreateWithoutSectionInput[] | UsefulLinkUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: UsefulLinkCreateOrConnectWithoutSectionInput | UsefulLinkCreateOrConnectWithoutSectionInput[]
    upsert?: UsefulLinkUpsertWithWhereUniqueWithoutSectionInput | UsefulLinkUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: UsefulLinkCreateManySectionInputEnvelope
    set?: UsefulLinkWhereUniqueInput | UsefulLinkWhereUniqueInput[]
    disconnect?: UsefulLinkWhereUniqueInput | UsefulLinkWhereUniqueInput[]
    delete?: UsefulLinkWhereUniqueInput | UsefulLinkWhereUniqueInput[]
    connect?: UsefulLinkWhereUniqueInput | UsefulLinkWhereUniqueInput[]
    update?: UsefulLinkUpdateWithWhereUniqueWithoutSectionInput | UsefulLinkUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: UsefulLinkUpdateManyWithWhereWithoutSectionInput | UsefulLinkUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: UsefulLinkScalarWhereInput | UsefulLinkScalarWhereInput[]
  }

  export type UsefulLinkUncheckedUpdateManyWithoutSectionNestedInput = {
    create?: XOR<UsefulLinkCreateWithoutSectionInput, UsefulLinkUncheckedCreateWithoutSectionInput> | UsefulLinkCreateWithoutSectionInput[] | UsefulLinkUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: UsefulLinkCreateOrConnectWithoutSectionInput | UsefulLinkCreateOrConnectWithoutSectionInput[]
    upsert?: UsefulLinkUpsertWithWhereUniqueWithoutSectionInput | UsefulLinkUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: UsefulLinkCreateManySectionInputEnvelope
    set?: UsefulLinkWhereUniqueInput | UsefulLinkWhereUniqueInput[]
    disconnect?: UsefulLinkWhereUniqueInput | UsefulLinkWhereUniqueInput[]
    delete?: UsefulLinkWhereUniqueInput | UsefulLinkWhereUniqueInput[]
    connect?: UsefulLinkWhereUniqueInput | UsefulLinkWhereUniqueInput[]
    update?: UsefulLinkUpdateWithWhereUniqueWithoutSectionInput | UsefulLinkUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: UsefulLinkUpdateManyWithWhereWithoutSectionInput | UsefulLinkUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: UsefulLinkScalarWhereInput | UsefulLinkScalarWhereInput[]
  }

  export type UsefulLinkSectionCreateNestedOneWithoutLinksInput = {
    create?: XOR<UsefulLinkSectionCreateWithoutLinksInput, UsefulLinkSectionUncheckedCreateWithoutLinksInput>
    connectOrCreate?: UsefulLinkSectionCreateOrConnectWithoutLinksInput
    connect?: UsefulLinkSectionWhereUniqueInput
  }

  export type UsefulLinkSectionUpdateOneRequiredWithoutLinksNestedInput = {
    create?: XOR<UsefulLinkSectionCreateWithoutLinksInput, UsefulLinkSectionUncheckedCreateWithoutLinksInput>
    connectOrCreate?: UsefulLinkSectionCreateOrConnectWithoutLinksInput
    upsert?: UsefulLinkSectionUpsertWithoutLinksInput
    connect?: UsefulLinkSectionWhereUniqueInput
    update?: XOR<XOR<UsefulLinkSectionUpdateToOneWithWhereWithoutLinksInput, UsefulLinkSectionUpdateWithoutLinksInput>, UsefulLinkSectionUncheckedUpdateWithoutLinksInput>
  }

  export type NaukariCreateNestedOneWithoutDiscoverMoreLinksInput = {
    create?: XOR<NaukariCreateWithoutDiscoverMoreLinksInput, NaukariUncheckedCreateWithoutDiscoverMoreLinksInput>
    connectOrCreate?: NaukariCreateOrConnectWithoutDiscoverMoreLinksInput
    connect?: NaukariWhereUniqueInput
  }

  export type NaukariUpdateOneRequiredWithoutDiscoverMoreLinksNestedInput = {
    create?: XOR<NaukariCreateWithoutDiscoverMoreLinksInput, NaukariUncheckedCreateWithoutDiscoverMoreLinksInput>
    connectOrCreate?: NaukariCreateOrConnectWithoutDiscoverMoreLinksInput
    upsert?: NaukariUpsertWithoutDiscoverMoreLinksInput
    connect?: NaukariWhereUniqueInput
    update?: XOR<XOR<NaukariUpdateToOneWithWhereWithoutDiscoverMoreLinksInput, NaukariUpdateWithoutDiscoverMoreLinksInput>, NaukariUncheckedUpdateWithoutDiscoverMoreLinksInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ImportantQuesAnsCreateWithoutNaukariInput = {
    question: string
    answer: string
  }

  export type ImportantQuesAnsUncheckedCreateWithoutNaukariInput = {
    id?: number
    question: string
    answer: string
  }

  export type ImportantQuesAnsCreateOrConnectWithoutNaukariInput = {
    where: ImportantQuesAnsWhereUniqueInput
    create: XOR<ImportantQuesAnsCreateWithoutNaukariInput, ImportantQuesAnsUncheckedCreateWithoutNaukariInput>
  }

  export type ImportantQuesAnsCreateManyNaukariInputEnvelope = {
    data: ImportantQuesAnsCreateManyNaukariInput | ImportantQuesAnsCreateManyNaukariInput[]
    skipDuplicates?: boolean
  }

  export type UsefulLinkSectionCreateWithoutNaukariInput = {
    text: string
    links?: UsefulLinkCreateNestedManyWithoutSectionInput
  }

  export type UsefulLinkSectionUncheckedCreateWithoutNaukariInput = {
    id?: number
    text: string
    links?: UsefulLinkUncheckedCreateNestedManyWithoutSectionInput
  }

  export type UsefulLinkSectionCreateOrConnectWithoutNaukariInput = {
    where: UsefulLinkSectionWhereUniqueInput
    create: XOR<UsefulLinkSectionCreateWithoutNaukariInput, UsefulLinkSectionUncheckedCreateWithoutNaukariInput>
  }

  export type UsefulLinkSectionCreateManyNaukariInputEnvelope = {
    data: UsefulLinkSectionCreateManyNaukariInput | UsefulLinkSectionCreateManyNaukariInput[]
    skipDuplicates?: boolean
  }

  export type DiscoverMoreCreateWithoutNaukariInput = {
    display_name: string
    url: string
  }

  export type DiscoverMoreUncheckedCreateWithoutNaukariInput = {
    id?: number
    display_name: string
    url: string
  }

  export type DiscoverMoreCreateOrConnectWithoutNaukariInput = {
    where: DiscoverMoreWhereUniqueInput
    create: XOR<DiscoverMoreCreateWithoutNaukariInput, DiscoverMoreUncheckedCreateWithoutNaukariInput>
  }

  export type DiscoverMoreCreateManyNaukariInputEnvelope = {
    data: DiscoverMoreCreateManyNaukariInput | DiscoverMoreCreateManyNaukariInput[]
    skipDuplicates?: boolean
  }

  export type ImportantQuesAnsUpsertWithWhereUniqueWithoutNaukariInput = {
    where: ImportantQuesAnsWhereUniqueInput
    update: XOR<ImportantQuesAnsUpdateWithoutNaukariInput, ImportantQuesAnsUncheckedUpdateWithoutNaukariInput>
    create: XOR<ImportantQuesAnsCreateWithoutNaukariInput, ImportantQuesAnsUncheckedCreateWithoutNaukariInput>
  }

  export type ImportantQuesAnsUpdateWithWhereUniqueWithoutNaukariInput = {
    where: ImportantQuesAnsWhereUniqueInput
    data: XOR<ImportantQuesAnsUpdateWithoutNaukariInput, ImportantQuesAnsUncheckedUpdateWithoutNaukariInput>
  }

  export type ImportantQuesAnsUpdateManyWithWhereWithoutNaukariInput = {
    where: ImportantQuesAnsScalarWhereInput
    data: XOR<ImportantQuesAnsUpdateManyMutationInput, ImportantQuesAnsUncheckedUpdateManyWithoutNaukariInput>
  }

  export type ImportantQuesAnsScalarWhereInput = {
    AND?: ImportantQuesAnsScalarWhereInput | ImportantQuesAnsScalarWhereInput[]
    OR?: ImportantQuesAnsScalarWhereInput[]
    NOT?: ImportantQuesAnsScalarWhereInput | ImportantQuesAnsScalarWhereInput[]
    id?: IntFilter<"ImportantQuesAns"> | number
    question?: StringFilter<"ImportantQuesAns"> | string
    answer?: StringFilter<"ImportantQuesAns"> | string
    naukari_id?: IntFilter<"ImportantQuesAns"> | number
  }

  export type UsefulLinkSectionUpsertWithWhereUniqueWithoutNaukariInput = {
    where: UsefulLinkSectionWhereUniqueInput
    update: XOR<UsefulLinkSectionUpdateWithoutNaukariInput, UsefulLinkSectionUncheckedUpdateWithoutNaukariInput>
    create: XOR<UsefulLinkSectionCreateWithoutNaukariInput, UsefulLinkSectionUncheckedCreateWithoutNaukariInput>
  }

  export type UsefulLinkSectionUpdateWithWhereUniqueWithoutNaukariInput = {
    where: UsefulLinkSectionWhereUniqueInput
    data: XOR<UsefulLinkSectionUpdateWithoutNaukariInput, UsefulLinkSectionUncheckedUpdateWithoutNaukariInput>
  }

  export type UsefulLinkSectionUpdateManyWithWhereWithoutNaukariInput = {
    where: UsefulLinkSectionScalarWhereInput
    data: XOR<UsefulLinkSectionUpdateManyMutationInput, UsefulLinkSectionUncheckedUpdateManyWithoutNaukariInput>
  }

  export type UsefulLinkSectionScalarWhereInput = {
    AND?: UsefulLinkSectionScalarWhereInput | UsefulLinkSectionScalarWhereInput[]
    OR?: UsefulLinkSectionScalarWhereInput[]
    NOT?: UsefulLinkSectionScalarWhereInput | UsefulLinkSectionScalarWhereInput[]
    id?: IntFilter<"UsefulLinkSection"> | number
    text?: StringFilter<"UsefulLinkSection"> | string
    naukari_id?: IntFilter<"UsefulLinkSection"> | number
  }

  export type DiscoverMoreUpsertWithWhereUniqueWithoutNaukariInput = {
    where: DiscoverMoreWhereUniqueInput
    update: XOR<DiscoverMoreUpdateWithoutNaukariInput, DiscoverMoreUncheckedUpdateWithoutNaukariInput>
    create: XOR<DiscoverMoreCreateWithoutNaukariInput, DiscoverMoreUncheckedCreateWithoutNaukariInput>
  }

  export type DiscoverMoreUpdateWithWhereUniqueWithoutNaukariInput = {
    where: DiscoverMoreWhereUniqueInput
    data: XOR<DiscoverMoreUpdateWithoutNaukariInput, DiscoverMoreUncheckedUpdateWithoutNaukariInput>
  }

  export type DiscoverMoreUpdateManyWithWhereWithoutNaukariInput = {
    where: DiscoverMoreScalarWhereInput
    data: XOR<DiscoverMoreUpdateManyMutationInput, DiscoverMoreUncheckedUpdateManyWithoutNaukariInput>
  }

  export type DiscoverMoreScalarWhereInput = {
    AND?: DiscoverMoreScalarWhereInput | DiscoverMoreScalarWhereInput[]
    OR?: DiscoverMoreScalarWhereInput[]
    NOT?: DiscoverMoreScalarWhereInput | DiscoverMoreScalarWhereInput[]
    id?: IntFilter<"DiscoverMore"> | number
    display_name?: StringFilter<"DiscoverMore"> | string
    url?: StringFilter<"DiscoverMore"> | string
    naukari_id?: IntFilter<"DiscoverMore"> | number
  }

  export type NaukariCreateWithoutImportantQuesAnsInput = {
    title: string
    isResult?: boolean
    isAdmitCard?: boolean
    postDate: Date | string
    description: string
    slug: string
    seo_title: string
    seo_keywords: string
    seo_published_date: Date | string
    seo_description: string
    seo_section: string
    seo_sub_section?: string | null
    seo_category: string
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    created_by?: number | null
    updated_by?: number | null
    usefulLinks?: UsefulLinkSectionCreateNestedManyWithoutNaukariInput
    discoverMoreLinks?: DiscoverMoreCreateNestedManyWithoutNaukariInput
  }

  export type NaukariUncheckedCreateWithoutImportantQuesAnsInput = {
    naukari_id?: number
    title: string
    isResult?: boolean
    isAdmitCard?: boolean
    postDate: Date | string
    description: string
    slug: string
    seo_title: string
    seo_keywords: string
    seo_published_date: Date | string
    seo_description: string
    seo_section: string
    seo_sub_section?: string | null
    seo_category: string
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    created_by?: number | null
    updated_by?: number | null
    usefulLinks?: UsefulLinkSectionUncheckedCreateNestedManyWithoutNaukariInput
    discoverMoreLinks?: DiscoverMoreUncheckedCreateNestedManyWithoutNaukariInput
  }

  export type NaukariCreateOrConnectWithoutImportantQuesAnsInput = {
    where: NaukariWhereUniqueInput
    create: XOR<NaukariCreateWithoutImportantQuesAnsInput, NaukariUncheckedCreateWithoutImportantQuesAnsInput>
  }

  export type NaukariUpsertWithoutImportantQuesAnsInput = {
    update: XOR<NaukariUpdateWithoutImportantQuesAnsInput, NaukariUncheckedUpdateWithoutImportantQuesAnsInput>
    create: XOR<NaukariCreateWithoutImportantQuesAnsInput, NaukariUncheckedCreateWithoutImportantQuesAnsInput>
    where?: NaukariWhereInput
  }

  export type NaukariUpdateToOneWithWhereWithoutImportantQuesAnsInput = {
    where?: NaukariWhereInput
    data: XOR<NaukariUpdateWithoutImportantQuesAnsInput, NaukariUncheckedUpdateWithoutImportantQuesAnsInput>
  }

  export type NaukariUpdateWithoutImportantQuesAnsInput = {
    title?: StringFieldUpdateOperationsInput | string
    isResult?: BoolFieldUpdateOperationsInput | boolean
    isAdmitCard?: BoolFieldUpdateOperationsInput | boolean
    postDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    seo_title?: StringFieldUpdateOperationsInput | string
    seo_keywords?: StringFieldUpdateOperationsInput | string
    seo_published_date?: DateTimeFieldUpdateOperationsInput | Date | string
    seo_description?: StringFieldUpdateOperationsInput | string
    seo_section?: StringFieldUpdateOperationsInput | string
    seo_sub_section?: NullableStringFieldUpdateOperationsInput | string | null
    seo_category?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    usefulLinks?: UsefulLinkSectionUpdateManyWithoutNaukariNestedInput
    discoverMoreLinks?: DiscoverMoreUpdateManyWithoutNaukariNestedInput
  }

  export type NaukariUncheckedUpdateWithoutImportantQuesAnsInput = {
    naukari_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    isResult?: BoolFieldUpdateOperationsInput | boolean
    isAdmitCard?: BoolFieldUpdateOperationsInput | boolean
    postDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    seo_title?: StringFieldUpdateOperationsInput | string
    seo_keywords?: StringFieldUpdateOperationsInput | string
    seo_published_date?: DateTimeFieldUpdateOperationsInput | Date | string
    seo_description?: StringFieldUpdateOperationsInput | string
    seo_section?: StringFieldUpdateOperationsInput | string
    seo_sub_section?: NullableStringFieldUpdateOperationsInput | string | null
    seo_category?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    usefulLinks?: UsefulLinkSectionUncheckedUpdateManyWithoutNaukariNestedInput
    discoverMoreLinks?: DiscoverMoreUncheckedUpdateManyWithoutNaukariNestedInput
  }

  export type NaukariCreateWithoutUsefulLinksInput = {
    title: string
    isResult?: boolean
    isAdmitCard?: boolean
    postDate: Date | string
    description: string
    slug: string
    seo_title: string
    seo_keywords: string
    seo_published_date: Date | string
    seo_description: string
    seo_section: string
    seo_sub_section?: string | null
    seo_category: string
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    created_by?: number | null
    updated_by?: number | null
    importantQuesAns?: ImportantQuesAnsCreateNestedManyWithoutNaukariInput
    discoverMoreLinks?: DiscoverMoreCreateNestedManyWithoutNaukariInput
  }

  export type NaukariUncheckedCreateWithoutUsefulLinksInput = {
    naukari_id?: number
    title: string
    isResult?: boolean
    isAdmitCard?: boolean
    postDate: Date | string
    description: string
    slug: string
    seo_title: string
    seo_keywords: string
    seo_published_date: Date | string
    seo_description: string
    seo_section: string
    seo_sub_section?: string | null
    seo_category: string
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    created_by?: number | null
    updated_by?: number | null
    importantQuesAns?: ImportantQuesAnsUncheckedCreateNestedManyWithoutNaukariInput
    discoverMoreLinks?: DiscoverMoreUncheckedCreateNestedManyWithoutNaukariInput
  }

  export type NaukariCreateOrConnectWithoutUsefulLinksInput = {
    where: NaukariWhereUniqueInput
    create: XOR<NaukariCreateWithoutUsefulLinksInput, NaukariUncheckedCreateWithoutUsefulLinksInput>
  }

  export type UsefulLinkCreateWithoutSectionInput = {
    display_name: string
    url: string
  }

  export type UsefulLinkUncheckedCreateWithoutSectionInput = {
    id?: number
    display_name: string
    url: string
  }

  export type UsefulLinkCreateOrConnectWithoutSectionInput = {
    where: UsefulLinkWhereUniqueInput
    create: XOR<UsefulLinkCreateWithoutSectionInput, UsefulLinkUncheckedCreateWithoutSectionInput>
  }

  export type UsefulLinkCreateManySectionInputEnvelope = {
    data: UsefulLinkCreateManySectionInput | UsefulLinkCreateManySectionInput[]
    skipDuplicates?: boolean
  }

  export type NaukariUpsertWithoutUsefulLinksInput = {
    update: XOR<NaukariUpdateWithoutUsefulLinksInput, NaukariUncheckedUpdateWithoutUsefulLinksInput>
    create: XOR<NaukariCreateWithoutUsefulLinksInput, NaukariUncheckedCreateWithoutUsefulLinksInput>
    where?: NaukariWhereInput
  }

  export type NaukariUpdateToOneWithWhereWithoutUsefulLinksInput = {
    where?: NaukariWhereInput
    data: XOR<NaukariUpdateWithoutUsefulLinksInput, NaukariUncheckedUpdateWithoutUsefulLinksInput>
  }

  export type NaukariUpdateWithoutUsefulLinksInput = {
    title?: StringFieldUpdateOperationsInput | string
    isResult?: BoolFieldUpdateOperationsInput | boolean
    isAdmitCard?: BoolFieldUpdateOperationsInput | boolean
    postDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    seo_title?: StringFieldUpdateOperationsInput | string
    seo_keywords?: StringFieldUpdateOperationsInput | string
    seo_published_date?: DateTimeFieldUpdateOperationsInput | Date | string
    seo_description?: StringFieldUpdateOperationsInput | string
    seo_section?: StringFieldUpdateOperationsInput | string
    seo_sub_section?: NullableStringFieldUpdateOperationsInput | string | null
    seo_category?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    importantQuesAns?: ImportantQuesAnsUpdateManyWithoutNaukariNestedInput
    discoverMoreLinks?: DiscoverMoreUpdateManyWithoutNaukariNestedInput
  }

  export type NaukariUncheckedUpdateWithoutUsefulLinksInput = {
    naukari_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    isResult?: BoolFieldUpdateOperationsInput | boolean
    isAdmitCard?: BoolFieldUpdateOperationsInput | boolean
    postDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    seo_title?: StringFieldUpdateOperationsInput | string
    seo_keywords?: StringFieldUpdateOperationsInput | string
    seo_published_date?: DateTimeFieldUpdateOperationsInput | Date | string
    seo_description?: StringFieldUpdateOperationsInput | string
    seo_section?: StringFieldUpdateOperationsInput | string
    seo_sub_section?: NullableStringFieldUpdateOperationsInput | string | null
    seo_category?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    importantQuesAns?: ImportantQuesAnsUncheckedUpdateManyWithoutNaukariNestedInput
    discoverMoreLinks?: DiscoverMoreUncheckedUpdateManyWithoutNaukariNestedInput
  }

  export type UsefulLinkUpsertWithWhereUniqueWithoutSectionInput = {
    where: UsefulLinkWhereUniqueInput
    update: XOR<UsefulLinkUpdateWithoutSectionInput, UsefulLinkUncheckedUpdateWithoutSectionInput>
    create: XOR<UsefulLinkCreateWithoutSectionInput, UsefulLinkUncheckedCreateWithoutSectionInput>
  }

  export type UsefulLinkUpdateWithWhereUniqueWithoutSectionInput = {
    where: UsefulLinkWhereUniqueInput
    data: XOR<UsefulLinkUpdateWithoutSectionInput, UsefulLinkUncheckedUpdateWithoutSectionInput>
  }

  export type UsefulLinkUpdateManyWithWhereWithoutSectionInput = {
    where: UsefulLinkScalarWhereInput
    data: XOR<UsefulLinkUpdateManyMutationInput, UsefulLinkUncheckedUpdateManyWithoutSectionInput>
  }

  export type UsefulLinkScalarWhereInput = {
    AND?: UsefulLinkScalarWhereInput | UsefulLinkScalarWhereInput[]
    OR?: UsefulLinkScalarWhereInput[]
    NOT?: UsefulLinkScalarWhereInput | UsefulLinkScalarWhereInput[]
    id?: IntFilter<"UsefulLink"> | number
    display_name?: StringFilter<"UsefulLink"> | string
    url?: StringFilter<"UsefulLink"> | string
    section_id?: IntFilter<"UsefulLink"> | number
  }

  export type UsefulLinkSectionCreateWithoutLinksInput = {
    text: string
    naukari: NaukariCreateNestedOneWithoutUsefulLinksInput
  }

  export type UsefulLinkSectionUncheckedCreateWithoutLinksInput = {
    id?: number
    text: string
    naukari_id: number
  }

  export type UsefulLinkSectionCreateOrConnectWithoutLinksInput = {
    where: UsefulLinkSectionWhereUniqueInput
    create: XOR<UsefulLinkSectionCreateWithoutLinksInput, UsefulLinkSectionUncheckedCreateWithoutLinksInput>
  }

  export type UsefulLinkSectionUpsertWithoutLinksInput = {
    update: XOR<UsefulLinkSectionUpdateWithoutLinksInput, UsefulLinkSectionUncheckedUpdateWithoutLinksInput>
    create: XOR<UsefulLinkSectionCreateWithoutLinksInput, UsefulLinkSectionUncheckedCreateWithoutLinksInput>
    where?: UsefulLinkSectionWhereInput
  }

  export type UsefulLinkSectionUpdateToOneWithWhereWithoutLinksInput = {
    where?: UsefulLinkSectionWhereInput
    data: XOR<UsefulLinkSectionUpdateWithoutLinksInput, UsefulLinkSectionUncheckedUpdateWithoutLinksInput>
  }

  export type UsefulLinkSectionUpdateWithoutLinksInput = {
    text?: StringFieldUpdateOperationsInput | string
    naukari?: NaukariUpdateOneRequiredWithoutUsefulLinksNestedInput
  }

  export type UsefulLinkSectionUncheckedUpdateWithoutLinksInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    naukari_id?: IntFieldUpdateOperationsInput | number
  }

  export type NaukariCreateWithoutDiscoverMoreLinksInput = {
    title: string
    isResult?: boolean
    isAdmitCard?: boolean
    postDate: Date | string
    description: string
    slug: string
    seo_title: string
    seo_keywords: string
    seo_published_date: Date | string
    seo_description: string
    seo_section: string
    seo_sub_section?: string | null
    seo_category: string
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    created_by?: number | null
    updated_by?: number | null
    importantQuesAns?: ImportantQuesAnsCreateNestedManyWithoutNaukariInput
    usefulLinks?: UsefulLinkSectionCreateNestedManyWithoutNaukariInput
  }

  export type NaukariUncheckedCreateWithoutDiscoverMoreLinksInput = {
    naukari_id?: number
    title: string
    isResult?: boolean
    isAdmitCard?: boolean
    postDate: Date | string
    description: string
    slug: string
    seo_title: string
    seo_keywords: string
    seo_published_date: Date | string
    seo_description: string
    seo_section: string
    seo_sub_section?: string | null
    seo_category: string
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    created_by?: number | null
    updated_by?: number | null
    importantQuesAns?: ImportantQuesAnsUncheckedCreateNestedManyWithoutNaukariInput
    usefulLinks?: UsefulLinkSectionUncheckedCreateNestedManyWithoutNaukariInput
  }

  export type NaukariCreateOrConnectWithoutDiscoverMoreLinksInput = {
    where: NaukariWhereUniqueInput
    create: XOR<NaukariCreateWithoutDiscoverMoreLinksInput, NaukariUncheckedCreateWithoutDiscoverMoreLinksInput>
  }

  export type NaukariUpsertWithoutDiscoverMoreLinksInput = {
    update: XOR<NaukariUpdateWithoutDiscoverMoreLinksInput, NaukariUncheckedUpdateWithoutDiscoverMoreLinksInput>
    create: XOR<NaukariCreateWithoutDiscoverMoreLinksInput, NaukariUncheckedCreateWithoutDiscoverMoreLinksInput>
    where?: NaukariWhereInput
  }

  export type NaukariUpdateToOneWithWhereWithoutDiscoverMoreLinksInput = {
    where?: NaukariWhereInput
    data: XOR<NaukariUpdateWithoutDiscoverMoreLinksInput, NaukariUncheckedUpdateWithoutDiscoverMoreLinksInput>
  }

  export type NaukariUpdateWithoutDiscoverMoreLinksInput = {
    title?: StringFieldUpdateOperationsInput | string
    isResult?: BoolFieldUpdateOperationsInput | boolean
    isAdmitCard?: BoolFieldUpdateOperationsInput | boolean
    postDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    seo_title?: StringFieldUpdateOperationsInput | string
    seo_keywords?: StringFieldUpdateOperationsInput | string
    seo_published_date?: DateTimeFieldUpdateOperationsInput | Date | string
    seo_description?: StringFieldUpdateOperationsInput | string
    seo_section?: StringFieldUpdateOperationsInput | string
    seo_sub_section?: NullableStringFieldUpdateOperationsInput | string | null
    seo_category?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    importantQuesAns?: ImportantQuesAnsUpdateManyWithoutNaukariNestedInput
    usefulLinks?: UsefulLinkSectionUpdateManyWithoutNaukariNestedInput
  }

  export type NaukariUncheckedUpdateWithoutDiscoverMoreLinksInput = {
    naukari_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    isResult?: BoolFieldUpdateOperationsInput | boolean
    isAdmitCard?: BoolFieldUpdateOperationsInput | boolean
    postDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    seo_title?: StringFieldUpdateOperationsInput | string
    seo_keywords?: StringFieldUpdateOperationsInput | string
    seo_published_date?: DateTimeFieldUpdateOperationsInput | Date | string
    seo_description?: StringFieldUpdateOperationsInput | string
    seo_section?: StringFieldUpdateOperationsInput | string
    seo_sub_section?: NullableStringFieldUpdateOperationsInput | string | null
    seo_category?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    importantQuesAns?: ImportantQuesAnsUncheckedUpdateManyWithoutNaukariNestedInput
    usefulLinks?: UsefulLinkSectionUncheckedUpdateManyWithoutNaukariNestedInput
  }

  export type ImportantQuesAnsCreateManyNaukariInput = {
    id?: number
    question: string
    answer: string
  }

  export type UsefulLinkSectionCreateManyNaukariInput = {
    id?: number
    text: string
  }

  export type DiscoverMoreCreateManyNaukariInput = {
    id?: number
    display_name: string
    url: string
  }

  export type ImportantQuesAnsUpdateWithoutNaukariInput = {
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
  }

  export type ImportantQuesAnsUncheckedUpdateWithoutNaukariInput = {
    id?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
  }

  export type ImportantQuesAnsUncheckedUpdateManyWithoutNaukariInput = {
    id?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
  }

  export type UsefulLinkSectionUpdateWithoutNaukariInput = {
    text?: StringFieldUpdateOperationsInput | string
    links?: UsefulLinkUpdateManyWithoutSectionNestedInput
  }

  export type UsefulLinkSectionUncheckedUpdateWithoutNaukariInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    links?: UsefulLinkUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type UsefulLinkSectionUncheckedUpdateManyWithoutNaukariInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type DiscoverMoreUpdateWithoutNaukariInput = {
    display_name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type DiscoverMoreUncheckedUpdateWithoutNaukariInput = {
    id?: IntFieldUpdateOperationsInput | number
    display_name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type DiscoverMoreUncheckedUpdateManyWithoutNaukariInput = {
    id?: IntFieldUpdateOperationsInput | number
    display_name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type UsefulLinkCreateManySectionInput = {
    id?: number
    display_name: string
    url: string
  }

  export type UsefulLinkUpdateWithoutSectionInput = {
    display_name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type UsefulLinkUncheckedUpdateWithoutSectionInput = {
    id?: IntFieldUpdateOperationsInput | number
    display_name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type UsefulLinkUncheckedUpdateManyWithoutSectionInput = {
    id?: IntFieldUpdateOperationsInput | number
    display_name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}