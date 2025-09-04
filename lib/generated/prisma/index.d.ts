
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
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model NewsArticle
 * 
 */
export type NewsArticle = $Result.DefaultSelection<Prisma.$NewsArticlePayload>
/**
 * Model Discipline
 * 
 */
export type Discipline = $Result.DefaultSelection<Prisma.$DisciplinePayload>
/**
 * Model DisciplineCategory
 * 
 */
export type DisciplineCategory = $Result.DefaultSelection<Prisma.$DisciplineCategoryPayload>
/**
 * Model DisciplineQuickLink
 * 
 */
export type DisciplineQuickLink = $Result.DefaultSelection<Prisma.$DisciplineQuickLinkPayload>
/**
 * Model DisciplineContactInfo
 * 
 */
export type DisciplineContactInfo = $Result.DefaultSelection<Prisma.$DisciplineContactInfoPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const MembershipStatus: {
  PENDING_VALIDATION: 'PENDING_VALIDATION',
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE'
};

export type MembershipStatus = (typeof MembershipStatus)[keyof typeof MembershipStatus]


export const PaymentMethod: {
  MANUAL: 'MANUAL',
  MERCADOPAGO_AUTOMATIC: 'MERCADOPAGO_AUTOMATIC',
  MERCADOPAGO_MANUAL: 'MERCADOPAGO_MANUAL'
};

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]


export const PaymentStatus: {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  REFUNDED: 'REFUNDED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const NewsStatus: {
  DRAFT: 'DRAFT',
  PUBLISHED: 'PUBLISHED',
  ARCHIVED: 'ARCHIVED'
};

export type NewsStatus = (typeof NewsStatus)[keyof typeof NewsStatus]


export const EventType: {
  MATCH: 'MATCH',
  TOURNAMENT: 'TOURNAMENT',
  TRAINING: 'TRAINING',
  SOCIAL: 'SOCIAL',
  MEETING: 'MEETING',
  OTHER: 'OTHER'
};

export type EventType = (typeof EventType)[keyof typeof EventType]


export const EventStatus: {
  SCHEDULED: 'SCHEDULED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED',
  POSTPONED: 'POSTPONED'
};

export type EventStatus = (typeof EventStatus)[keyof typeof EventStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type MembershipStatus = $Enums.MembershipStatus

export const MembershipStatus: typeof $Enums.MembershipStatus

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type NewsStatus = $Enums.NewsStatus

export const NewsStatus: typeof $Enums.NewsStatus

export type EventType = $Enums.EventType

export const EventType: typeof $Enums.EventType

export type EventStatus = $Enums.EventStatus

export const EventStatus: typeof $Enums.EventStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.newsArticle`: Exposes CRUD operations for the **NewsArticle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NewsArticles
    * const newsArticles = await prisma.newsArticle.findMany()
    * ```
    */
  get newsArticle(): Prisma.NewsArticleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.discipline`: Exposes CRUD operations for the **Discipline** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Disciplines
    * const disciplines = await prisma.discipline.findMany()
    * ```
    */
  get discipline(): Prisma.DisciplineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.disciplineCategory`: Exposes CRUD operations for the **DisciplineCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DisciplineCategories
    * const disciplineCategories = await prisma.disciplineCategory.findMany()
    * ```
    */
  get disciplineCategory(): Prisma.DisciplineCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.disciplineQuickLink`: Exposes CRUD operations for the **DisciplineQuickLink** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DisciplineQuickLinks
    * const disciplineQuickLinks = await prisma.disciplineQuickLink.findMany()
    * ```
    */
  get disciplineQuickLink(): Prisma.DisciplineQuickLinkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.disciplineContactInfo`: Exposes CRUD operations for the **DisciplineContactInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DisciplineContactInfos
    * const disciplineContactInfos = await prisma.disciplineContactInfo.findMany()
    * ```
    */
  get disciplineContactInfo(): Prisma.DisciplineContactInfoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    Account: 'Account',
    Session: 'Session',
    User: 'User',
    VerificationToken: 'VerificationToken',
    Payment: 'Payment',
    NewsArticle: 'NewsArticle',
    Discipline: 'Discipline',
    DisciplineCategory: 'DisciplineCategory',
    DisciplineQuickLink: 'DisciplineQuickLink',
    DisciplineContactInfo: 'DisciplineContactInfo',
    Event: 'Event'
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
      modelProps: "account" | "session" | "user" | "verificationToken" | "payment" | "newsArticle" | "discipline" | "disciplineCategory" | "disciplineQuickLink" | "disciplineContactInfo" | "event"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
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
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      NewsArticle: {
        payload: Prisma.$NewsArticlePayload<ExtArgs>
        fields: Prisma.NewsArticleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsArticleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsArticleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>
          }
          findFirst: {
            args: Prisma.NewsArticleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsArticleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>
          }
          findMany: {
            args: Prisma.NewsArticleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>[]
          }
          create: {
            args: Prisma.NewsArticleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>
          }
          createMany: {
            args: Prisma.NewsArticleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsArticleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>[]
          }
          delete: {
            args: Prisma.NewsArticleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>
          }
          update: {
            args: Prisma.NewsArticleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>
          }
          deleteMany: {
            args: Prisma.NewsArticleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsArticleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NewsArticleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>[]
          }
          upsert: {
            args: Prisma.NewsArticleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>
          }
          aggregate: {
            args: Prisma.NewsArticleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNewsArticle>
          }
          groupBy: {
            args: Prisma.NewsArticleGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsArticleGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsArticleCountArgs<ExtArgs>
            result: $Utils.Optional<NewsArticleCountAggregateOutputType> | number
          }
        }
      }
      Discipline: {
        payload: Prisma.$DisciplinePayload<ExtArgs>
        fields: Prisma.DisciplineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DisciplineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DisciplineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinePayload>
          }
          findFirst: {
            args: Prisma.DisciplineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DisciplineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinePayload>
          }
          findMany: {
            args: Prisma.DisciplineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinePayload>[]
          }
          create: {
            args: Prisma.DisciplineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinePayload>
          }
          createMany: {
            args: Prisma.DisciplineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DisciplineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinePayload>[]
          }
          delete: {
            args: Prisma.DisciplineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinePayload>
          }
          update: {
            args: Prisma.DisciplineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinePayload>
          }
          deleteMany: {
            args: Prisma.DisciplineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DisciplineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DisciplineUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinePayload>[]
          }
          upsert: {
            args: Prisma.DisciplineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinePayload>
          }
          aggregate: {
            args: Prisma.DisciplineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiscipline>
          }
          groupBy: {
            args: Prisma.DisciplineGroupByArgs<ExtArgs>
            result: $Utils.Optional<DisciplineGroupByOutputType>[]
          }
          count: {
            args: Prisma.DisciplineCountArgs<ExtArgs>
            result: $Utils.Optional<DisciplineCountAggregateOutputType> | number
          }
        }
      }
      DisciplineCategory: {
        payload: Prisma.$DisciplineCategoryPayload<ExtArgs>
        fields: Prisma.DisciplineCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DisciplineCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplineCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DisciplineCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplineCategoryPayload>
          }
          findFirst: {
            args: Prisma.DisciplineCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplineCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DisciplineCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplineCategoryPayload>
          }
          findMany: {
            args: Prisma.DisciplineCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplineCategoryPayload>[]
          }
          create: {
            args: Prisma.DisciplineCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplineCategoryPayload>
          }
          createMany: {
            args: Prisma.DisciplineCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DisciplineCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplineCategoryPayload>[]
          }
          delete: {
            args: Prisma.DisciplineCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplineCategoryPayload>
          }
          update: {
            args: Prisma.DisciplineCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplineCategoryPayload>
          }
          deleteMany: {
            args: Prisma.DisciplineCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DisciplineCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DisciplineCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplineCategoryPayload>[]
          }
          upsert: {
            args: Prisma.DisciplineCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplineCategoryPayload>
          }
          aggregate: {
            args: Prisma.DisciplineCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDisciplineCategory>
          }
          groupBy: {
            args: Prisma.DisciplineCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<DisciplineCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.DisciplineCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<DisciplineCategoryCountAggregateOutputType> | number
          }
        }
      }
      DisciplineQuickLink: {
        payload: Prisma.$DisciplineQuickLinkPayload<ExtArgs>
        fields: Prisma.DisciplineQuickLinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DisciplineQuickLinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplineQuickLinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DisciplineQuickLinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplineQuickLinkPayload>
          }
          findFirst: {
            args: Prisma.DisciplineQuickLinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplineQuickLinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DisciplineQuickLinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplineQuickLinkPayload>
          }
          findMany: {
            args: Prisma.DisciplineQuickLinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplineQuickLinkPayload>[]
          }
          create: {
            args: Prisma.DisciplineQuickLinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplineQuickLinkPayload>
          }
          createMany: {
            args: Prisma.DisciplineQuickLinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DisciplineQuickLinkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplineQuickLinkPayload>[]
          }
          delete: {
            args: Prisma.DisciplineQuickLinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplineQuickLinkPayload>
          }
          update: {
            args: Prisma.DisciplineQuickLinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplineQuickLinkPayload>
          }
          deleteMany: {
            args: Prisma.DisciplineQuickLinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DisciplineQuickLinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DisciplineQuickLinkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplineQuickLinkPayload>[]
          }
          upsert: {
            args: Prisma.DisciplineQuickLinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplineQuickLinkPayload>
          }
          aggregate: {
            args: Prisma.DisciplineQuickLinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDisciplineQuickLink>
          }
          groupBy: {
            args: Prisma.DisciplineQuickLinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<DisciplineQuickLinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.DisciplineQuickLinkCountArgs<ExtArgs>
            result: $Utils.Optional<DisciplineQuickLinkCountAggregateOutputType> | number
          }
        }
      }
      DisciplineContactInfo: {
        payload: Prisma.$DisciplineContactInfoPayload<ExtArgs>
        fields: Prisma.DisciplineContactInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DisciplineContactInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplineContactInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DisciplineContactInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplineContactInfoPayload>
          }
          findFirst: {
            args: Prisma.DisciplineContactInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplineContactInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DisciplineContactInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplineContactInfoPayload>
          }
          findMany: {
            args: Prisma.DisciplineContactInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplineContactInfoPayload>[]
          }
          create: {
            args: Prisma.DisciplineContactInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplineContactInfoPayload>
          }
          createMany: {
            args: Prisma.DisciplineContactInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DisciplineContactInfoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplineContactInfoPayload>[]
          }
          delete: {
            args: Prisma.DisciplineContactInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplineContactInfoPayload>
          }
          update: {
            args: Prisma.DisciplineContactInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplineContactInfoPayload>
          }
          deleteMany: {
            args: Prisma.DisciplineContactInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DisciplineContactInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DisciplineContactInfoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplineContactInfoPayload>[]
          }
          upsert: {
            args: Prisma.DisciplineContactInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplineContactInfoPayload>
          }
          aggregate: {
            args: Prisma.DisciplineContactInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDisciplineContactInfo>
          }
          groupBy: {
            args: Prisma.DisciplineContactInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<DisciplineContactInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.DisciplineContactInfoCountArgs<ExtArgs>
            result: $Utils.Optional<DisciplineContactInfoCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    account?: AccountOmit
    session?: SessionOmit
    user?: UserOmit
    verificationToken?: VerificationTokenOmit
    payment?: PaymentOmit
    newsArticle?: NewsArticleOmit
    discipline?: DisciplineOmit
    disciplineCategory?: DisciplineCategoryOmit
    disciplineQuickLink?: DisciplineQuickLinkOmit
    disciplineContactInfo?: DisciplineContactInfoOmit
    event?: EventOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    familyMembers: number
    accounts: number
    sessions: number
    payments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    familyMembers?: boolean | UserCountOutputTypeCountFamilyMembersArgs
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    payments?: boolean | UserCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFamilyMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Count Type DisciplineCountOutputType
   */

  export type DisciplineCountOutputType = {
    categories: number
    quickLinks: number
    relatedNews: number
    events: number
  }

  export type DisciplineCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | DisciplineCountOutputTypeCountCategoriesArgs
    quickLinks?: boolean | DisciplineCountOutputTypeCountQuickLinksArgs
    relatedNews?: boolean | DisciplineCountOutputTypeCountRelatedNewsArgs
    events?: boolean | DisciplineCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * DisciplineCountOutputType without action
   */
  export type DisciplineCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineCountOutputType
     */
    select?: DisciplineCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DisciplineCountOutputType without action
   */
  export type DisciplineCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisciplineCategoryWhereInput
  }

  /**
   * DisciplineCountOutputType without action
   */
  export type DisciplineCountOutputTypeCountQuickLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisciplineQuickLinkWhereInput
  }

  /**
   * DisciplineCountOutputType without action
   */
  export type DisciplineCountOutputTypeCountRelatedNewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsArticleWhereInput
  }

  /**
   * DisciplineCountOutputType without action
   */
  export type DisciplineCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
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
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    createdAt: Date
    updatedAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires" | "createdAt" | "updatedAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    dni: string | null
    phone: string | null
    email: string | null
    emailVerified: Date | null
    password: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: $Enums.Role | null
    status: $Enums.MembershipStatus | null
    familyHeadId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    dni: string | null
    phone: string | null
    email: string | null
    emailVerified: Date | null
    password: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: $Enums.Role | null
    status: $Enums.MembershipStatus | null
    familyHeadId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    dni: number
    phone: number
    email: number
    emailVerified: number
    password: number
    image: number
    createdAt: number
    updatedAt: number
    role: number
    status: number
    familyHeadId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    dni?: true
    phone?: true
    email?: true
    emailVerified?: true
    password?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    status?: true
    familyHeadId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    dni?: true
    phone?: true
    email?: true
    emailVerified?: true
    password?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    status?: true
    familyHeadId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    dni?: true
    phone?: true
    email?: true
    emailVerified?: true
    password?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    status?: true
    familyHeadId?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    firstName: string | null
    lastName: string | null
    dni: string
    phone: string
    email: string | null
    emailVerified: Date | null
    password: string | null
    image: string | null
    createdAt: Date
    updatedAt: Date
    role: $Enums.Role
    status: $Enums.MembershipStatus
    familyHeadId: string | null
    _count: UserCountAggregateOutputType | null
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
    firstName?: boolean
    lastName?: boolean
    dni?: boolean
    phone?: boolean
    email?: boolean
    emailVerified?: boolean
    password?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    status?: boolean
    familyHeadId?: boolean
    familyHead?: boolean | User$familyHeadArgs<ExtArgs>
    familyMembers?: boolean | User$familyMembersArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    payments?: boolean | User$paymentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    dni?: boolean
    phone?: boolean
    email?: boolean
    emailVerified?: boolean
    password?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    status?: boolean
    familyHeadId?: boolean
    familyHead?: boolean | User$familyHeadArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    dni?: boolean
    phone?: boolean
    email?: boolean
    emailVerified?: boolean
    password?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    status?: boolean
    familyHeadId?: boolean
    familyHead?: boolean | User$familyHeadArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    dni?: boolean
    phone?: boolean
    email?: boolean
    emailVerified?: boolean
    password?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    status?: boolean
    familyHeadId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "dni" | "phone" | "email" | "emailVerified" | "password" | "image" | "createdAt" | "updatedAt" | "role" | "status" | "familyHeadId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    familyHead?: boolean | User$familyHeadArgs<ExtArgs>
    familyMembers?: boolean | User$familyMembersArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    payments?: boolean | User$paymentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    familyHead?: boolean | User$familyHeadArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    familyHead?: boolean | User$familyHeadArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      familyHead: Prisma.$UserPayload<ExtArgs> | null
      familyMembers: Prisma.$UserPayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string | null
      lastName: string | null
      dni: string
      phone: string
      email: string | null
      emailVerified: Date | null
      password: string | null
      image: string | null
      createdAt: Date
      updatedAt: Date
      role: $Enums.Role
      status: $Enums.MembershipStatus
      familyHeadId: string | null
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
    familyHead<T extends User$familyHeadArgs<ExtArgs> = {}>(args?: Subset<T, User$familyHeadArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    familyMembers<T extends User$familyMembersArgs<ExtArgs> = {}>(args?: Subset<T, User$familyMembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends User$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, User$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly dni: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly password: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly role: FieldRef<"User", 'Role'>
    readonly status: FieldRef<"User", 'MembershipStatus'>
    readonly familyHeadId: FieldRef<"User", 'String'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
   * User.familyHead
   */
  export type User$familyHeadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * User.familyMembers
   */
  export type User$familyMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.payments
   */
  export type User$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
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
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
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
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    amount: Decimal | null
    periodCovered: string | null
    paymentDate: Date | null
    paymentMethod: $Enums.PaymentMethod | null
    status: $Enums.PaymentStatus | null
    transactionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    amount: Decimal | null
    periodCovered: string | null
    paymentDate: Date | null
    paymentMethod: $Enums.PaymentMethod | null
    status: $Enums.PaymentStatus | null
    transactionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    amount: number
    periodCovered: number
    paymentDate: number
    paymentMethod: number
    status: number
    transactionId: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    amount?: true
    periodCovered?: true
    paymentDate?: true
    paymentMethod?: true
    status?: true
    transactionId?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    amount?: true
    periodCovered?: true
    paymentDate?: true
    paymentMethod?: true
    status?: true
    transactionId?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    amount?: true
    periodCovered?: true
    paymentDate?: true
    paymentMethod?: true
    status?: true
    transactionId?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    amount: Decimal
    periodCovered: string
    paymentDate: Date
    paymentMethod: $Enums.PaymentMethod
    status: $Enums.PaymentStatus
    transactionId: string | null
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    periodCovered?: boolean
    paymentDate?: boolean
    paymentMethod?: boolean
    status?: boolean
    transactionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    periodCovered?: boolean
    paymentDate?: boolean
    paymentMethod?: boolean
    status?: boolean
    transactionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    periodCovered?: boolean
    paymentDate?: boolean
    paymentMethod?: boolean
    status?: boolean
    transactionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    amount?: boolean
    periodCovered?: boolean
    paymentDate?: boolean
    paymentMethod?: boolean
    status?: boolean
    transactionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "periodCovered" | "paymentDate" | "paymentMethod" | "status" | "transactionId" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      amount: Prisma.Decimal
      periodCovered: string
      paymentDate: Date
      paymentMethod: $Enums.PaymentMethod
      status: $Enums.PaymentStatus
      transactionId: string | null
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
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
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Decimal'>
    readonly periodCovered: FieldRef<"Payment", 'String'>
    readonly paymentDate: FieldRef<"Payment", 'DateTime'>
    readonly paymentMethod: FieldRef<"Payment", 'PaymentMethod'>
    readonly status: FieldRef<"Payment", 'PaymentStatus'>
    readonly transactionId: FieldRef<"Payment", 'String'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly updatedAt: FieldRef<"Payment", 'DateTime'>
    readonly userId: FieldRef<"Payment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model NewsArticle
   */

  export type AggregateNewsArticle = {
    _count: NewsArticleCountAggregateOutputType | null
    _avg: NewsArticleAvgAggregateOutputType | null
    _sum: NewsArticleSumAggregateOutputType | null
    _min: NewsArticleMinAggregateOutputType | null
    _max: NewsArticleMaxAggregateOutputType | null
  }

  export type NewsArticleAvgAggregateOutputType = {
    viewCount: number | null
  }

  export type NewsArticleSumAggregateOutputType = {
    viewCount: number | null
  }

  export type NewsArticleMinAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    category: string | null
    author: string | null
    publicationDate: Date | null
    status: $Enums.NewsStatus | null
    summary: string | null
    excerpt: string | null
    content: string | null
    imageUrl: string | null
    viewCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    disciplineId: string | null
  }

  export type NewsArticleMaxAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    category: string | null
    author: string | null
    publicationDate: Date | null
    status: $Enums.NewsStatus | null
    summary: string | null
    excerpt: string | null
    content: string | null
    imageUrl: string | null
    viewCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    disciplineId: string | null
  }

  export type NewsArticleCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    category: number
    author: number
    publicationDate: number
    status: number
    summary: number
    excerpt: number
    content: number
    imageUrl: number
    viewCount: number
    createdAt: number
    updatedAt: number
    disciplineId: number
    _all: number
  }


  export type NewsArticleAvgAggregateInputType = {
    viewCount?: true
  }

  export type NewsArticleSumAggregateInputType = {
    viewCount?: true
  }

  export type NewsArticleMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    category?: true
    author?: true
    publicationDate?: true
    status?: true
    summary?: true
    excerpt?: true
    content?: true
    imageUrl?: true
    viewCount?: true
    createdAt?: true
    updatedAt?: true
    disciplineId?: true
  }

  export type NewsArticleMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    category?: true
    author?: true
    publicationDate?: true
    status?: true
    summary?: true
    excerpt?: true
    content?: true
    imageUrl?: true
    viewCount?: true
    createdAt?: true
    updatedAt?: true
    disciplineId?: true
  }

  export type NewsArticleCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    category?: true
    author?: true
    publicationDate?: true
    status?: true
    summary?: true
    excerpt?: true
    content?: true
    imageUrl?: true
    viewCount?: true
    createdAt?: true
    updatedAt?: true
    disciplineId?: true
    _all?: true
  }

  export type NewsArticleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsArticle to aggregate.
     */
    where?: NewsArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsArticles to fetch.
     */
    orderBy?: NewsArticleOrderByWithRelationInput | NewsArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NewsArticles
    **/
    _count?: true | NewsArticleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NewsArticleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NewsArticleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsArticleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsArticleMaxAggregateInputType
  }

  export type GetNewsArticleAggregateType<T extends NewsArticleAggregateArgs> = {
        [P in keyof T & keyof AggregateNewsArticle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewsArticle[P]>
      : GetScalarType<T[P], AggregateNewsArticle[P]>
  }




  export type NewsArticleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsArticleWhereInput
    orderBy?: NewsArticleOrderByWithAggregationInput | NewsArticleOrderByWithAggregationInput[]
    by: NewsArticleScalarFieldEnum[] | NewsArticleScalarFieldEnum
    having?: NewsArticleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsArticleCountAggregateInputType | true
    _avg?: NewsArticleAvgAggregateInputType
    _sum?: NewsArticleSumAggregateInputType
    _min?: NewsArticleMinAggregateInputType
    _max?: NewsArticleMaxAggregateInputType
  }

  export type NewsArticleGroupByOutputType = {
    id: string
    title: string
    slug: string
    category: string
    author: string | null
    publicationDate: Date
    status: $Enums.NewsStatus
    summary: string | null
    excerpt: string | null
    content: string | null
    imageUrl: string | null
    viewCount: number
    createdAt: Date
    updatedAt: Date
    disciplineId: string | null
    _count: NewsArticleCountAggregateOutputType | null
    _avg: NewsArticleAvgAggregateOutputType | null
    _sum: NewsArticleSumAggregateOutputType | null
    _min: NewsArticleMinAggregateOutputType | null
    _max: NewsArticleMaxAggregateOutputType | null
  }

  type GetNewsArticleGroupByPayload<T extends NewsArticleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsArticleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsArticleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsArticleGroupByOutputType[P]>
            : GetScalarType<T[P], NewsArticleGroupByOutputType[P]>
        }
      >
    >


  export type NewsArticleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    category?: boolean
    author?: boolean
    publicationDate?: boolean
    status?: boolean
    summary?: boolean
    excerpt?: boolean
    content?: boolean
    imageUrl?: boolean
    viewCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    disciplineId?: boolean
    discipline?: boolean | NewsArticle$disciplineArgs<ExtArgs>
  }, ExtArgs["result"]["newsArticle"]>

  export type NewsArticleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    category?: boolean
    author?: boolean
    publicationDate?: boolean
    status?: boolean
    summary?: boolean
    excerpt?: boolean
    content?: boolean
    imageUrl?: boolean
    viewCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    disciplineId?: boolean
    discipline?: boolean | NewsArticle$disciplineArgs<ExtArgs>
  }, ExtArgs["result"]["newsArticle"]>

  export type NewsArticleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    category?: boolean
    author?: boolean
    publicationDate?: boolean
    status?: boolean
    summary?: boolean
    excerpt?: boolean
    content?: boolean
    imageUrl?: boolean
    viewCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    disciplineId?: boolean
    discipline?: boolean | NewsArticle$disciplineArgs<ExtArgs>
  }, ExtArgs["result"]["newsArticle"]>

  export type NewsArticleSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    category?: boolean
    author?: boolean
    publicationDate?: boolean
    status?: boolean
    summary?: boolean
    excerpt?: boolean
    content?: boolean
    imageUrl?: boolean
    viewCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    disciplineId?: boolean
  }

  export type NewsArticleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "slug" | "category" | "author" | "publicationDate" | "status" | "summary" | "excerpt" | "content" | "imageUrl" | "viewCount" | "createdAt" | "updatedAt" | "disciplineId", ExtArgs["result"]["newsArticle"]>
  export type NewsArticleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    discipline?: boolean | NewsArticle$disciplineArgs<ExtArgs>
  }
  export type NewsArticleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    discipline?: boolean | NewsArticle$disciplineArgs<ExtArgs>
  }
  export type NewsArticleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    discipline?: boolean | NewsArticle$disciplineArgs<ExtArgs>
  }

  export type $NewsArticlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NewsArticle"
    objects: {
      discipline: Prisma.$DisciplinePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      slug: string
      category: string
      author: string | null
      publicationDate: Date
      status: $Enums.NewsStatus
      summary: string | null
      excerpt: string | null
      content: string | null
      imageUrl: string | null
      viewCount: number
      createdAt: Date
      updatedAt: Date
      disciplineId: string | null
    }, ExtArgs["result"]["newsArticle"]>
    composites: {}
  }

  type NewsArticleGetPayload<S extends boolean | null | undefined | NewsArticleDefaultArgs> = $Result.GetResult<Prisma.$NewsArticlePayload, S>

  type NewsArticleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewsArticleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsArticleCountAggregateInputType | true
    }

  export interface NewsArticleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NewsArticle'], meta: { name: 'NewsArticle' } }
    /**
     * Find zero or one NewsArticle that matches the filter.
     * @param {NewsArticleFindUniqueArgs} args - Arguments to find a NewsArticle
     * @example
     * // Get one NewsArticle
     * const newsArticle = await prisma.newsArticle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsArticleFindUniqueArgs>(args: SelectSubset<T, NewsArticleFindUniqueArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NewsArticle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewsArticleFindUniqueOrThrowArgs} args - Arguments to find a NewsArticle
     * @example
     * // Get one NewsArticle
     * const newsArticle = await prisma.newsArticle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsArticleFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsArticleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsArticle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleFindFirstArgs} args - Arguments to find a NewsArticle
     * @example
     * // Get one NewsArticle
     * const newsArticle = await prisma.newsArticle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsArticleFindFirstArgs>(args?: SelectSubset<T, NewsArticleFindFirstArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsArticle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleFindFirstOrThrowArgs} args - Arguments to find a NewsArticle
     * @example
     * // Get one NewsArticle
     * const newsArticle = await prisma.newsArticle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsArticleFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsArticleFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NewsArticles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NewsArticles
     * const newsArticles = await prisma.newsArticle.findMany()
     * 
     * // Get first 10 NewsArticles
     * const newsArticles = await prisma.newsArticle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsArticleWithIdOnly = await prisma.newsArticle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsArticleFindManyArgs>(args?: SelectSubset<T, NewsArticleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NewsArticle.
     * @param {NewsArticleCreateArgs} args - Arguments to create a NewsArticle.
     * @example
     * // Create one NewsArticle
     * const NewsArticle = await prisma.newsArticle.create({
     *   data: {
     *     // ... data to create a NewsArticle
     *   }
     * })
     * 
     */
    create<T extends NewsArticleCreateArgs>(args: SelectSubset<T, NewsArticleCreateArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NewsArticles.
     * @param {NewsArticleCreateManyArgs} args - Arguments to create many NewsArticles.
     * @example
     * // Create many NewsArticles
     * const newsArticle = await prisma.newsArticle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsArticleCreateManyArgs>(args?: SelectSubset<T, NewsArticleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NewsArticles and returns the data saved in the database.
     * @param {NewsArticleCreateManyAndReturnArgs} args - Arguments to create many NewsArticles.
     * @example
     * // Create many NewsArticles
     * const newsArticle = await prisma.newsArticle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NewsArticles and only return the `id`
     * const newsArticleWithIdOnly = await prisma.newsArticle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsArticleCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsArticleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NewsArticle.
     * @param {NewsArticleDeleteArgs} args - Arguments to delete one NewsArticle.
     * @example
     * // Delete one NewsArticle
     * const NewsArticle = await prisma.newsArticle.delete({
     *   where: {
     *     // ... filter to delete one NewsArticle
     *   }
     * })
     * 
     */
    delete<T extends NewsArticleDeleteArgs>(args: SelectSubset<T, NewsArticleDeleteArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NewsArticle.
     * @param {NewsArticleUpdateArgs} args - Arguments to update one NewsArticle.
     * @example
     * // Update one NewsArticle
     * const newsArticle = await prisma.newsArticle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsArticleUpdateArgs>(args: SelectSubset<T, NewsArticleUpdateArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NewsArticles.
     * @param {NewsArticleDeleteManyArgs} args - Arguments to filter NewsArticles to delete.
     * @example
     * // Delete a few NewsArticles
     * const { count } = await prisma.newsArticle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsArticleDeleteManyArgs>(args?: SelectSubset<T, NewsArticleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsArticles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NewsArticles
     * const newsArticle = await prisma.newsArticle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsArticleUpdateManyArgs>(args: SelectSubset<T, NewsArticleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsArticles and returns the data updated in the database.
     * @param {NewsArticleUpdateManyAndReturnArgs} args - Arguments to update many NewsArticles.
     * @example
     * // Update many NewsArticles
     * const newsArticle = await prisma.newsArticle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NewsArticles and only return the `id`
     * const newsArticleWithIdOnly = await prisma.newsArticle.updateManyAndReturn({
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
    updateManyAndReturn<T extends NewsArticleUpdateManyAndReturnArgs>(args: SelectSubset<T, NewsArticleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NewsArticle.
     * @param {NewsArticleUpsertArgs} args - Arguments to update or create a NewsArticle.
     * @example
     * // Update or create a NewsArticle
     * const newsArticle = await prisma.newsArticle.upsert({
     *   create: {
     *     // ... data to create a NewsArticle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NewsArticle we want to update
     *   }
     * })
     */
    upsert<T extends NewsArticleUpsertArgs>(args: SelectSubset<T, NewsArticleUpsertArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NewsArticles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleCountArgs} args - Arguments to filter NewsArticles to count.
     * @example
     * // Count the number of NewsArticles
     * const count = await prisma.newsArticle.count({
     *   where: {
     *     // ... the filter for the NewsArticles we want to count
     *   }
     * })
    **/
    count<T extends NewsArticleCountArgs>(
      args?: Subset<T, NewsArticleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsArticleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NewsArticle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NewsArticleAggregateArgs>(args: Subset<T, NewsArticleAggregateArgs>): Prisma.PrismaPromise<GetNewsArticleAggregateType<T>>

    /**
     * Group by NewsArticle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleGroupByArgs} args - Group by arguments.
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
      T extends NewsArticleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsArticleGroupByArgs['orderBy'] }
        : { orderBy?: NewsArticleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NewsArticleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsArticleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NewsArticle model
   */
  readonly fields: NewsArticleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NewsArticle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsArticleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    discipline<T extends NewsArticle$disciplineArgs<ExtArgs> = {}>(args?: Subset<T, NewsArticle$disciplineArgs<ExtArgs>>): Prisma__DisciplineClient<$Result.GetResult<Prisma.$DisciplinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the NewsArticle model
   */
  interface NewsArticleFieldRefs {
    readonly id: FieldRef<"NewsArticle", 'String'>
    readonly title: FieldRef<"NewsArticle", 'String'>
    readonly slug: FieldRef<"NewsArticle", 'String'>
    readonly category: FieldRef<"NewsArticle", 'String'>
    readonly author: FieldRef<"NewsArticle", 'String'>
    readonly publicationDate: FieldRef<"NewsArticle", 'DateTime'>
    readonly status: FieldRef<"NewsArticle", 'NewsStatus'>
    readonly summary: FieldRef<"NewsArticle", 'String'>
    readonly excerpt: FieldRef<"NewsArticle", 'String'>
    readonly content: FieldRef<"NewsArticle", 'String'>
    readonly imageUrl: FieldRef<"NewsArticle", 'String'>
    readonly viewCount: FieldRef<"NewsArticle", 'Int'>
    readonly createdAt: FieldRef<"NewsArticle", 'DateTime'>
    readonly updatedAt: FieldRef<"NewsArticle", 'DateTime'>
    readonly disciplineId: FieldRef<"NewsArticle", 'String'>
  }
    

  // Custom InputTypes
  /**
   * NewsArticle findUnique
   */
  export type NewsArticleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    /**
     * Filter, which NewsArticle to fetch.
     */
    where: NewsArticleWhereUniqueInput
  }

  /**
   * NewsArticle findUniqueOrThrow
   */
  export type NewsArticleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    /**
     * Filter, which NewsArticle to fetch.
     */
    where: NewsArticleWhereUniqueInput
  }

  /**
   * NewsArticle findFirst
   */
  export type NewsArticleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    /**
     * Filter, which NewsArticle to fetch.
     */
    where?: NewsArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsArticles to fetch.
     */
    orderBy?: NewsArticleOrderByWithRelationInput | NewsArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsArticles.
     */
    cursor?: NewsArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsArticles.
     */
    distinct?: NewsArticleScalarFieldEnum | NewsArticleScalarFieldEnum[]
  }

  /**
   * NewsArticle findFirstOrThrow
   */
  export type NewsArticleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    /**
     * Filter, which NewsArticle to fetch.
     */
    where?: NewsArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsArticles to fetch.
     */
    orderBy?: NewsArticleOrderByWithRelationInput | NewsArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsArticles.
     */
    cursor?: NewsArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsArticles.
     */
    distinct?: NewsArticleScalarFieldEnum | NewsArticleScalarFieldEnum[]
  }

  /**
   * NewsArticle findMany
   */
  export type NewsArticleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    /**
     * Filter, which NewsArticles to fetch.
     */
    where?: NewsArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsArticles to fetch.
     */
    orderBy?: NewsArticleOrderByWithRelationInput | NewsArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NewsArticles.
     */
    cursor?: NewsArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsArticles.
     */
    skip?: number
    distinct?: NewsArticleScalarFieldEnum | NewsArticleScalarFieldEnum[]
  }

  /**
   * NewsArticle create
   */
  export type NewsArticleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    /**
     * The data needed to create a NewsArticle.
     */
    data: XOR<NewsArticleCreateInput, NewsArticleUncheckedCreateInput>
  }

  /**
   * NewsArticle createMany
   */
  export type NewsArticleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NewsArticles.
     */
    data: NewsArticleCreateManyInput | NewsArticleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsArticle createManyAndReturn
   */
  export type NewsArticleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * The data used to create many NewsArticles.
     */
    data: NewsArticleCreateManyInput | NewsArticleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NewsArticle update
   */
  export type NewsArticleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    /**
     * The data needed to update a NewsArticle.
     */
    data: XOR<NewsArticleUpdateInput, NewsArticleUncheckedUpdateInput>
    /**
     * Choose, which NewsArticle to update.
     */
    where: NewsArticleWhereUniqueInput
  }

  /**
   * NewsArticle updateMany
   */
  export type NewsArticleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NewsArticles.
     */
    data: XOR<NewsArticleUpdateManyMutationInput, NewsArticleUncheckedUpdateManyInput>
    /**
     * Filter which NewsArticles to update
     */
    where?: NewsArticleWhereInput
    /**
     * Limit how many NewsArticles to update.
     */
    limit?: number
  }

  /**
   * NewsArticle updateManyAndReturn
   */
  export type NewsArticleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * The data used to update NewsArticles.
     */
    data: XOR<NewsArticleUpdateManyMutationInput, NewsArticleUncheckedUpdateManyInput>
    /**
     * Filter which NewsArticles to update
     */
    where?: NewsArticleWhereInput
    /**
     * Limit how many NewsArticles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NewsArticle upsert
   */
  export type NewsArticleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    /**
     * The filter to search for the NewsArticle to update in case it exists.
     */
    where: NewsArticleWhereUniqueInput
    /**
     * In case the NewsArticle found by the `where` argument doesn't exist, create a new NewsArticle with this data.
     */
    create: XOR<NewsArticleCreateInput, NewsArticleUncheckedCreateInput>
    /**
     * In case the NewsArticle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsArticleUpdateInput, NewsArticleUncheckedUpdateInput>
  }

  /**
   * NewsArticle delete
   */
  export type NewsArticleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    /**
     * Filter which NewsArticle to delete.
     */
    where: NewsArticleWhereUniqueInput
  }

  /**
   * NewsArticle deleteMany
   */
  export type NewsArticleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsArticles to delete
     */
    where?: NewsArticleWhereInput
    /**
     * Limit how many NewsArticles to delete.
     */
    limit?: number
  }

  /**
   * NewsArticle.discipline
   */
  export type NewsArticle$disciplineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discipline
     */
    select?: DisciplineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discipline
     */
    omit?: DisciplineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineInclude<ExtArgs> | null
    where?: DisciplineWhereInput
  }

  /**
   * NewsArticle without action
   */
  export type NewsArticleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
  }


  /**
   * Model Discipline
   */

  export type AggregateDiscipline = {
    _count: DisciplineCountAggregateOutputType | null
    _avg: DisciplineAvgAggregateOutputType | null
    _sum: DisciplineSumAggregateOutputType | null
    _min: DisciplineMinAggregateOutputType | null
    _max: DisciplineMaxAggregateOutputType | null
  }

  export type DisciplineAvgAggregateOutputType = {
    displayOrder: number | null
  }

  export type DisciplineSumAggregateOutputType = {
    displayOrder: number | null
  }

  export type DisciplineMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    mainImageUrl: string | null
    isActive: boolean | null
    displayOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DisciplineMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    mainImageUrl: string | null
    isActive: boolean | null
    displayOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DisciplineCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    description: number
    mainImageUrl: number
    isActive: number
    displayOrder: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DisciplineAvgAggregateInputType = {
    displayOrder?: true
  }

  export type DisciplineSumAggregateInputType = {
    displayOrder?: true
  }

  export type DisciplineMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    mainImageUrl?: true
    isActive?: true
    displayOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DisciplineMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    mainImageUrl?: true
    isActive?: true
    displayOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DisciplineCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    mainImageUrl?: true
    isActive?: true
    displayOrder?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DisciplineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Discipline to aggregate.
     */
    where?: DisciplineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disciplines to fetch.
     */
    orderBy?: DisciplineOrderByWithRelationInput | DisciplineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DisciplineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disciplines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disciplines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Disciplines
    **/
    _count?: true | DisciplineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DisciplineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DisciplineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DisciplineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DisciplineMaxAggregateInputType
  }

  export type GetDisciplineAggregateType<T extends DisciplineAggregateArgs> = {
        [P in keyof T & keyof AggregateDiscipline]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiscipline[P]>
      : GetScalarType<T[P], AggregateDiscipline[P]>
  }




  export type DisciplineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisciplineWhereInput
    orderBy?: DisciplineOrderByWithAggregationInput | DisciplineOrderByWithAggregationInput[]
    by: DisciplineScalarFieldEnum[] | DisciplineScalarFieldEnum
    having?: DisciplineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DisciplineCountAggregateInputType | true
    _avg?: DisciplineAvgAggregateInputType
    _sum?: DisciplineSumAggregateInputType
    _min?: DisciplineMinAggregateInputType
    _max?: DisciplineMaxAggregateInputType
  }

  export type DisciplineGroupByOutputType = {
    id: string
    name: string
    slug: string
    description: string
    mainImageUrl: string | null
    isActive: boolean
    displayOrder: number
    createdAt: Date
    updatedAt: Date
    _count: DisciplineCountAggregateOutputType | null
    _avg: DisciplineAvgAggregateOutputType | null
    _sum: DisciplineSumAggregateOutputType | null
    _min: DisciplineMinAggregateOutputType | null
    _max: DisciplineMaxAggregateOutputType | null
  }

  type GetDisciplineGroupByPayload<T extends DisciplineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DisciplineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DisciplineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DisciplineGroupByOutputType[P]>
            : GetScalarType<T[P], DisciplineGroupByOutputType[P]>
        }
      >
    >


  export type DisciplineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    mainImageUrl?: boolean
    isActive?: boolean
    displayOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categories?: boolean | Discipline$categoriesArgs<ExtArgs>
    quickLinks?: boolean | Discipline$quickLinksArgs<ExtArgs>
    contactInfo?: boolean | Discipline$contactInfoArgs<ExtArgs>
    relatedNews?: boolean | Discipline$relatedNewsArgs<ExtArgs>
    events?: boolean | Discipline$eventsArgs<ExtArgs>
    _count?: boolean | DisciplineCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["discipline"]>

  export type DisciplineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    mainImageUrl?: boolean
    isActive?: boolean
    displayOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["discipline"]>

  export type DisciplineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    mainImageUrl?: boolean
    isActive?: boolean
    displayOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["discipline"]>

  export type DisciplineSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    mainImageUrl?: boolean
    isActive?: boolean
    displayOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DisciplineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "description" | "mainImageUrl" | "isActive" | "displayOrder" | "createdAt" | "updatedAt", ExtArgs["result"]["discipline"]>
  export type DisciplineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | Discipline$categoriesArgs<ExtArgs>
    quickLinks?: boolean | Discipline$quickLinksArgs<ExtArgs>
    contactInfo?: boolean | Discipline$contactInfoArgs<ExtArgs>
    relatedNews?: boolean | Discipline$relatedNewsArgs<ExtArgs>
    events?: boolean | Discipline$eventsArgs<ExtArgs>
    _count?: boolean | DisciplineCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DisciplineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DisciplineIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DisciplinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Discipline"
    objects: {
      categories: Prisma.$DisciplineCategoryPayload<ExtArgs>[]
      quickLinks: Prisma.$DisciplineQuickLinkPayload<ExtArgs>[]
      contactInfo: Prisma.$DisciplineContactInfoPayload<ExtArgs> | null
      relatedNews: Prisma.$NewsArticlePayload<ExtArgs>[]
      events: Prisma.$EventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      description: string
      mainImageUrl: string | null
      isActive: boolean
      displayOrder: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["discipline"]>
    composites: {}
  }

  type DisciplineGetPayload<S extends boolean | null | undefined | DisciplineDefaultArgs> = $Result.GetResult<Prisma.$DisciplinePayload, S>

  type DisciplineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DisciplineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DisciplineCountAggregateInputType | true
    }

  export interface DisciplineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Discipline'], meta: { name: 'Discipline' } }
    /**
     * Find zero or one Discipline that matches the filter.
     * @param {DisciplineFindUniqueArgs} args - Arguments to find a Discipline
     * @example
     * // Get one Discipline
     * const discipline = await prisma.discipline.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DisciplineFindUniqueArgs>(args: SelectSubset<T, DisciplineFindUniqueArgs<ExtArgs>>): Prisma__DisciplineClient<$Result.GetResult<Prisma.$DisciplinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Discipline that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DisciplineFindUniqueOrThrowArgs} args - Arguments to find a Discipline
     * @example
     * // Get one Discipline
     * const discipline = await prisma.discipline.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DisciplineFindUniqueOrThrowArgs>(args: SelectSubset<T, DisciplineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DisciplineClient<$Result.GetResult<Prisma.$DisciplinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Discipline that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplineFindFirstArgs} args - Arguments to find a Discipline
     * @example
     * // Get one Discipline
     * const discipline = await prisma.discipline.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DisciplineFindFirstArgs>(args?: SelectSubset<T, DisciplineFindFirstArgs<ExtArgs>>): Prisma__DisciplineClient<$Result.GetResult<Prisma.$DisciplinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Discipline that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplineFindFirstOrThrowArgs} args - Arguments to find a Discipline
     * @example
     * // Get one Discipline
     * const discipline = await prisma.discipline.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DisciplineFindFirstOrThrowArgs>(args?: SelectSubset<T, DisciplineFindFirstOrThrowArgs<ExtArgs>>): Prisma__DisciplineClient<$Result.GetResult<Prisma.$DisciplinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Disciplines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Disciplines
     * const disciplines = await prisma.discipline.findMany()
     * 
     * // Get first 10 Disciplines
     * const disciplines = await prisma.discipline.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const disciplineWithIdOnly = await prisma.discipline.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DisciplineFindManyArgs>(args?: SelectSubset<T, DisciplineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisciplinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Discipline.
     * @param {DisciplineCreateArgs} args - Arguments to create a Discipline.
     * @example
     * // Create one Discipline
     * const Discipline = await prisma.discipline.create({
     *   data: {
     *     // ... data to create a Discipline
     *   }
     * })
     * 
     */
    create<T extends DisciplineCreateArgs>(args: SelectSubset<T, DisciplineCreateArgs<ExtArgs>>): Prisma__DisciplineClient<$Result.GetResult<Prisma.$DisciplinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Disciplines.
     * @param {DisciplineCreateManyArgs} args - Arguments to create many Disciplines.
     * @example
     * // Create many Disciplines
     * const discipline = await prisma.discipline.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DisciplineCreateManyArgs>(args?: SelectSubset<T, DisciplineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Disciplines and returns the data saved in the database.
     * @param {DisciplineCreateManyAndReturnArgs} args - Arguments to create many Disciplines.
     * @example
     * // Create many Disciplines
     * const discipline = await prisma.discipline.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Disciplines and only return the `id`
     * const disciplineWithIdOnly = await prisma.discipline.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DisciplineCreateManyAndReturnArgs>(args?: SelectSubset<T, DisciplineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisciplinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Discipline.
     * @param {DisciplineDeleteArgs} args - Arguments to delete one Discipline.
     * @example
     * // Delete one Discipline
     * const Discipline = await prisma.discipline.delete({
     *   where: {
     *     // ... filter to delete one Discipline
     *   }
     * })
     * 
     */
    delete<T extends DisciplineDeleteArgs>(args: SelectSubset<T, DisciplineDeleteArgs<ExtArgs>>): Prisma__DisciplineClient<$Result.GetResult<Prisma.$DisciplinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Discipline.
     * @param {DisciplineUpdateArgs} args - Arguments to update one Discipline.
     * @example
     * // Update one Discipline
     * const discipline = await prisma.discipline.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DisciplineUpdateArgs>(args: SelectSubset<T, DisciplineUpdateArgs<ExtArgs>>): Prisma__DisciplineClient<$Result.GetResult<Prisma.$DisciplinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Disciplines.
     * @param {DisciplineDeleteManyArgs} args - Arguments to filter Disciplines to delete.
     * @example
     * // Delete a few Disciplines
     * const { count } = await prisma.discipline.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DisciplineDeleteManyArgs>(args?: SelectSubset<T, DisciplineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Disciplines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Disciplines
     * const discipline = await prisma.discipline.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DisciplineUpdateManyArgs>(args: SelectSubset<T, DisciplineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Disciplines and returns the data updated in the database.
     * @param {DisciplineUpdateManyAndReturnArgs} args - Arguments to update many Disciplines.
     * @example
     * // Update many Disciplines
     * const discipline = await prisma.discipline.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Disciplines and only return the `id`
     * const disciplineWithIdOnly = await prisma.discipline.updateManyAndReturn({
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
    updateManyAndReturn<T extends DisciplineUpdateManyAndReturnArgs>(args: SelectSubset<T, DisciplineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisciplinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Discipline.
     * @param {DisciplineUpsertArgs} args - Arguments to update or create a Discipline.
     * @example
     * // Update or create a Discipline
     * const discipline = await prisma.discipline.upsert({
     *   create: {
     *     // ... data to create a Discipline
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Discipline we want to update
     *   }
     * })
     */
    upsert<T extends DisciplineUpsertArgs>(args: SelectSubset<T, DisciplineUpsertArgs<ExtArgs>>): Prisma__DisciplineClient<$Result.GetResult<Prisma.$DisciplinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Disciplines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplineCountArgs} args - Arguments to filter Disciplines to count.
     * @example
     * // Count the number of Disciplines
     * const count = await prisma.discipline.count({
     *   where: {
     *     // ... the filter for the Disciplines we want to count
     *   }
     * })
    **/
    count<T extends DisciplineCountArgs>(
      args?: Subset<T, DisciplineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DisciplineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Discipline.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DisciplineAggregateArgs>(args: Subset<T, DisciplineAggregateArgs>): Prisma.PrismaPromise<GetDisciplineAggregateType<T>>

    /**
     * Group by Discipline.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplineGroupByArgs} args - Group by arguments.
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
      T extends DisciplineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DisciplineGroupByArgs['orderBy'] }
        : { orderBy?: DisciplineGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DisciplineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDisciplineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Discipline model
   */
  readonly fields: DisciplineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Discipline.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DisciplineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categories<T extends Discipline$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Discipline$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisciplineCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    quickLinks<T extends Discipline$quickLinksArgs<ExtArgs> = {}>(args?: Subset<T, Discipline$quickLinksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisciplineQuickLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contactInfo<T extends Discipline$contactInfoArgs<ExtArgs> = {}>(args?: Subset<T, Discipline$contactInfoArgs<ExtArgs>>): Prisma__DisciplineContactInfoClient<$Result.GetResult<Prisma.$DisciplineContactInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    relatedNews<T extends Discipline$relatedNewsArgs<ExtArgs> = {}>(args?: Subset<T, Discipline$relatedNewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    events<T extends Discipline$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Discipline$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Discipline model
   */
  interface DisciplineFieldRefs {
    readonly id: FieldRef<"Discipline", 'String'>
    readonly name: FieldRef<"Discipline", 'String'>
    readonly slug: FieldRef<"Discipline", 'String'>
    readonly description: FieldRef<"Discipline", 'String'>
    readonly mainImageUrl: FieldRef<"Discipline", 'String'>
    readonly isActive: FieldRef<"Discipline", 'Boolean'>
    readonly displayOrder: FieldRef<"Discipline", 'Int'>
    readonly createdAt: FieldRef<"Discipline", 'DateTime'>
    readonly updatedAt: FieldRef<"Discipline", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Discipline findUnique
   */
  export type DisciplineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discipline
     */
    select?: DisciplineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discipline
     */
    omit?: DisciplineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineInclude<ExtArgs> | null
    /**
     * Filter, which Discipline to fetch.
     */
    where: DisciplineWhereUniqueInput
  }

  /**
   * Discipline findUniqueOrThrow
   */
  export type DisciplineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discipline
     */
    select?: DisciplineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discipline
     */
    omit?: DisciplineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineInclude<ExtArgs> | null
    /**
     * Filter, which Discipline to fetch.
     */
    where: DisciplineWhereUniqueInput
  }

  /**
   * Discipline findFirst
   */
  export type DisciplineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discipline
     */
    select?: DisciplineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discipline
     */
    omit?: DisciplineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineInclude<ExtArgs> | null
    /**
     * Filter, which Discipline to fetch.
     */
    where?: DisciplineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disciplines to fetch.
     */
    orderBy?: DisciplineOrderByWithRelationInput | DisciplineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Disciplines.
     */
    cursor?: DisciplineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disciplines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disciplines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Disciplines.
     */
    distinct?: DisciplineScalarFieldEnum | DisciplineScalarFieldEnum[]
  }

  /**
   * Discipline findFirstOrThrow
   */
  export type DisciplineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discipline
     */
    select?: DisciplineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discipline
     */
    omit?: DisciplineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineInclude<ExtArgs> | null
    /**
     * Filter, which Discipline to fetch.
     */
    where?: DisciplineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disciplines to fetch.
     */
    orderBy?: DisciplineOrderByWithRelationInput | DisciplineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Disciplines.
     */
    cursor?: DisciplineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disciplines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disciplines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Disciplines.
     */
    distinct?: DisciplineScalarFieldEnum | DisciplineScalarFieldEnum[]
  }

  /**
   * Discipline findMany
   */
  export type DisciplineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discipline
     */
    select?: DisciplineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discipline
     */
    omit?: DisciplineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineInclude<ExtArgs> | null
    /**
     * Filter, which Disciplines to fetch.
     */
    where?: DisciplineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disciplines to fetch.
     */
    orderBy?: DisciplineOrderByWithRelationInput | DisciplineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Disciplines.
     */
    cursor?: DisciplineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disciplines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disciplines.
     */
    skip?: number
    distinct?: DisciplineScalarFieldEnum | DisciplineScalarFieldEnum[]
  }

  /**
   * Discipline create
   */
  export type DisciplineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discipline
     */
    select?: DisciplineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discipline
     */
    omit?: DisciplineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineInclude<ExtArgs> | null
    /**
     * The data needed to create a Discipline.
     */
    data: XOR<DisciplineCreateInput, DisciplineUncheckedCreateInput>
  }

  /**
   * Discipline createMany
   */
  export type DisciplineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Disciplines.
     */
    data: DisciplineCreateManyInput | DisciplineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Discipline createManyAndReturn
   */
  export type DisciplineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discipline
     */
    select?: DisciplineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Discipline
     */
    omit?: DisciplineOmit<ExtArgs> | null
    /**
     * The data used to create many Disciplines.
     */
    data: DisciplineCreateManyInput | DisciplineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Discipline update
   */
  export type DisciplineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discipline
     */
    select?: DisciplineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discipline
     */
    omit?: DisciplineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineInclude<ExtArgs> | null
    /**
     * The data needed to update a Discipline.
     */
    data: XOR<DisciplineUpdateInput, DisciplineUncheckedUpdateInput>
    /**
     * Choose, which Discipline to update.
     */
    where: DisciplineWhereUniqueInput
  }

  /**
   * Discipline updateMany
   */
  export type DisciplineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Disciplines.
     */
    data: XOR<DisciplineUpdateManyMutationInput, DisciplineUncheckedUpdateManyInput>
    /**
     * Filter which Disciplines to update
     */
    where?: DisciplineWhereInput
    /**
     * Limit how many Disciplines to update.
     */
    limit?: number
  }

  /**
   * Discipline updateManyAndReturn
   */
  export type DisciplineUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discipline
     */
    select?: DisciplineSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Discipline
     */
    omit?: DisciplineOmit<ExtArgs> | null
    /**
     * The data used to update Disciplines.
     */
    data: XOR<DisciplineUpdateManyMutationInput, DisciplineUncheckedUpdateManyInput>
    /**
     * Filter which Disciplines to update
     */
    where?: DisciplineWhereInput
    /**
     * Limit how many Disciplines to update.
     */
    limit?: number
  }

  /**
   * Discipline upsert
   */
  export type DisciplineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discipline
     */
    select?: DisciplineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discipline
     */
    omit?: DisciplineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineInclude<ExtArgs> | null
    /**
     * The filter to search for the Discipline to update in case it exists.
     */
    where: DisciplineWhereUniqueInput
    /**
     * In case the Discipline found by the `where` argument doesn't exist, create a new Discipline with this data.
     */
    create: XOR<DisciplineCreateInput, DisciplineUncheckedCreateInput>
    /**
     * In case the Discipline was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DisciplineUpdateInput, DisciplineUncheckedUpdateInput>
  }

  /**
   * Discipline delete
   */
  export type DisciplineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discipline
     */
    select?: DisciplineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discipline
     */
    omit?: DisciplineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineInclude<ExtArgs> | null
    /**
     * Filter which Discipline to delete.
     */
    where: DisciplineWhereUniqueInput
  }

  /**
   * Discipline deleteMany
   */
  export type DisciplineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Disciplines to delete
     */
    where?: DisciplineWhereInput
    /**
     * Limit how many Disciplines to delete.
     */
    limit?: number
  }

  /**
   * Discipline.categories
   */
  export type Discipline$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineCategory
     */
    select?: DisciplineCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisciplineCategory
     */
    omit?: DisciplineCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineCategoryInclude<ExtArgs> | null
    where?: DisciplineCategoryWhereInput
    orderBy?: DisciplineCategoryOrderByWithRelationInput | DisciplineCategoryOrderByWithRelationInput[]
    cursor?: DisciplineCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DisciplineCategoryScalarFieldEnum | DisciplineCategoryScalarFieldEnum[]
  }

  /**
   * Discipline.quickLinks
   */
  export type Discipline$quickLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineQuickLink
     */
    select?: DisciplineQuickLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisciplineQuickLink
     */
    omit?: DisciplineQuickLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineQuickLinkInclude<ExtArgs> | null
    where?: DisciplineQuickLinkWhereInput
    orderBy?: DisciplineQuickLinkOrderByWithRelationInput | DisciplineQuickLinkOrderByWithRelationInput[]
    cursor?: DisciplineQuickLinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DisciplineQuickLinkScalarFieldEnum | DisciplineQuickLinkScalarFieldEnum[]
  }

  /**
   * Discipline.contactInfo
   */
  export type Discipline$contactInfoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineContactInfo
     */
    select?: DisciplineContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisciplineContactInfo
     */
    omit?: DisciplineContactInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineContactInfoInclude<ExtArgs> | null
    where?: DisciplineContactInfoWhereInput
  }

  /**
   * Discipline.relatedNews
   */
  export type Discipline$relatedNewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    where?: NewsArticleWhereInput
    orderBy?: NewsArticleOrderByWithRelationInput | NewsArticleOrderByWithRelationInput[]
    cursor?: NewsArticleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NewsArticleScalarFieldEnum | NewsArticleScalarFieldEnum[]
  }

  /**
   * Discipline.events
   */
  export type Discipline$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Discipline without action
   */
  export type DisciplineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discipline
     */
    select?: DisciplineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discipline
     */
    omit?: DisciplineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineInclude<ExtArgs> | null
  }


  /**
   * Model DisciplineCategory
   */

  export type AggregateDisciplineCategory = {
    _count: DisciplineCategoryCountAggregateOutputType | null
    _avg: DisciplineCategoryAvgAggregateOutputType | null
    _sum: DisciplineCategorySumAggregateOutputType | null
    _min: DisciplineCategoryMinAggregateOutputType | null
    _max: DisciplineCategoryMaxAggregateOutputType | null
  }

  export type DisciplineCategoryAvgAggregateOutputType = {
    displayOrder: number | null
  }

  export type DisciplineCategorySumAggregateOutputType = {
    displayOrder: number | null
  }

  export type DisciplineCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    displayOrder: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    disciplineId: string | null
  }

  export type DisciplineCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    displayOrder: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    disciplineId: string | null
  }

  export type DisciplineCategoryCountAggregateOutputType = {
    id: number
    name: number
    description: number
    displayOrder: number
    isActive: number
    createdAt: number
    updatedAt: number
    disciplineId: number
    _all: number
  }


  export type DisciplineCategoryAvgAggregateInputType = {
    displayOrder?: true
  }

  export type DisciplineCategorySumAggregateInputType = {
    displayOrder?: true
  }

  export type DisciplineCategoryMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    displayOrder?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    disciplineId?: true
  }

  export type DisciplineCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    displayOrder?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    disciplineId?: true
  }

  export type DisciplineCategoryCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    displayOrder?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    disciplineId?: true
    _all?: true
  }

  export type DisciplineCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DisciplineCategory to aggregate.
     */
    where?: DisciplineCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DisciplineCategories to fetch.
     */
    orderBy?: DisciplineCategoryOrderByWithRelationInput | DisciplineCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DisciplineCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DisciplineCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DisciplineCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DisciplineCategories
    **/
    _count?: true | DisciplineCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DisciplineCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DisciplineCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DisciplineCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DisciplineCategoryMaxAggregateInputType
  }

  export type GetDisciplineCategoryAggregateType<T extends DisciplineCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateDisciplineCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDisciplineCategory[P]>
      : GetScalarType<T[P], AggregateDisciplineCategory[P]>
  }




  export type DisciplineCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisciplineCategoryWhereInput
    orderBy?: DisciplineCategoryOrderByWithAggregationInput | DisciplineCategoryOrderByWithAggregationInput[]
    by: DisciplineCategoryScalarFieldEnum[] | DisciplineCategoryScalarFieldEnum
    having?: DisciplineCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DisciplineCategoryCountAggregateInputType | true
    _avg?: DisciplineCategoryAvgAggregateInputType
    _sum?: DisciplineCategorySumAggregateInputType
    _min?: DisciplineCategoryMinAggregateInputType
    _max?: DisciplineCategoryMaxAggregateInputType
  }

  export type DisciplineCategoryGroupByOutputType = {
    id: string
    name: string
    description: string | null
    displayOrder: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    disciplineId: string
    _count: DisciplineCategoryCountAggregateOutputType | null
    _avg: DisciplineCategoryAvgAggregateOutputType | null
    _sum: DisciplineCategorySumAggregateOutputType | null
    _min: DisciplineCategoryMinAggregateOutputType | null
    _max: DisciplineCategoryMaxAggregateOutputType | null
  }

  type GetDisciplineCategoryGroupByPayload<T extends DisciplineCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DisciplineCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DisciplineCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DisciplineCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], DisciplineCategoryGroupByOutputType[P]>
        }
      >
    >


  export type DisciplineCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    displayOrder?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    disciplineId?: boolean
    discipline?: boolean | DisciplineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disciplineCategory"]>

  export type DisciplineCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    displayOrder?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    disciplineId?: boolean
    discipline?: boolean | DisciplineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disciplineCategory"]>

  export type DisciplineCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    displayOrder?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    disciplineId?: boolean
    discipline?: boolean | DisciplineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disciplineCategory"]>

  export type DisciplineCategorySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    displayOrder?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    disciplineId?: boolean
  }

  export type DisciplineCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "displayOrder" | "isActive" | "createdAt" | "updatedAt" | "disciplineId", ExtArgs["result"]["disciplineCategory"]>
  export type DisciplineCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    discipline?: boolean | DisciplineDefaultArgs<ExtArgs>
  }
  export type DisciplineCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    discipline?: boolean | DisciplineDefaultArgs<ExtArgs>
  }
  export type DisciplineCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    discipline?: boolean | DisciplineDefaultArgs<ExtArgs>
  }

  export type $DisciplineCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DisciplineCategory"
    objects: {
      discipline: Prisma.$DisciplinePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      displayOrder: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      disciplineId: string
    }, ExtArgs["result"]["disciplineCategory"]>
    composites: {}
  }

  type DisciplineCategoryGetPayload<S extends boolean | null | undefined | DisciplineCategoryDefaultArgs> = $Result.GetResult<Prisma.$DisciplineCategoryPayload, S>

  type DisciplineCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DisciplineCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DisciplineCategoryCountAggregateInputType | true
    }

  export interface DisciplineCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DisciplineCategory'], meta: { name: 'DisciplineCategory' } }
    /**
     * Find zero or one DisciplineCategory that matches the filter.
     * @param {DisciplineCategoryFindUniqueArgs} args - Arguments to find a DisciplineCategory
     * @example
     * // Get one DisciplineCategory
     * const disciplineCategory = await prisma.disciplineCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DisciplineCategoryFindUniqueArgs>(args: SelectSubset<T, DisciplineCategoryFindUniqueArgs<ExtArgs>>): Prisma__DisciplineCategoryClient<$Result.GetResult<Prisma.$DisciplineCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DisciplineCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DisciplineCategoryFindUniqueOrThrowArgs} args - Arguments to find a DisciplineCategory
     * @example
     * // Get one DisciplineCategory
     * const disciplineCategory = await prisma.disciplineCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DisciplineCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, DisciplineCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DisciplineCategoryClient<$Result.GetResult<Prisma.$DisciplineCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DisciplineCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplineCategoryFindFirstArgs} args - Arguments to find a DisciplineCategory
     * @example
     * // Get one DisciplineCategory
     * const disciplineCategory = await prisma.disciplineCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DisciplineCategoryFindFirstArgs>(args?: SelectSubset<T, DisciplineCategoryFindFirstArgs<ExtArgs>>): Prisma__DisciplineCategoryClient<$Result.GetResult<Prisma.$DisciplineCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DisciplineCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplineCategoryFindFirstOrThrowArgs} args - Arguments to find a DisciplineCategory
     * @example
     * // Get one DisciplineCategory
     * const disciplineCategory = await prisma.disciplineCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DisciplineCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, DisciplineCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__DisciplineCategoryClient<$Result.GetResult<Prisma.$DisciplineCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DisciplineCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplineCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DisciplineCategories
     * const disciplineCategories = await prisma.disciplineCategory.findMany()
     * 
     * // Get first 10 DisciplineCategories
     * const disciplineCategories = await prisma.disciplineCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const disciplineCategoryWithIdOnly = await prisma.disciplineCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DisciplineCategoryFindManyArgs>(args?: SelectSubset<T, DisciplineCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisciplineCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DisciplineCategory.
     * @param {DisciplineCategoryCreateArgs} args - Arguments to create a DisciplineCategory.
     * @example
     * // Create one DisciplineCategory
     * const DisciplineCategory = await prisma.disciplineCategory.create({
     *   data: {
     *     // ... data to create a DisciplineCategory
     *   }
     * })
     * 
     */
    create<T extends DisciplineCategoryCreateArgs>(args: SelectSubset<T, DisciplineCategoryCreateArgs<ExtArgs>>): Prisma__DisciplineCategoryClient<$Result.GetResult<Prisma.$DisciplineCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DisciplineCategories.
     * @param {DisciplineCategoryCreateManyArgs} args - Arguments to create many DisciplineCategories.
     * @example
     * // Create many DisciplineCategories
     * const disciplineCategory = await prisma.disciplineCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DisciplineCategoryCreateManyArgs>(args?: SelectSubset<T, DisciplineCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DisciplineCategories and returns the data saved in the database.
     * @param {DisciplineCategoryCreateManyAndReturnArgs} args - Arguments to create many DisciplineCategories.
     * @example
     * // Create many DisciplineCategories
     * const disciplineCategory = await prisma.disciplineCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DisciplineCategories and only return the `id`
     * const disciplineCategoryWithIdOnly = await prisma.disciplineCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DisciplineCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, DisciplineCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisciplineCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DisciplineCategory.
     * @param {DisciplineCategoryDeleteArgs} args - Arguments to delete one DisciplineCategory.
     * @example
     * // Delete one DisciplineCategory
     * const DisciplineCategory = await prisma.disciplineCategory.delete({
     *   where: {
     *     // ... filter to delete one DisciplineCategory
     *   }
     * })
     * 
     */
    delete<T extends DisciplineCategoryDeleteArgs>(args: SelectSubset<T, DisciplineCategoryDeleteArgs<ExtArgs>>): Prisma__DisciplineCategoryClient<$Result.GetResult<Prisma.$DisciplineCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DisciplineCategory.
     * @param {DisciplineCategoryUpdateArgs} args - Arguments to update one DisciplineCategory.
     * @example
     * // Update one DisciplineCategory
     * const disciplineCategory = await prisma.disciplineCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DisciplineCategoryUpdateArgs>(args: SelectSubset<T, DisciplineCategoryUpdateArgs<ExtArgs>>): Prisma__DisciplineCategoryClient<$Result.GetResult<Prisma.$DisciplineCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DisciplineCategories.
     * @param {DisciplineCategoryDeleteManyArgs} args - Arguments to filter DisciplineCategories to delete.
     * @example
     * // Delete a few DisciplineCategories
     * const { count } = await prisma.disciplineCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DisciplineCategoryDeleteManyArgs>(args?: SelectSubset<T, DisciplineCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DisciplineCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplineCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DisciplineCategories
     * const disciplineCategory = await prisma.disciplineCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DisciplineCategoryUpdateManyArgs>(args: SelectSubset<T, DisciplineCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DisciplineCategories and returns the data updated in the database.
     * @param {DisciplineCategoryUpdateManyAndReturnArgs} args - Arguments to update many DisciplineCategories.
     * @example
     * // Update many DisciplineCategories
     * const disciplineCategory = await prisma.disciplineCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DisciplineCategories and only return the `id`
     * const disciplineCategoryWithIdOnly = await prisma.disciplineCategory.updateManyAndReturn({
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
    updateManyAndReturn<T extends DisciplineCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, DisciplineCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisciplineCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DisciplineCategory.
     * @param {DisciplineCategoryUpsertArgs} args - Arguments to update or create a DisciplineCategory.
     * @example
     * // Update or create a DisciplineCategory
     * const disciplineCategory = await prisma.disciplineCategory.upsert({
     *   create: {
     *     // ... data to create a DisciplineCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DisciplineCategory we want to update
     *   }
     * })
     */
    upsert<T extends DisciplineCategoryUpsertArgs>(args: SelectSubset<T, DisciplineCategoryUpsertArgs<ExtArgs>>): Prisma__DisciplineCategoryClient<$Result.GetResult<Prisma.$DisciplineCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DisciplineCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplineCategoryCountArgs} args - Arguments to filter DisciplineCategories to count.
     * @example
     * // Count the number of DisciplineCategories
     * const count = await prisma.disciplineCategory.count({
     *   where: {
     *     // ... the filter for the DisciplineCategories we want to count
     *   }
     * })
    **/
    count<T extends DisciplineCategoryCountArgs>(
      args?: Subset<T, DisciplineCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DisciplineCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DisciplineCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplineCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DisciplineCategoryAggregateArgs>(args: Subset<T, DisciplineCategoryAggregateArgs>): Prisma.PrismaPromise<GetDisciplineCategoryAggregateType<T>>

    /**
     * Group by DisciplineCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplineCategoryGroupByArgs} args - Group by arguments.
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
      T extends DisciplineCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DisciplineCategoryGroupByArgs['orderBy'] }
        : { orderBy?: DisciplineCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DisciplineCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDisciplineCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DisciplineCategory model
   */
  readonly fields: DisciplineCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DisciplineCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DisciplineCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    discipline<T extends DisciplineDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DisciplineDefaultArgs<ExtArgs>>): Prisma__DisciplineClient<$Result.GetResult<Prisma.$DisciplinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DisciplineCategory model
   */
  interface DisciplineCategoryFieldRefs {
    readonly id: FieldRef<"DisciplineCategory", 'String'>
    readonly name: FieldRef<"DisciplineCategory", 'String'>
    readonly description: FieldRef<"DisciplineCategory", 'String'>
    readonly displayOrder: FieldRef<"DisciplineCategory", 'Int'>
    readonly isActive: FieldRef<"DisciplineCategory", 'Boolean'>
    readonly createdAt: FieldRef<"DisciplineCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"DisciplineCategory", 'DateTime'>
    readonly disciplineId: FieldRef<"DisciplineCategory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DisciplineCategory findUnique
   */
  export type DisciplineCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineCategory
     */
    select?: DisciplineCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisciplineCategory
     */
    omit?: DisciplineCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineCategoryInclude<ExtArgs> | null
    /**
     * Filter, which DisciplineCategory to fetch.
     */
    where: DisciplineCategoryWhereUniqueInput
  }

  /**
   * DisciplineCategory findUniqueOrThrow
   */
  export type DisciplineCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineCategory
     */
    select?: DisciplineCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisciplineCategory
     */
    omit?: DisciplineCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineCategoryInclude<ExtArgs> | null
    /**
     * Filter, which DisciplineCategory to fetch.
     */
    where: DisciplineCategoryWhereUniqueInput
  }

  /**
   * DisciplineCategory findFirst
   */
  export type DisciplineCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineCategory
     */
    select?: DisciplineCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisciplineCategory
     */
    omit?: DisciplineCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineCategoryInclude<ExtArgs> | null
    /**
     * Filter, which DisciplineCategory to fetch.
     */
    where?: DisciplineCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DisciplineCategories to fetch.
     */
    orderBy?: DisciplineCategoryOrderByWithRelationInput | DisciplineCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DisciplineCategories.
     */
    cursor?: DisciplineCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DisciplineCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DisciplineCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DisciplineCategories.
     */
    distinct?: DisciplineCategoryScalarFieldEnum | DisciplineCategoryScalarFieldEnum[]
  }

  /**
   * DisciplineCategory findFirstOrThrow
   */
  export type DisciplineCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineCategory
     */
    select?: DisciplineCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisciplineCategory
     */
    omit?: DisciplineCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineCategoryInclude<ExtArgs> | null
    /**
     * Filter, which DisciplineCategory to fetch.
     */
    where?: DisciplineCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DisciplineCategories to fetch.
     */
    orderBy?: DisciplineCategoryOrderByWithRelationInput | DisciplineCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DisciplineCategories.
     */
    cursor?: DisciplineCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DisciplineCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DisciplineCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DisciplineCategories.
     */
    distinct?: DisciplineCategoryScalarFieldEnum | DisciplineCategoryScalarFieldEnum[]
  }

  /**
   * DisciplineCategory findMany
   */
  export type DisciplineCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineCategory
     */
    select?: DisciplineCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisciplineCategory
     */
    omit?: DisciplineCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineCategoryInclude<ExtArgs> | null
    /**
     * Filter, which DisciplineCategories to fetch.
     */
    where?: DisciplineCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DisciplineCategories to fetch.
     */
    orderBy?: DisciplineCategoryOrderByWithRelationInput | DisciplineCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DisciplineCategories.
     */
    cursor?: DisciplineCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DisciplineCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DisciplineCategories.
     */
    skip?: number
    distinct?: DisciplineCategoryScalarFieldEnum | DisciplineCategoryScalarFieldEnum[]
  }

  /**
   * DisciplineCategory create
   */
  export type DisciplineCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineCategory
     */
    select?: DisciplineCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisciplineCategory
     */
    omit?: DisciplineCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a DisciplineCategory.
     */
    data: XOR<DisciplineCategoryCreateInput, DisciplineCategoryUncheckedCreateInput>
  }

  /**
   * DisciplineCategory createMany
   */
  export type DisciplineCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DisciplineCategories.
     */
    data: DisciplineCategoryCreateManyInput | DisciplineCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DisciplineCategory createManyAndReturn
   */
  export type DisciplineCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineCategory
     */
    select?: DisciplineCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DisciplineCategory
     */
    omit?: DisciplineCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many DisciplineCategories.
     */
    data: DisciplineCategoryCreateManyInput | DisciplineCategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineCategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DisciplineCategory update
   */
  export type DisciplineCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineCategory
     */
    select?: DisciplineCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisciplineCategory
     */
    omit?: DisciplineCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a DisciplineCategory.
     */
    data: XOR<DisciplineCategoryUpdateInput, DisciplineCategoryUncheckedUpdateInput>
    /**
     * Choose, which DisciplineCategory to update.
     */
    where: DisciplineCategoryWhereUniqueInput
  }

  /**
   * DisciplineCategory updateMany
   */
  export type DisciplineCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DisciplineCategories.
     */
    data: XOR<DisciplineCategoryUpdateManyMutationInput, DisciplineCategoryUncheckedUpdateManyInput>
    /**
     * Filter which DisciplineCategories to update
     */
    where?: DisciplineCategoryWhereInput
    /**
     * Limit how many DisciplineCategories to update.
     */
    limit?: number
  }

  /**
   * DisciplineCategory updateManyAndReturn
   */
  export type DisciplineCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineCategory
     */
    select?: DisciplineCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DisciplineCategory
     */
    omit?: DisciplineCategoryOmit<ExtArgs> | null
    /**
     * The data used to update DisciplineCategories.
     */
    data: XOR<DisciplineCategoryUpdateManyMutationInput, DisciplineCategoryUncheckedUpdateManyInput>
    /**
     * Filter which DisciplineCategories to update
     */
    where?: DisciplineCategoryWhereInput
    /**
     * Limit how many DisciplineCategories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineCategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DisciplineCategory upsert
   */
  export type DisciplineCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineCategory
     */
    select?: DisciplineCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisciplineCategory
     */
    omit?: DisciplineCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the DisciplineCategory to update in case it exists.
     */
    where: DisciplineCategoryWhereUniqueInput
    /**
     * In case the DisciplineCategory found by the `where` argument doesn't exist, create a new DisciplineCategory with this data.
     */
    create: XOR<DisciplineCategoryCreateInput, DisciplineCategoryUncheckedCreateInput>
    /**
     * In case the DisciplineCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DisciplineCategoryUpdateInput, DisciplineCategoryUncheckedUpdateInput>
  }

  /**
   * DisciplineCategory delete
   */
  export type DisciplineCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineCategory
     */
    select?: DisciplineCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisciplineCategory
     */
    omit?: DisciplineCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineCategoryInclude<ExtArgs> | null
    /**
     * Filter which DisciplineCategory to delete.
     */
    where: DisciplineCategoryWhereUniqueInput
  }

  /**
   * DisciplineCategory deleteMany
   */
  export type DisciplineCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DisciplineCategories to delete
     */
    where?: DisciplineCategoryWhereInput
    /**
     * Limit how many DisciplineCategories to delete.
     */
    limit?: number
  }

  /**
   * DisciplineCategory without action
   */
  export type DisciplineCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineCategory
     */
    select?: DisciplineCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisciplineCategory
     */
    omit?: DisciplineCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineCategoryInclude<ExtArgs> | null
  }


  /**
   * Model DisciplineQuickLink
   */

  export type AggregateDisciplineQuickLink = {
    _count: DisciplineQuickLinkCountAggregateOutputType | null
    _avg: DisciplineQuickLinkAvgAggregateOutputType | null
    _sum: DisciplineQuickLinkSumAggregateOutputType | null
    _min: DisciplineQuickLinkMinAggregateOutputType | null
    _max: DisciplineQuickLinkMaxAggregateOutputType | null
  }

  export type DisciplineQuickLinkAvgAggregateOutputType = {
    displayOrder: number | null
  }

  export type DisciplineQuickLinkSumAggregateOutputType = {
    displayOrder: number | null
  }

  export type DisciplineQuickLinkMinAggregateOutputType = {
    id: string | null
    title: string | null
    url: string | null
    icon: string | null
    displayOrder: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    disciplineId: string | null
  }

  export type DisciplineQuickLinkMaxAggregateOutputType = {
    id: string | null
    title: string | null
    url: string | null
    icon: string | null
    displayOrder: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    disciplineId: string | null
  }

  export type DisciplineQuickLinkCountAggregateOutputType = {
    id: number
    title: number
    url: number
    icon: number
    displayOrder: number
    isActive: number
    createdAt: number
    updatedAt: number
    disciplineId: number
    _all: number
  }


  export type DisciplineQuickLinkAvgAggregateInputType = {
    displayOrder?: true
  }

  export type DisciplineQuickLinkSumAggregateInputType = {
    displayOrder?: true
  }

  export type DisciplineQuickLinkMinAggregateInputType = {
    id?: true
    title?: true
    url?: true
    icon?: true
    displayOrder?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    disciplineId?: true
  }

  export type DisciplineQuickLinkMaxAggregateInputType = {
    id?: true
    title?: true
    url?: true
    icon?: true
    displayOrder?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    disciplineId?: true
  }

  export type DisciplineQuickLinkCountAggregateInputType = {
    id?: true
    title?: true
    url?: true
    icon?: true
    displayOrder?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    disciplineId?: true
    _all?: true
  }

  export type DisciplineQuickLinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DisciplineQuickLink to aggregate.
     */
    where?: DisciplineQuickLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DisciplineQuickLinks to fetch.
     */
    orderBy?: DisciplineQuickLinkOrderByWithRelationInput | DisciplineQuickLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DisciplineQuickLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DisciplineQuickLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DisciplineQuickLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DisciplineQuickLinks
    **/
    _count?: true | DisciplineQuickLinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DisciplineQuickLinkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DisciplineQuickLinkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DisciplineQuickLinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DisciplineQuickLinkMaxAggregateInputType
  }

  export type GetDisciplineQuickLinkAggregateType<T extends DisciplineQuickLinkAggregateArgs> = {
        [P in keyof T & keyof AggregateDisciplineQuickLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDisciplineQuickLink[P]>
      : GetScalarType<T[P], AggregateDisciplineQuickLink[P]>
  }




  export type DisciplineQuickLinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisciplineQuickLinkWhereInput
    orderBy?: DisciplineQuickLinkOrderByWithAggregationInput | DisciplineQuickLinkOrderByWithAggregationInput[]
    by: DisciplineQuickLinkScalarFieldEnum[] | DisciplineQuickLinkScalarFieldEnum
    having?: DisciplineQuickLinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DisciplineQuickLinkCountAggregateInputType | true
    _avg?: DisciplineQuickLinkAvgAggregateInputType
    _sum?: DisciplineQuickLinkSumAggregateInputType
    _min?: DisciplineQuickLinkMinAggregateInputType
    _max?: DisciplineQuickLinkMaxAggregateInputType
  }

  export type DisciplineQuickLinkGroupByOutputType = {
    id: string
    title: string
    url: string | null
    icon: string | null
    displayOrder: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    disciplineId: string
    _count: DisciplineQuickLinkCountAggregateOutputType | null
    _avg: DisciplineQuickLinkAvgAggregateOutputType | null
    _sum: DisciplineQuickLinkSumAggregateOutputType | null
    _min: DisciplineQuickLinkMinAggregateOutputType | null
    _max: DisciplineQuickLinkMaxAggregateOutputType | null
  }

  type GetDisciplineQuickLinkGroupByPayload<T extends DisciplineQuickLinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DisciplineQuickLinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DisciplineQuickLinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DisciplineQuickLinkGroupByOutputType[P]>
            : GetScalarType<T[P], DisciplineQuickLinkGroupByOutputType[P]>
        }
      >
    >


  export type DisciplineQuickLinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    url?: boolean
    icon?: boolean
    displayOrder?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    disciplineId?: boolean
    discipline?: boolean | DisciplineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disciplineQuickLink"]>

  export type DisciplineQuickLinkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    url?: boolean
    icon?: boolean
    displayOrder?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    disciplineId?: boolean
    discipline?: boolean | DisciplineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disciplineQuickLink"]>

  export type DisciplineQuickLinkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    url?: boolean
    icon?: boolean
    displayOrder?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    disciplineId?: boolean
    discipline?: boolean | DisciplineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disciplineQuickLink"]>

  export type DisciplineQuickLinkSelectScalar = {
    id?: boolean
    title?: boolean
    url?: boolean
    icon?: boolean
    displayOrder?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    disciplineId?: boolean
  }

  export type DisciplineQuickLinkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "url" | "icon" | "displayOrder" | "isActive" | "createdAt" | "updatedAt" | "disciplineId", ExtArgs["result"]["disciplineQuickLink"]>
  export type DisciplineQuickLinkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    discipline?: boolean | DisciplineDefaultArgs<ExtArgs>
  }
  export type DisciplineQuickLinkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    discipline?: boolean | DisciplineDefaultArgs<ExtArgs>
  }
  export type DisciplineQuickLinkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    discipline?: boolean | DisciplineDefaultArgs<ExtArgs>
  }

  export type $DisciplineQuickLinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DisciplineQuickLink"
    objects: {
      discipline: Prisma.$DisciplinePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      url: string | null
      icon: string | null
      displayOrder: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      disciplineId: string
    }, ExtArgs["result"]["disciplineQuickLink"]>
    composites: {}
  }

  type DisciplineQuickLinkGetPayload<S extends boolean | null | undefined | DisciplineQuickLinkDefaultArgs> = $Result.GetResult<Prisma.$DisciplineQuickLinkPayload, S>

  type DisciplineQuickLinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DisciplineQuickLinkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DisciplineQuickLinkCountAggregateInputType | true
    }

  export interface DisciplineQuickLinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DisciplineQuickLink'], meta: { name: 'DisciplineQuickLink' } }
    /**
     * Find zero or one DisciplineQuickLink that matches the filter.
     * @param {DisciplineQuickLinkFindUniqueArgs} args - Arguments to find a DisciplineQuickLink
     * @example
     * // Get one DisciplineQuickLink
     * const disciplineQuickLink = await prisma.disciplineQuickLink.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DisciplineQuickLinkFindUniqueArgs>(args: SelectSubset<T, DisciplineQuickLinkFindUniqueArgs<ExtArgs>>): Prisma__DisciplineQuickLinkClient<$Result.GetResult<Prisma.$DisciplineQuickLinkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DisciplineQuickLink that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DisciplineQuickLinkFindUniqueOrThrowArgs} args - Arguments to find a DisciplineQuickLink
     * @example
     * // Get one DisciplineQuickLink
     * const disciplineQuickLink = await prisma.disciplineQuickLink.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DisciplineQuickLinkFindUniqueOrThrowArgs>(args: SelectSubset<T, DisciplineQuickLinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DisciplineQuickLinkClient<$Result.GetResult<Prisma.$DisciplineQuickLinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DisciplineQuickLink that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplineQuickLinkFindFirstArgs} args - Arguments to find a DisciplineQuickLink
     * @example
     * // Get one DisciplineQuickLink
     * const disciplineQuickLink = await prisma.disciplineQuickLink.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DisciplineQuickLinkFindFirstArgs>(args?: SelectSubset<T, DisciplineQuickLinkFindFirstArgs<ExtArgs>>): Prisma__DisciplineQuickLinkClient<$Result.GetResult<Prisma.$DisciplineQuickLinkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DisciplineQuickLink that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplineQuickLinkFindFirstOrThrowArgs} args - Arguments to find a DisciplineQuickLink
     * @example
     * // Get one DisciplineQuickLink
     * const disciplineQuickLink = await prisma.disciplineQuickLink.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DisciplineQuickLinkFindFirstOrThrowArgs>(args?: SelectSubset<T, DisciplineQuickLinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__DisciplineQuickLinkClient<$Result.GetResult<Prisma.$DisciplineQuickLinkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DisciplineQuickLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplineQuickLinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DisciplineQuickLinks
     * const disciplineQuickLinks = await prisma.disciplineQuickLink.findMany()
     * 
     * // Get first 10 DisciplineQuickLinks
     * const disciplineQuickLinks = await prisma.disciplineQuickLink.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const disciplineQuickLinkWithIdOnly = await prisma.disciplineQuickLink.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DisciplineQuickLinkFindManyArgs>(args?: SelectSubset<T, DisciplineQuickLinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisciplineQuickLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DisciplineQuickLink.
     * @param {DisciplineQuickLinkCreateArgs} args - Arguments to create a DisciplineQuickLink.
     * @example
     * // Create one DisciplineQuickLink
     * const DisciplineQuickLink = await prisma.disciplineQuickLink.create({
     *   data: {
     *     // ... data to create a DisciplineQuickLink
     *   }
     * })
     * 
     */
    create<T extends DisciplineQuickLinkCreateArgs>(args: SelectSubset<T, DisciplineQuickLinkCreateArgs<ExtArgs>>): Prisma__DisciplineQuickLinkClient<$Result.GetResult<Prisma.$DisciplineQuickLinkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DisciplineQuickLinks.
     * @param {DisciplineQuickLinkCreateManyArgs} args - Arguments to create many DisciplineQuickLinks.
     * @example
     * // Create many DisciplineQuickLinks
     * const disciplineQuickLink = await prisma.disciplineQuickLink.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DisciplineQuickLinkCreateManyArgs>(args?: SelectSubset<T, DisciplineQuickLinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DisciplineQuickLinks and returns the data saved in the database.
     * @param {DisciplineQuickLinkCreateManyAndReturnArgs} args - Arguments to create many DisciplineQuickLinks.
     * @example
     * // Create many DisciplineQuickLinks
     * const disciplineQuickLink = await prisma.disciplineQuickLink.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DisciplineQuickLinks and only return the `id`
     * const disciplineQuickLinkWithIdOnly = await prisma.disciplineQuickLink.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DisciplineQuickLinkCreateManyAndReturnArgs>(args?: SelectSubset<T, DisciplineQuickLinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisciplineQuickLinkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DisciplineQuickLink.
     * @param {DisciplineQuickLinkDeleteArgs} args - Arguments to delete one DisciplineQuickLink.
     * @example
     * // Delete one DisciplineQuickLink
     * const DisciplineQuickLink = await prisma.disciplineQuickLink.delete({
     *   where: {
     *     // ... filter to delete one DisciplineQuickLink
     *   }
     * })
     * 
     */
    delete<T extends DisciplineQuickLinkDeleteArgs>(args: SelectSubset<T, DisciplineQuickLinkDeleteArgs<ExtArgs>>): Prisma__DisciplineQuickLinkClient<$Result.GetResult<Prisma.$DisciplineQuickLinkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DisciplineQuickLink.
     * @param {DisciplineQuickLinkUpdateArgs} args - Arguments to update one DisciplineQuickLink.
     * @example
     * // Update one DisciplineQuickLink
     * const disciplineQuickLink = await prisma.disciplineQuickLink.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DisciplineQuickLinkUpdateArgs>(args: SelectSubset<T, DisciplineQuickLinkUpdateArgs<ExtArgs>>): Prisma__DisciplineQuickLinkClient<$Result.GetResult<Prisma.$DisciplineQuickLinkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DisciplineQuickLinks.
     * @param {DisciplineQuickLinkDeleteManyArgs} args - Arguments to filter DisciplineQuickLinks to delete.
     * @example
     * // Delete a few DisciplineQuickLinks
     * const { count } = await prisma.disciplineQuickLink.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DisciplineQuickLinkDeleteManyArgs>(args?: SelectSubset<T, DisciplineQuickLinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DisciplineQuickLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplineQuickLinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DisciplineQuickLinks
     * const disciplineQuickLink = await prisma.disciplineQuickLink.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DisciplineQuickLinkUpdateManyArgs>(args: SelectSubset<T, DisciplineQuickLinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DisciplineQuickLinks and returns the data updated in the database.
     * @param {DisciplineQuickLinkUpdateManyAndReturnArgs} args - Arguments to update many DisciplineQuickLinks.
     * @example
     * // Update many DisciplineQuickLinks
     * const disciplineQuickLink = await prisma.disciplineQuickLink.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DisciplineQuickLinks and only return the `id`
     * const disciplineQuickLinkWithIdOnly = await prisma.disciplineQuickLink.updateManyAndReturn({
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
    updateManyAndReturn<T extends DisciplineQuickLinkUpdateManyAndReturnArgs>(args: SelectSubset<T, DisciplineQuickLinkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisciplineQuickLinkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DisciplineQuickLink.
     * @param {DisciplineQuickLinkUpsertArgs} args - Arguments to update or create a DisciplineQuickLink.
     * @example
     * // Update or create a DisciplineQuickLink
     * const disciplineQuickLink = await prisma.disciplineQuickLink.upsert({
     *   create: {
     *     // ... data to create a DisciplineQuickLink
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DisciplineQuickLink we want to update
     *   }
     * })
     */
    upsert<T extends DisciplineQuickLinkUpsertArgs>(args: SelectSubset<T, DisciplineQuickLinkUpsertArgs<ExtArgs>>): Prisma__DisciplineQuickLinkClient<$Result.GetResult<Prisma.$DisciplineQuickLinkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DisciplineQuickLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplineQuickLinkCountArgs} args - Arguments to filter DisciplineQuickLinks to count.
     * @example
     * // Count the number of DisciplineQuickLinks
     * const count = await prisma.disciplineQuickLink.count({
     *   where: {
     *     // ... the filter for the DisciplineQuickLinks we want to count
     *   }
     * })
    **/
    count<T extends DisciplineQuickLinkCountArgs>(
      args?: Subset<T, DisciplineQuickLinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DisciplineQuickLinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DisciplineQuickLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplineQuickLinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DisciplineQuickLinkAggregateArgs>(args: Subset<T, DisciplineQuickLinkAggregateArgs>): Prisma.PrismaPromise<GetDisciplineQuickLinkAggregateType<T>>

    /**
     * Group by DisciplineQuickLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplineQuickLinkGroupByArgs} args - Group by arguments.
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
      T extends DisciplineQuickLinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DisciplineQuickLinkGroupByArgs['orderBy'] }
        : { orderBy?: DisciplineQuickLinkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DisciplineQuickLinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDisciplineQuickLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DisciplineQuickLink model
   */
  readonly fields: DisciplineQuickLinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DisciplineQuickLink.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DisciplineQuickLinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    discipline<T extends DisciplineDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DisciplineDefaultArgs<ExtArgs>>): Prisma__DisciplineClient<$Result.GetResult<Prisma.$DisciplinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DisciplineQuickLink model
   */
  interface DisciplineQuickLinkFieldRefs {
    readonly id: FieldRef<"DisciplineQuickLink", 'String'>
    readonly title: FieldRef<"DisciplineQuickLink", 'String'>
    readonly url: FieldRef<"DisciplineQuickLink", 'String'>
    readonly icon: FieldRef<"DisciplineQuickLink", 'String'>
    readonly displayOrder: FieldRef<"DisciplineQuickLink", 'Int'>
    readonly isActive: FieldRef<"DisciplineQuickLink", 'Boolean'>
    readonly createdAt: FieldRef<"DisciplineQuickLink", 'DateTime'>
    readonly updatedAt: FieldRef<"DisciplineQuickLink", 'DateTime'>
    readonly disciplineId: FieldRef<"DisciplineQuickLink", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DisciplineQuickLink findUnique
   */
  export type DisciplineQuickLinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineQuickLink
     */
    select?: DisciplineQuickLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisciplineQuickLink
     */
    omit?: DisciplineQuickLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineQuickLinkInclude<ExtArgs> | null
    /**
     * Filter, which DisciplineQuickLink to fetch.
     */
    where: DisciplineQuickLinkWhereUniqueInput
  }

  /**
   * DisciplineQuickLink findUniqueOrThrow
   */
  export type DisciplineQuickLinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineQuickLink
     */
    select?: DisciplineQuickLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisciplineQuickLink
     */
    omit?: DisciplineQuickLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineQuickLinkInclude<ExtArgs> | null
    /**
     * Filter, which DisciplineQuickLink to fetch.
     */
    where: DisciplineQuickLinkWhereUniqueInput
  }

  /**
   * DisciplineQuickLink findFirst
   */
  export type DisciplineQuickLinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineQuickLink
     */
    select?: DisciplineQuickLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisciplineQuickLink
     */
    omit?: DisciplineQuickLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineQuickLinkInclude<ExtArgs> | null
    /**
     * Filter, which DisciplineQuickLink to fetch.
     */
    where?: DisciplineQuickLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DisciplineQuickLinks to fetch.
     */
    orderBy?: DisciplineQuickLinkOrderByWithRelationInput | DisciplineQuickLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DisciplineQuickLinks.
     */
    cursor?: DisciplineQuickLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DisciplineQuickLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DisciplineQuickLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DisciplineQuickLinks.
     */
    distinct?: DisciplineQuickLinkScalarFieldEnum | DisciplineQuickLinkScalarFieldEnum[]
  }

  /**
   * DisciplineQuickLink findFirstOrThrow
   */
  export type DisciplineQuickLinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineQuickLink
     */
    select?: DisciplineQuickLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisciplineQuickLink
     */
    omit?: DisciplineQuickLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineQuickLinkInclude<ExtArgs> | null
    /**
     * Filter, which DisciplineQuickLink to fetch.
     */
    where?: DisciplineQuickLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DisciplineQuickLinks to fetch.
     */
    orderBy?: DisciplineQuickLinkOrderByWithRelationInput | DisciplineQuickLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DisciplineQuickLinks.
     */
    cursor?: DisciplineQuickLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DisciplineQuickLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DisciplineQuickLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DisciplineQuickLinks.
     */
    distinct?: DisciplineQuickLinkScalarFieldEnum | DisciplineQuickLinkScalarFieldEnum[]
  }

  /**
   * DisciplineQuickLink findMany
   */
  export type DisciplineQuickLinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineQuickLink
     */
    select?: DisciplineQuickLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisciplineQuickLink
     */
    omit?: DisciplineQuickLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineQuickLinkInclude<ExtArgs> | null
    /**
     * Filter, which DisciplineQuickLinks to fetch.
     */
    where?: DisciplineQuickLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DisciplineQuickLinks to fetch.
     */
    orderBy?: DisciplineQuickLinkOrderByWithRelationInput | DisciplineQuickLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DisciplineQuickLinks.
     */
    cursor?: DisciplineQuickLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DisciplineQuickLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DisciplineQuickLinks.
     */
    skip?: number
    distinct?: DisciplineQuickLinkScalarFieldEnum | DisciplineQuickLinkScalarFieldEnum[]
  }

  /**
   * DisciplineQuickLink create
   */
  export type DisciplineQuickLinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineQuickLink
     */
    select?: DisciplineQuickLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisciplineQuickLink
     */
    omit?: DisciplineQuickLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineQuickLinkInclude<ExtArgs> | null
    /**
     * The data needed to create a DisciplineQuickLink.
     */
    data: XOR<DisciplineQuickLinkCreateInput, DisciplineQuickLinkUncheckedCreateInput>
  }

  /**
   * DisciplineQuickLink createMany
   */
  export type DisciplineQuickLinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DisciplineQuickLinks.
     */
    data: DisciplineQuickLinkCreateManyInput | DisciplineQuickLinkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DisciplineQuickLink createManyAndReturn
   */
  export type DisciplineQuickLinkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineQuickLink
     */
    select?: DisciplineQuickLinkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DisciplineQuickLink
     */
    omit?: DisciplineQuickLinkOmit<ExtArgs> | null
    /**
     * The data used to create many DisciplineQuickLinks.
     */
    data: DisciplineQuickLinkCreateManyInput | DisciplineQuickLinkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineQuickLinkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DisciplineQuickLink update
   */
  export type DisciplineQuickLinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineQuickLink
     */
    select?: DisciplineQuickLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisciplineQuickLink
     */
    omit?: DisciplineQuickLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineQuickLinkInclude<ExtArgs> | null
    /**
     * The data needed to update a DisciplineQuickLink.
     */
    data: XOR<DisciplineQuickLinkUpdateInput, DisciplineQuickLinkUncheckedUpdateInput>
    /**
     * Choose, which DisciplineQuickLink to update.
     */
    where: DisciplineQuickLinkWhereUniqueInput
  }

  /**
   * DisciplineQuickLink updateMany
   */
  export type DisciplineQuickLinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DisciplineQuickLinks.
     */
    data: XOR<DisciplineQuickLinkUpdateManyMutationInput, DisciplineQuickLinkUncheckedUpdateManyInput>
    /**
     * Filter which DisciplineQuickLinks to update
     */
    where?: DisciplineQuickLinkWhereInput
    /**
     * Limit how many DisciplineQuickLinks to update.
     */
    limit?: number
  }

  /**
   * DisciplineQuickLink updateManyAndReturn
   */
  export type DisciplineQuickLinkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineQuickLink
     */
    select?: DisciplineQuickLinkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DisciplineQuickLink
     */
    omit?: DisciplineQuickLinkOmit<ExtArgs> | null
    /**
     * The data used to update DisciplineQuickLinks.
     */
    data: XOR<DisciplineQuickLinkUpdateManyMutationInput, DisciplineQuickLinkUncheckedUpdateManyInput>
    /**
     * Filter which DisciplineQuickLinks to update
     */
    where?: DisciplineQuickLinkWhereInput
    /**
     * Limit how many DisciplineQuickLinks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineQuickLinkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DisciplineQuickLink upsert
   */
  export type DisciplineQuickLinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineQuickLink
     */
    select?: DisciplineQuickLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisciplineQuickLink
     */
    omit?: DisciplineQuickLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineQuickLinkInclude<ExtArgs> | null
    /**
     * The filter to search for the DisciplineQuickLink to update in case it exists.
     */
    where: DisciplineQuickLinkWhereUniqueInput
    /**
     * In case the DisciplineQuickLink found by the `where` argument doesn't exist, create a new DisciplineQuickLink with this data.
     */
    create: XOR<DisciplineQuickLinkCreateInput, DisciplineQuickLinkUncheckedCreateInput>
    /**
     * In case the DisciplineQuickLink was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DisciplineQuickLinkUpdateInput, DisciplineQuickLinkUncheckedUpdateInput>
  }

  /**
   * DisciplineQuickLink delete
   */
  export type DisciplineQuickLinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineQuickLink
     */
    select?: DisciplineQuickLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisciplineQuickLink
     */
    omit?: DisciplineQuickLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineQuickLinkInclude<ExtArgs> | null
    /**
     * Filter which DisciplineQuickLink to delete.
     */
    where: DisciplineQuickLinkWhereUniqueInput
  }

  /**
   * DisciplineQuickLink deleteMany
   */
  export type DisciplineQuickLinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DisciplineQuickLinks to delete
     */
    where?: DisciplineQuickLinkWhereInput
    /**
     * Limit how many DisciplineQuickLinks to delete.
     */
    limit?: number
  }

  /**
   * DisciplineQuickLink without action
   */
  export type DisciplineQuickLinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineQuickLink
     */
    select?: DisciplineQuickLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisciplineQuickLink
     */
    omit?: DisciplineQuickLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineQuickLinkInclude<ExtArgs> | null
  }


  /**
   * Model DisciplineContactInfo
   */

  export type AggregateDisciplineContactInfo = {
    _count: DisciplineContactInfoCountAggregateOutputType | null
    _min: DisciplineContactInfoMinAggregateOutputType | null
    _max: DisciplineContactInfoMaxAggregateOutputType | null
  }

  export type DisciplineContactInfoMinAggregateOutputType = {
    id: string | null
    phone: string | null
    email: string | null
    whatsapp: string | null
    address: string | null
    schedule: string | null
    createdAt: Date | null
    updatedAt: Date | null
    disciplineId: string | null
  }

  export type DisciplineContactInfoMaxAggregateOutputType = {
    id: string | null
    phone: string | null
    email: string | null
    whatsapp: string | null
    address: string | null
    schedule: string | null
    createdAt: Date | null
    updatedAt: Date | null
    disciplineId: string | null
  }

  export type DisciplineContactInfoCountAggregateOutputType = {
    id: number
    phone: number
    email: number
    whatsapp: number
    address: number
    schedule: number
    createdAt: number
    updatedAt: number
    disciplineId: number
    _all: number
  }


  export type DisciplineContactInfoMinAggregateInputType = {
    id?: true
    phone?: true
    email?: true
    whatsapp?: true
    address?: true
    schedule?: true
    createdAt?: true
    updatedAt?: true
    disciplineId?: true
  }

  export type DisciplineContactInfoMaxAggregateInputType = {
    id?: true
    phone?: true
    email?: true
    whatsapp?: true
    address?: true
    schedule?: true
    createdAt?: true
    updatedAt?: true
    disciplineId?: true
  }

  export type DisciplineContactInfoCountAggregateInputType = {
    id?: true
    phone?: true
    email?: true
    whatsapp?: true
    address?: true
    schedule?: true
    createdAt?: true
    updatedAt?: true
    disciplineId?: true
    _all?: true
  }

  export type DisciplineContactInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DisciplineContactInfo to aggregate.
     */
    where?: DisciplineContactInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DisciplineContactInfos to fetch.
     */
    orderBy?: DisciplineContactInfoOrderByWithRelationInput | DisciplineContactInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DisciplineContactInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DisciplineContactInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DisciplineContactInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DisciplineContactInfos
    **/
    _count?: true | DisciplineContactInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DisciplineContactInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DisciplineContactInfoMaxAggregateInputType
  }

  export type GetDisciplineContactInfoAggregateType<T extends DisciplineContactInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateDisciplineContactInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDisciplineContactInfo[P]>
      : GetScalarType<T[P], AggregateDisciplineContactInfo[P]>
  }




  export type DisciplineContactInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisciplineContactInfoWhereInput
    orderBy?: DisciplineContactInfoOrderByWithAggregationInput | DisciplineContactInfoOrderByWithAggregationInput[]
    by: DisciplineContactInfoScalarFieldEnum[] | DisciplineContactInfoScalarFieldEnum
    having?: DisciplineContactInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DisciplineContactInfoCountAggregateInputType | true
    _min?: DisciplineContactInfoMinAggregateInputType
    _max?: DisciplineContactInfoMaxAggregateInputType
  }

  export type DisciplineContactInfoGroupByOutputType = {
    id: string
    phone: string | null
    email: string | null
    whatsapp: string | null
    address: string | null
    schedule: string | null
    createdAt: Date
    updatedAt: Date
    disciplineId: string
    _count: DisciplineContactInfoCountAggregateOutputType | null
    _min: DisciplineContactInfoMinAggregateOutputType | null
    _max: DisciplineContactInfoMaxAggregateOutputType | null
  }

  type GetDisciplineContactInfoGroupByPayload<T extends DisciplineContactInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DisciplineContactInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DisciplineContactInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DisciplineContactInfoGroupByOutputType[P]>
            : GetScalarType<T[P], DisciplineContactInfoGroupByOutputType[P]>
        }
      >
    >


  export type DisciplineContactInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    email?: boolean
    whatsapp?: boolean
    address?: boolean
    schedule?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    disciplineId?: boolean
    discipline?: boolean | DisciplineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disciplineContactInfo"]>

  export type DisciplineContactInfoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    email?: boolean
    whatsapp?: boolean
    address?: boolean
    schedule?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    disciplineId?: boolean
    discipline?: boolean | DisciplineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disciplineContactInfo"]>

  export type DisciplineContactInfoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    email?: boolean
    whatsapp?: boolean
    address?: boolean
    schedule?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    disciplineId?: boolean
    discipline?: boolean | DisciplineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disciplineContactInfo"]>

  export type DisciplineContactInfoSelectScalar = {
    id?: boolean
    phone?: boolean
    email?: boolean
    whatsapp?: boolean
    address?: boolean
    schedule?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    disciplineId?: boolean
  }

  export type DisciplineContactInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "phone" | "email" | "whatsapp" | "address" | "schedule" | "createdAt" | "updatedAt" | "disciplineId", ExtArgs["result"]["disciplineContactInfo"]>
  export type DisciplineContactInfoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    discipline?: boolean | DisciplineDefaultArgs<ExtArgs>
  }
  export type DisciplineContactInfoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    discipline?: boolean | DisciplineDefaultArgs<ExtArgs>
  }
  export type DisciplineContactInfoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    discipline?: boolean | DisciplineDefaultArgs<ExtArgs>
  }

  export type $DisciplineContactInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DisciplineContactInfo"
    objects: {
      discipline: Prisma.$DisciplinePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      phone: string | null
      email: string | null
      whatsapp: string | null
      address: string | null
      schedule: string | null
      createdAt: Date
      updatedAt: Date
      disciplineId: string
    }, ExtArgs["result"]["disciplineContactInfo"]>
    composites: {}
  }

  type DisciplineContactInfoGetPayload<S extends boolean | null | undefined | DisciplineContactInfoDefaultArgs> = $Result.GetResult<Prisma.$DisciplineContactInfoPayload, S>

  type DisciplineContactInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DisciplineContactInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DisciplineContactInfoCountAggregateInputType | true
    }

  export interface DisciplineContactInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DisciplineContactInfo'], meta: { name: 'DisciplineContactInfo' } }
    /**
     * Find zero or one DisciplineContactInfo that matches the filter.
     * @param {DisciplineContactInfoFindUniqueArgs} args - Arguments to find a DisciplineContactInfo
     * @example
     * // Get one DisciplineContactInfo
     * const disciplineContactInfo = await prisma.disciplineContactInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DisciplineContactInfoFindUniqueArgs>(args: SelectSubset<T, DisciplineContactInfoFindUniqueArgs<ExtArgs>>): Prisma__DisciplineContactInfoClient<$Result.GetResult<Prisma.$DisciplineContactInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DisciplineContactInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DisciplineContactInfoFindUniqueOrThrowArgs} args - Arguments to find a DisciplineContactInfo
     * @example
     * // Get one DisciplineContactInfo
     * const disciplineContactInfo = await prisma.disciplineContactInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DisciplineContactInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, DisciplineContactInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DisciplineContactInfoClient<$Result.GetResult<Prisma.$DisciplineContactInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DisciplineContactInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplineContactInfoFindFirstArgs} args - Arguments to find a DisciplineContactInfo
     * @example
     * // Get one DisciplineContactInfo
     * const disciplineContactInfo = await prisma.disciplineContactInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DisciplineContactInfoFindFirstArgs>(args?: SelectSubset<T, DisciplineContactInfoFindFirstArgs<ExtArgs>>): Prisma__DisciplineContactInfoClient<$Result.GetResult<Prisma.$DisciplineContactInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DisciplineContactInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplineContactInfoFindFirstOrThrowArgs} args - Arguments to find a DisciplineContactInfo
     * @example
     * // Get one DisciplineContactInfo
     * const disciplineContactInfo = await prisma.disciplineContactInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DisciplineContactInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, DisciplineContactInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__DisciplineContactInfoClient<$Result.GetResult<Prisma.$DisciplineContactInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DisciplineContactInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplineContactInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DisciplineContactInfos
     * const disciplineContactInfos = await prisma.disciplineContactInfo.findMany()
     * 
     * // Get first 10 DisciplineContactInfos
     * const disciplineContactInfos = await prisma.disciplineContactInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const disciplineContactInfoWithIdOnly = await prisma.disciplineContactInfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DisciplineContactInfoFindManyArgs>(args?: SelectSubset<T, DisciplineContactInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisciplineContactInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DisciplineContactInfo.
     * @param {DisciplineContactInfoCreateArgs} args - Arguments to create a DisciplineContactInfo.
     * @example
     * // Create one DisciplineContactInfo
     * const DisciplineContactInfo = await prisma.disciplineContactInfo.create({
     *   data: {
     *     // ... data to create a DisciplineContactInfo
     *   }
     * })
     * 
     */
    create<T extends DisciplineContactInfoCreateArgs>(args: SelectSubset<T, DisciplineContactInfoCreateArgs<ExtArgs>>): Prisma__DisciplineContactInfoClient<$Result.GetResult<Prisma.$DisciplineContactInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DisciplineContactInfos.
     * @param {DisciplineContactInfoCreateManyArgs} args - Arguments to create many DisciplineContactInfos.
     * @example
     * // Create many DisciplineContactInfos
     * const disciplineContactInfo = await prisma.disciplineContactInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DisciplineContactInfoCreateManyArgs>(args?: SelectSubset<T, DisciplineContactInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DisciplineContactInfos and returns the data saved in the database.
     * @param {DisciplineContactInfoCreateManyAndReturnArgs} args - Arguments to create many DisciplineContactInfos.
     * @example
     * // Create many DisciplineContactInfos
     * const disciplineContactInfo = await prisma.disciplineContactInfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DisciplineContactInfos and only return the `id`
     * const disciplineContactInfoWithIdOnly = await prisma.disciplineContactInfo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DisciplineContactInfoCreateManyAndReturnArgs>(args?: SelectSubset<T, DisciplineContactInfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisciplineContactInfoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DisciplineContactInfo.
     * @param {DisciplineContactInfoDeleteArgs} args - Arguments to delete one DisciplineContactInfo.
     * @example
     * // Delete one DisciplineContactInfo
     * const DisciplineContactInfo = await prisma.disciplineContactInfo.delete({
     *   where: {
     *     // ... filter to delete one DisciplineContactInfo
     *   }
     * })
     * 
     */
    delete<T extends DisciplineContactInfoDeleteArgs>(args: SelectSubset<T, DisciplineContactInfoDeleteArgs<ExtArgs>>): Prisma__DisciplineContactInfoClient<$Result.GetResult<Prisma.$DisciplineContactInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DisciplineContactInfo.
     * @param {DisciplineContactInfoUpdateArgs} args - Arguments to update one DisciplineContactInfo.
     * @example
     * // Update one DisciplineContactInfo
     * const disciplineContactInfo = await prisma.disciplineContactInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DisciplineContactInfoUpdateArgs>(args: SelectSubset<T, DisciplineContactInfoUpdateArgs<ExtArgs>>): Prisma__DisciplineContactInfoClient<$Result.GetResult<Prisma.$DisciplineContactInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DisciplineContactInfos.
     * @param {DisciplineContactInfoDeleteManyArgs} args - Arguments to filter DisciplineContactInfos to delete.
     * @example
     * // Delete a few DisciplineContactInfos
     * const { count } = await prisma.disciplineContactInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DisciplineContactInfoDeleteManyArgs>(args?: SelectSubset<T, DisciplineContactInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DisciplineContactInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplineContactInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DisciplineContactInfos
     * const disciplineContactInfo = await prisma.disciplineContactInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DisciplineContactInfoUpdateManyArgs>(args: SelectSubset<T, DisciplineContactInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DisciplineContactInfos and returns the data updated in the database.
     * @param {DisciplineContactInfoUpdateManyAndReturnArgs} args - Arguments to update many DisciplineContactInfos.
     * @example
     * // Update many DisciplineContactInfos
     * const disciplineContactInfo = await prisma.disciplineContactInfo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DisciplineContactInfos and only return the `id`
     * const disciplineContactInfoWithIdOnly = await prisma.disciplineContactInfo.updateManyAndReturn({
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
    updateManyAndReturn<T extends DisciplineContactInfoUpdateManyAndReturnArgs>(args: SelectSubset<T, DisciplineContactInfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisciplineContactInfoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DisciplineContactInfo.
     * @param {DisciplineContactInfoUpsertArgs} args - Arguments to update or create a DisciplineContactInfo.
     * @example
     * // Update or create a DisciplineContactInfo
     * const disciplineContactInfo = await prisma.disciplineContactInfo.upsert({
     *   create: {
     *     // ... data to create a DisciplineContactInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DisciplineContactInfo we want to update
     *   }
     * })
     */
    upsert<T extends DisciplineContactInfoUpsertArgs>(args: SelectSubset<T, DisciplineContactInfoUpsertArgs<ExtArgs>>): Prisma__DisciplineContactInfoClient<$Result.GetResult<Prisma.$DisciplineContactInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DisciplineContactInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplineContactInfoCountArgs} args - Arguments to filter DisciplineContactInfos to count.
     * @example
     * // Count the number of DisciplineContactInfos
     * const count = await prisma.disciplineContactInfo.count({
     *   where: {
     *     // ... the filter for the DisciplineContactInfos we want to count
     *   }
     * })
    **/
    count<T extends DisciplineContactInfoCountArgs>(
      args?: Subset<T, DisciplineContactInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DisciplineContactInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DisciplineContactInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplineContactInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DisciplineContactInfoAggregateArgs>(args: Subset<T, DisciplineContactInfoAggregateArgs>): Prisma.PrismaPromise<GetDisciplineContactInfoAggregateType<T>>

    /**
     * Group by DisciplineContactInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplineContactInfoGroupByArgs} args - Group by arguments.
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
      T extends DisciplineContactInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DisciplineContactInfoGroupByArgs['orderBy'] }
        : { orderBy?: DisciplineContactInfoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DisciplineContactInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDisciplineContactInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DisciplineContactInfo model
   */
  readonly fields: DisciplineContactInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DisciplineContactInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DisciplineContactInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    discipline<T extends DisciplineDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DisciplineDefaultArgs<ExtArgs>>): Prisma__DisciplineClient<$Result.GetResult<Prisma.$DisciplinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DisciplineContactInfo model
   */
  interface DisciplineContactInfoFieldRefs {
    readonly id: FieldRef<"DisciplineContactInfo", 'String'>
    readonly phone: FieldRef<"DisciplineContactInfo", 'String'>
    readonly email: FieldRef<"DisciplineContactInfo", 'String'>
    readonly whatsapp: FieldRef<"DisciplineContactInfo", 'String'>
    readonly address: FieldRef<"DisciplineContactInfo", 'String'>
    readonly schedule: FieldRef<"DisciplineContactInfo", 'String'>
    readonly createdAt: FieldRef<"DisciplineContactInfo", 'DateTime'>
    readonly updatedAt: FieldRef<"DisciplineContactInfo", 'DateTime'>
    readonly disciplineId: FieldRef<"DisciplineContactInfo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DisciplineContactInfo findUnique
   */
  export type DisciplineContactInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineContactInfo
     */
    select?: DisciplineContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisciplineContactInfo
     */
    omit?: DisciplineContactInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineContactInfoInclude<ExtArgs> | null
    /**
     * Filter, which DisciplineContactInfo to fetch.
     */
    where: DisciplineContactInfoWhereUniqueInput
  }

  /**
   * DisciplineContactInfo findUniqueOrThrow
   */
  export type DisciplineContactInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineContactInfo
     */
    select?: DisciplineContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisciplineContactInfo
     */
    omit?: DisciplineContactInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineContactInfoInclude<ExtArgs> | null
    /**
     * Filter, which DisciplineContactInfo to fetch.
     */
    where: DisciplineContactInfoWhereUniqueInput
  }

  /**
   * DisciplineContactInfo findFirst
   */
  export type DisciplineContactInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineContactInfo
     */
    select?: DisciplineContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisciplineContactInfo
     */
    omit?: DisciplineContactInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineContactInfoInclude<ExtArgs> | null
    /**
     * Filter, which DisciplineContactInfo to fetch.
     */
    where?: DisciplineContactInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DisciplineContactInfos to fetch.
     */
    orderBy?: DisciplineContactInfoOrderByWithRelationInput | DisciplineContactInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DisciplineContactInfos.
     */
    cursor?: DisciplineContactInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DisciplineContactInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DisciplineContactInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DisciplineContactInfos.
     */
    distinct?: DisciplineContactInfoScalarFieldEnum | DisciplineContactInfoScalarFieldEnum[]
  }

  /**
   * DisciplineContactInfo findFirstOrThrow
   */
  export type DisciplineContactInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineContactInfo
     */
    select?: DisciplineContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisciplineContactInfo
     */
    omit?: DisciplineContactInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineContactInfoInclude<ExtArgs> | null
    /**
     * Filter, which DisciplineContactInfo to fetch.
     */
    where?: DisciplineContactInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DisciplineContactInfos to fetch.
     */
    orderBy?: DisciplineContactInfoOrderByWithRelationInput | DisciplineContactInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DisciplineContactInfos.
     */
    cursor?: DisciplineContactInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DisciplineContactInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DisciplineContactInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DisciplineContactInfos.
     */
    distinct?: DisciplineContactInfoScalarFieldEnum | DisciplineContactInfoScalarFieldEnum[]
  }

  /**
   * DisciplineContactInfo findMany
   */
  export type DisciplineContactInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineContactInfo
     */
    select?: DisciplineContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisciplineContactInfo
     */
    omit?: DisciplineContactInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineContactInfoInclude<ExtArgs> | null
    /**
     * Filter, which DisciplineContactInfos to fetch.
     */
    where?: DisciplineContactInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DisciplineContactInfos to fetch.
     */
    orderBy?: DisciplineContactInfoOrderByWithRelationInput | DisciplineContactInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DisciplineContactInfos.
     */
    cursor?: DisciplineContactInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DisciplineContactInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DisciplineContactInfos.
     */
    skip?: number
    distinct?: DisciplineContactInfoScalarFieldEnum | DisciplineContactInfoScalarFieldEnum[]
  }

  /**
   * DisciplineContactInfo create
   */
  export type DisciplineContactInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineContactInfo
     */
    select?: DisciplineContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisciplineContactInfo
     */
    omit?: DisciplineContactInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineContactInfoInclude<ExtArgs> | null
    /**
     * The data needed to create a DisciplineContactInfo.
     */
    data: XOR<DisciplineContactInfoCreateInput, DisciplineContactInfoUncheckedCreateInput>
  }

  /**
   * DisciplineContactInfo createMany
   */
  export type DisciplineContactInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DisciplineContactInfos.
     */
    data: DisciplineContactInfoCreateManyInput | DisciplineContactInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DisciplineContactInfo createManyAndReturn
   */
  export type DisciplineContactInfoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineContactInfo
     */
    select?: DisciplineContactInfoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DisciplineContactInfo
     */
    omit?: DisciplineContactInfoOmit<ExtArgs> | null
    /**
     * The data used to create many DisciplineContactInfos.
     */
    data: DisciplineContactInfoCreateManyInput | DisciplineContactInfoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineContactInfoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DisciplineContactInfo update
   */
  export type DisciplineContactInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineContactInfo
     */
    select?: DisciplineContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisciplineContactInfo
     */
    omit?: DisciplineContactInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineContactInfoInclude<ExtArgs> | null
    /**
     * The data needed to update a DisciplineContactInfo.
     */
    data: XOR<DisciplineContactInfoUpdateInput, DisciplineContactInfoUncheckedUpdateInput>
    /**
     * Choose, which DisciplineContactInfo to update.
     */
    where: DisciplineContactInfoWhereUniqueInput
  }

  /**
   * DisciplineContactInfo updateMany
   */
  export type DisciplineContactInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DisciplineContactInfos.
     */
    data: XOR<DisciplineContactInfoUpdateManyMutationInput, DisciplineContactInfoUncheckedUpdateManyInput>
    /**
     * Filter which DisciplineContactInfos to update
     */
    where?: DisciplineContactInfoWhereInput
    /**
     * Limit how many DisciplineContactInfos to update.
     */
    limit?: number
  }

  /**
   * DisciplineContactInfo updateManyAndReturn
   */
  export type DisciplineContactInfoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineContactInfo
     */
    select?: DisciplineContactInfoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DisciplineContactInfo
     */
    omit?: DisciplineContactInfoOmit<ExtArgs> | null
    /**
     * The data used to update DisciplineContactInfos.
     */
    data: XOR<DisciplineContactInfoUpdateManyMutationInput, DisciplineContactInfoUncheckedUpdateManyInput>
    /**
     * Filter which DisciplineContactInfos to update
     */
    where?: DisciplineContactInfoWhereInput
    /**
     * Limit how many DisciplineContactInfos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineContactInfoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DisciplineContactInfo upsert
   */
  export type DisciplineContactInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineContactInfo
     */
    select?: DisciplineContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisciplineContactInfo
     */
    omit?: DisciplineContactInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineContactInfoInclude<ExtArgs> | null
    /**
     * The filter to search for the DisciplineContactInfo to update in case it exists.
     */
    where: DisciplineContactInfoWhereUniqueInput
    /**
     * In case the DisciplineContactInfo found by the `where` argument doesn't exist, create a new DisciplineContactInfo with this data.
     */
    create: XOR<DisciplineContactInfoCreateInput, DisciplineContactInfoUncheckedCreateInput>
    /**
     * In case the DisciplineContactInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DisciplineContactInfoUpdateInput, DisciplineContactInfoUncheckedUpdateInput>
  }

  /**
   * DisciplineContactInfo delete
   */
  export type DisciplineContactInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineContactInfo
     */
    select?: DisciplineContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisciplineContactInfo
     */
    omit?: DisciplineContactInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineContactInfoInclude<ExtArgs> | null
    /**
     * Filter which DisciplineContactInfo to delete.
     */
    where: DisciplineContactInfoWhereUniqueInput
  }

  /**
   * DisciplineContactInfo deleteMany
   */
  export type DisciplineContactInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DisciplineContactInfos to delete
     */
    where?: DisciplineContactInfoWhereInput
    /**
     * Limit how many DisciplineContactInfos to delete.
     */
    limit?: number
  }

  /**
   * DisciplineContactInfo without action
   */
  export type DisciplineContactInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineContactInfo
     */
    select?: DisciplineContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisciplineContactInfo
     */
    omit?: DisciplineContactInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineContactInfoInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    type: $Enums.EventType | null
    status: $Enums.EventStatus | null
    eventDate: Date | null
    startTime: string | null
    endTime: string | null
    location: string | null
    address: string | null
    isPublic: boolean | null
    registrationRequired: boolean | null
    registrationDeadline: Date | null
    homeTeam: string | null
    awayTeam: string | null
    result: string | null
    score: string | null
    imageUrl: string | null
    externalUrl: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    disciplineId: string | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    type: $Enums.EventType | null
    status: $Enums.EventStatus | null
    eventDate: Date | null
    startTime: string | null
    endTime: string | null
    location: string | null
    address: string | null
    isPublic: boolean | null
    registrationRequired: boolean | null
    registrationDeadline: Date | null
    homeTeam: string | null
    awayTeam: string | null
    result: string | null
    score: string | null
    imageUrl: string | null
    externalUrl: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    disciplineId: string | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    title: number
    description: number
    type: number
    status: number
    eventDate: number
    startTime: number
    endTime: number
    location: number
    address: number
    isPublic: number
    registrationRequired: number
    registrationDeadline: number
    homeTeam: number
    awayTeam: number
    result: number
    score: number
    imageUrl: number
    externalUrl: number
    notes: number
    createdAt: number
    updatedAt: number
    disciplineId: number
    _all: number
  }


  export type EventMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    status?: true
    eventDate?: true
    startTime?: true
    endTime?: true
    location?: true
    address?: true
    isPublic?: true
    registrationRequired?: true
    registrationDeadline?: true
    homeTeam?: true
    awayTeam?: true
    result?: true
    score?: true
    imageUrl?: true
    externalUrl?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    disciplineId?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    status?: true
    eventDate?: true
    startTime?: true
    endTime?: true
    location?: true
    address?: true
    isPublic?: true
    registrationRequired?: true
    registrationDeadline?: true
    homeTeam?: true
    awayTeam?: true
    result?: true
    score?: true
    imageUrl?: true
    externalUrl?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    disciplineId?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    status?: true
    eventDate?: true
    startTime?: true
    endTime?: true
    location?: true
    address?: true
    isPublic?: true
    registrationRequired?: true
    registrationDeadline?: true
    homeTeam?: true
    awayTeam?: true
    result?: true
    score?: true
    imageUrl?: true
    externalUrl?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    disciplineId?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: string
    title: string
    description: string | null
    type: $Enums.EventType
    status: $Enums.EventStatus
    eventDate: Date
    startTime: string | null
    endTime: string | null
    location: string
    address: string | null
    isPublic: boolean
    registrationRequired: boolean
    registrationDeadline: Date | null
    homeTeam: string | null
    awayTeam: string | null
    result: string | null
    score: string | null
    imageUrl: string | null
    externalUrl: string | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    disciplineId: string | null
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    status?: boolean
    eventDate?: boolean
    startTime?: boolean
    endTime?: boolean
    location?: boolean
    address?: boolean
    isPublic?: boolean
    registrationRequired?: boolean
    registrationDeadline?: boolean
    homeTeam?: boolean
    awayTeam?: boolean
    result?: boolean
    score?: boolean
    imageUrl?: boolean
    externalUrl?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    disciplineId?: boolean
    discipline?: boolean | Event$disciplineArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    status?: boolean
    eventDate?: boolean
    startTime?: boolean
    endTime?: boolean
    location?: boolean
    address?: boolean
    isPublic?: boolean
    registrationRequired?: boolean
    registrationDeadline?: boolean
    homeTeam?: boolean
    awayTeam?: boolean
    result?: boolean
    score?: boolean
    imageUrl?: boolean
    externalUrl?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    disciplineId?: boolean
    discipline?: boolean | Event$disciplineArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    status?: boolean
    eventDate?: boolean
    startTime?: boolean
    endTime?: boolean
    location?: boolean
    address?: boolean
    isPublic?: boolean
    registrationRequired?: boolean
    registrationDeadline?: boolean
    homeTeam?: boolean
    awayTeam?: boolean
    result?: boolean
    score?: boolean
    imageUrl?: boolean
    externalUrl?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    disciplineId?: boolean
    discipline?: boolean | Event$disciplineArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    status?: boolean
    eventDate?: boolean
    startTime?: boolean
    endTime?: boolean
    location?: boolean
    address?: boolean
    isPublic?: boolean
    registrationRequired?: boolean
    registrationDeadline?: boolean
    homeTeam?: boolean
    awayTeam?: boolean
    result?: boolean
    score?: boolean
    imageUrl?: boolean
    externalUrl?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    disciplineId?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "type" | "status" | "eventDate" | "startTime" | "endTime" | "location" | "address" | "isPublic" | "registrationRequired" | "registrationDeadline" | "homeTeam" | "awayTeam" | "result" | "score" | "imageUrl" | "externalUrl" | "notes" | "createdAt" | "updatedAt" | "disciplineId", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    discipline?: boolean | Event$disciplineArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    discipline?: boolean | Event$disciplineArgs<ExtArgs>
  }
  export type EventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    discipline?: boolean | Event$disciplineArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      discipline: Prisma.$DisciplinePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      type: $Enums.EventType
      status: $Enums.EventStatus
      eventDate: Date
      startTime: string | null
      endTime: string | null
      location: string
      address: string | null
      isPublic: boolean
      registrationRequired: boolean
      registrationDeadline: Date | null
      homeTeam: string | null
      awayTeam: string | null
      result: string | null
      score: string | null
      imageUrl: string | null
      externalUrl: string | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
      disciplineId: string | null
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.updateManyAndReturn({
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
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(args: SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
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
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    discipline<T extends Event$disciplineArgs<ExtArgs> = {}>(args?: Subset<T, Event$disciplineArgs<ExtArgs>>): Prisma__DisciplineClient<$Result.GetResult<Prisma.$DisciplinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'String'>
    readonly title: FieldRef<"Event", 'String'>
    readonly description: FieldRef<"Event", 'String'>
    readonly type: FieldRef<"Event", 'EventType'>
    readonly status: FieldRef<"Event", 'EventStatus'>
    readonly eventDate: FieldRef<"Event", 'DateTime'>
    readonly startTime: FieldRef<"Event", 'String'>
    readonly endTime: FieldRef<"Event", 'String'>
    readonly location: FieldRef<"Event", 'String'>
    readonly address: FieldRef<"Event", 'String'>
    readonly isPublic: FieldRef<"Event", 'Boolean'>
    readonly registrationRequired: FieldRef<"Event", 'Boolean'>
    readonly registrationDeadline: FieldRef<"Event", 'DateTime'>
    readonly homeTeam: FieldRef<"Event", 'String'>
    readonly awayTeam: FieldRef<"Event", 'String'>
    readonly result: FieldRef<"Event", 'String'>
    readonly score: FieldRef<"Event", 'String'>
    readonly imageUrl: FieldRef<"Event", 'String'>
    readonly externalUrl: FieldRef<"Event", 'String'>
    readonly notes: FieldRef<"Event", 'String'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
    readonly updatedAt: FieldRef<"Event", 'DateTime'>
    readonly disciplineId: FieldRef<"Event", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event updateManyAndReturn
   */
  export type EventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event.discipline
   */
  export type Event$disciplineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discipline
     */
    select?: DisciplineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discipline
     */
    omit?: DisciplineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineInclude<ExtArgs> | null
    where?: DisciplineWhereInput
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
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


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    dni: 'dni',
    phone: 'phone',
    email: 'email',
    emailVerified: 'emailVerified',
    password: 'password',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    role: 'role',
    status: 'status',
    familyHeadId: 'familyHeadId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    periodCovered: 'periodCovered',
    paymentDate: 'paymentDate',
    paymentMethod: 'paymentMethod',
    status: 'status',
    transactionId: 'transactionId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const NewsArticleScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    category: 'category',
    author: 'author',
    publicationDate: 'publicationDate',
    status: 'status',
    summary: 'summary',
    excerpt: 'excerpt',
    content: 'content',
    imageUrl: 'imageUrl',
    viewCount: 'viewCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    disciplineId: 'disciplineId'
  };

  export type NewsArticleScalarFieldEnum = (typeof NewsArticleScalarFieldEnum)[keyof typeof NewsArticleScalarFieldEnum]


  export const DisciplineScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    mainImageUrl: 'mainImageUrl',
    isActive: 'isActive',
    displayOrder: 'displayOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DisciplineScalarFieldEnum = (typeof DisciplineScalarFieldEnum)[keyof typeof DisciplineScalarFieldEnum]


  export const DisciplineCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    displayOrder: 'displayOrder',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    disciplineId: 'disciplineId'
  };

  export type DisciplineCategoryScalarFieldEnum = (typeof DisciplineCategoryScalarFieldEnum)[keyof typeof DisciplineCategoryScalarFieldEnum]


  export const DisciplineQuickLinkScalarFieldEnum: {
    id: 'id',
    title: 'title',
    url: 'url',
    icon: 'icon',
    displayOrder: 'displayOrder',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    disciplineId: 'disciplineId'
  };

  export type DisciplineQuickLinkScalarFieldEnum = (typeof DisciplineQuickLinkScalarFieldEnum)[keyof typeof DisciplineQuickLinkScalarFieldEnum]


  export const DisciplineContactInfoScalarFieldEnum: {
    id: 'id',
    phone: 'phone',
    email: 'email',
    whatsapp: 'whatsapp',
    address: 'address',
    schedule: 'schedule',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    disciplineId: 'disciplineId'
  };

  export type DisciplineContactInfoScalarFieldEnum = (typeof DisciplineContactInfoScalarFieldEnum)[keyof typeof DisciplineContactInfoScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    type: 'type',
    status: 'status',
    eventDate: 'eventDate',
    startTime: 'startTime',
    endTime: 'endTime',
    location: 'location',
    address: 'address',
    isPublic: 'isPublic',
    registrationRequired: 'registrationRequired',
    registrationDeadline: 'registrationDeadline',
    homeTeam: 'homeTeam',
    awayTeam: 'awayTeam',
    result: 'result',
    score: 'score',
    imageUrl: 'imageUrl',
    externalUrl: 'externalUrl',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    disciplineId: 'disciplineId'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'MembershipStatus'
   */
  export type EnumMembershipStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MembershipStatus'>
    


  /**
   * Reference to a field of type 'MembershipStatus[]'
   */
  export type ListEnumMembershipStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MembershipStatus[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'PaymentMethod'
   */
  export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod'>
    


  /**
   * Reference to a field of type 'PaymentMethod[]'
   */
  export type ListEnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'NewsStatus'
   */
  export type EnumNewsStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NewsStatus'>
    


  /**
   * Reference to a field of type 'NewsStatus[]'
   */
  export type ListEnumNewsStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NewsStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'EventType'
   */
  export type EnumEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventType'>
    


  /**
   * Reference to a field of type 'EventType[]'
   */
  export type ListEnumEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventType[]'>
    


  /**
   * Reference to a field of type 'EventStatus'
   */
  export type EnumEventStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventStatus'>
    


  /**
   * Reference to a field of type 'EventStatus[]'
   */
  export type ListEnumEventStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventStatus[]'>
    


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


  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    dni?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    password?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    status?: EnumMembershipStatusFilter<"User"> | $Enums.MembershipStatus
    familyHeadId?: StringNullableFilter<"User"> | string | null
    familyHead?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    familyMembers?: UserListRelationFilter
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    payments?: PaymentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    dni?: SortOrder
    phone?: SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    status?: SortOrder
    familyHeadId?: SortOrderInput | SortOrder
    familyHead?: UserOrderByWithRelationInput
    familyMembers?: UserOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    dni?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    phone?: StringFilter<"User"> | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    password?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    status?: EnumMembershipStatusFilter<"User"> | $Enums.MembershipStatus
    familyHeadId?: StringNullableFilter<"User"> | string | null
    familyHead?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    familyMembers?: UserListRelationFilter
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    payments?: PaymentListRelationFilter
  }, "id" | "dni" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    dni?: SortOrder
    phone?: SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    status?: SortOrder
    familyHeadId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    dni?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    status?: EnumMembershipStatusWithAggregatesFilter<"User"> | $Enums.MembershipStatus
    familyHeadId?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    periodCovered?: StringFilter<"Payment"> | string
    paymentDate?: DateTimeFilter<"Payment"> | Date | string
    paymentMethod?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    transactionId?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    userId?: StringFilter<"Payment"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    periodCovered?: SortOrder
    paymentDate?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    transactionId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    periodCovered?: StringFilter<"Payment"> | string
    paymentDate?: DateTimeFilter<"Payment"> | Date | string
    paymentMethod?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    transactionId?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    userId?: StringFilter<"Payment"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    periodCovered?: SortOrder
    paymentDate?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    transactionId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    amount?: DecimalWithAggregatesFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    periodCovered?: StringWithAggregatesFilter<"Payment"> | string
    paymentDate?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    paymentMethod?: EnumPaymentMethodWithAggregatesFilter<"Payment"> | $Enums.PaymentMethod
    status?: EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus
    transactionId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    userId?: StringWithAggregatesFilter<"Payment"> | string
  }

  export type NewsArticleWhereInput = {
    AND?: NewsArticleWhereInput | NewsArticleWhereInput[]
    OR?: NewsArticleWhereInput[]
    NOT?: NewsArticleWhereInput | NewsArticleWhereInput[]
    id?: StringFilter<"NewsArticle"> | string
    title?: StringFilter<"NewsArticle"> | string
    slug?: StringFilter<"NewsArticle"> | string
    category?: StringFilter<"NewsArticle"> | string
    author?: StringNullableFilter<"NewsArticle"> | string | null
    publicationDate?: DateTimeFilter<"NewsArticle"> | Date | string
    status?: EnumNewsStatusFilter<"NewsArticle"> | $Enums.NewsStatus
    summary?: StringNullableFilter<"NewsArticle"> | string | null
    excerpt?: StringNullableFilter<"NewsArticle"> | string | null
    content?: StringNullableFilter<"NewsArticle"> | string | null
    imageUrl?: StringNullableFilter<"NewsArticle"> | string | null
    viewCount?: IntFilter<"NewsArticle"> | number
    createdAt?: DateTimeFilter<"NewsArticle"> | Date | string
    updatedAt?: DateTimeFilter<"NewsArticle"> | Date | string
    disciplineId?: StringNullableFilter<"NewsArticle"> | string | null
    discipline?: XOR<DisciplineNullableScalarRelationFilter, DisciplineWhereInput> | null
  }

  export type NewsArticleOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    author?: SortOrderInput | SortOrder
    publicationDate?: SortOrder
    status?: SortOrder
    summary?: SortOrderInput | SortOrder
    excerpt?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    viewCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    disciplineId?: SortOrderInput | SortOrder
    discipline?: DisciplineOrderByWithRelationInput
  }

  export type NewsArticleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: NewsArticleWhereInput | NewsArticleWhereInput[]
    OR?: NewsArticleWhereInput[]
    NOT?: NewsArticleWhereInput | NewsArticleWhereInput[]
    title?: StringFilter<"NewsArticle"> | string
    category?: StringFilter<"NewsArticle"> | string
    author?: StringNullableFilter<"NewsArticle"> | string | null
    publicationDate?: DateTimeFilter<"NewsArticle"> | Date | string
    status?: EnumNewsStatusFilter<"NewsArticle"> | $Enums.NewsStatus
    summary?: StringNullableFilter<"NewsArticle"> | string | null
    excerpt?: StringNullableFilter<"NewsArticle"> | string | null
    content?: StringNullableFilter<"NewsArticle"> | string | null
    imageUrl?: StringNullableFilter<"NewsArticle"> | string | null
    viewCount?: IntFilter<"NewsArticle"> | number
    createdAt?: DateTimeFilter<"NewsArticle"> | Date | string
    updatedAt?: DateTimeFilter<"NewsArticle"> | Date | string
    disciplineId?: StringNullableFilter<"NewsArticle"> | string | null
    discipline?: XOR<DisciplineNullableScalarRelationFilter, DisciplineWhereInput> | null
  }, "id" | "slug">

  export type NewsArticleOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    author?: SortOrderInput | SortOrder
    publicationDate?: SortOrder
    status?: SortOrder
    summary?: SortOrderInput | SortOrder
    excerpt?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    viewCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    disciplineId?: SortOrderInput | SortOrder
    _count?: NewsArticleCountOrderByAggregateInput
    _avg?: NewsArticleAvgOrderByAggregateInput
    _max?: NewsArticleMaxOrderByAggregateInput
    _min?: NewsArticleMinOrderByAggregateInput
    _sum?: NewsArticleSumOrderByAggregateInput
  }

  export type NewsArticleScalarWhereWithAggregatesInput = {
    AND?: NewsArticleScalarWhereWithAggregatesInput | NewsArticleScalarWhereWithAggregatesInput[]
    OR?: NewsArticleScalarWhereWithAggregatesInput[]
    NOT?: NewsArticleScalarWhereWithAggregatesInput | NewsArticleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NewsArticle"> | string
    title?: StringWithAggregatesFilter<"NewsArticle"> | string
    slug?: StringWithAggregatesFilter<"NewsArticle"> | string
    category?: StringWithAggregatesFilter<"NewsArticle"> | string
    author?: StringNullableWithAggregatesFilter<"NewsArticle"> | string | null
    publicationDate?: DateTimeWithAggregatesFilter<"NewsArticle"> | Date | string
    status?: EnumNewsStatusWithAggregatesFilter<"NewsArticle"> | $Enums.NewsStatus
    summary?: StringNullableWithAggregatesFilter<"NewsArticle"> | string | null
    excerpt?: StringNullableWithAggregatesFilter<"NewsArticle"> | string | null
    content?: StringNullableWithAggregatesFilter<"NewsArticle"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"NewsArticle"> | string | null
    viewCount?: IntWithAggregatesFilter<"NewsArticle"> | number
    createdAt?: DateTimeWithAggregatesFilter<"NewsArticle"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"NewsArticle"> | Date | string
    disciplineId?: StringNullableWithAggregatesFilter<"NewsArticle"> | string | null
  }

  export type DisciplineWhereInput = {
    AND?: DisciplineWhereInput | DisciplineWhereInput[]
    OR?: DisciplineWhereInput[]
    NOT?: DisciplineWhereInput | DisciplineWhereInput[]
    id?: StringFilter<"Discipline"> | string
    name?: StringFilter<"Discipline"> | string
    slug?: StringFilter<"Discipline"> | string
    description?: StringFilter<"Discipline"> | string
    mainImageUrl?: StringNullableFilter<"Discipline"> | string | null
    isActive?: BoolFilter<"Discipline"> | boolean
    displayOrder?: IntFilter<"Discipline"> | number
    createdAt?: DateTimeFilter<"Discipline"> | Date | string
    updatedAt?: DateTimeFilter<"Discipline"> | Date | string
    categories?: DisciplineCategoryListRelationFilter
    quickLinks?: DisciplineQuickLinkListRelationFilter
    contactInfo?: XOR<DisciplineContactInfoNullableScalarRelationFilter, DisciplineContactInfoWhereInput> | null
    relatedNews?: NewsArticleListRelationFilter
    events?: EventListRelationFilter
  }

  export type DisciplineOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    mainImageUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categories?: DisciplineCategoryOrderByRelationAggregateInput
    quickLinks?: DisciplineQuickLinkOrderByRelationAggregateInput
    contactInfo?: DisciplineContactInfoOrderByWithRelationInput
    relatedNews?: NewsArticleOrderByRelationAggregateInput
    events?: EventOrderByRelationAggregateInput
  }

  export type DisciplineWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: DisciplineWhereInput | DisciplineWhereInput[]
    OR?: DisciplineWhereInput[]
    NOT?: DisciplineWhereInput | DisciplineWhereInput[]
    name?: StringFilter<"Discipline"> | string
    description?: StringFilter<"Discipline"> | string
    mainImageUrl?: StringNullableFilter<"Discipline"> | string | null
    isActive?: BoolFilter<"Discipline"> | boolean
    displayOrder?: IntFilter<"Discipline"> | number
    createdAt?: DateTimeFilter<"Discipline"> | Date | string
    updatedAt?: DateTimeFilter<"Discipline"> | Date | string
    categories?: DisciplineCategoryListRelationFilter
    quickLinks?: DisciplineQuickLinkListRelationFilter
    contactInfo?: XOR<DisciplineContactInfoNullableScalarRelationFilter, DisciplineContactInfoWhereInput> | null
    relatedNews?: NewsArticleListRelationFilter
    events?: EventListRelationFilter
  }, "id" | "slug">

  export type DisciplineOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    mainImageUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DisciplineCountOrderByAggregateInput
    _avg?: DisciplineAvgOrderByAggregateInput
    _max?: DisciplineMaxOrderByAggregateInput
    _min?: DisciplineMinOrderByAggregateInput
    _sum?: DisciplineSumOrderByAggregateInput
  }

  export type DisciplineScalarWhereWithAggregatesInput = {
    AND?: DisciplineScalarWhereWithAggregatesInput | DisciplineScalarWhereWithAggregatesInput[]
    OR?: DisciplineScalarWhereWithAggregatesInput[]
    NOT?: DisciplineScalarWhereWithAggregatesInput | DisciplineScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Discipline"> | string
    name?: StringWithAggregatesFilter<"Discipline"> | string
    slug?: StringWithAggregatesFilter<"Discipline"> | string
    description?: StringWithAggregatesFilter<"Discipline"> | string
    mainImageUrl?: StringNullableWithAggregatesFilter<"Discipline"> | string | null
    isActive?: BoolWithAggregatesFilter<"Discipline"> | boolean
    displayOrder?: IntWithAggregatesFilter<"Discipline"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Discipline"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Discipline"> | Date | string
  }

  export type DisciplineCategoryWhereInput = {
    AND?: DisciplineCategoryWhereInput | DisciplineCategoryWhereInput[]
    OR?: DisciplineCategoryWhereInput[]
    NOT?: DisciplineCategoryWhereInput | DisciplineCategoryWhereInput[]
    id?: StringFilter<"DisciplineCategory"> | string
    name?: StringFilter<"DisciplineCategory"> | string
    description?: StringNullableFilter<"DisciplineCategory"> | string | null
    displayOrder?: IntFilter<"DisciplineCategory"> | number
    isActive?: BoolFilter<"DisciplineCategory"> | boolean
    createdAt?: DateTimeFilter<"DisciplineCategory"> | Date | string
    updatedAt?: DateTimeFilter<"DisciplineCategory"> | Date | string
    disciplineId?: StringFilter<"DisciplineCategory"> | string
    discipline?: XOR<DisciplineScalarRelationFilter, DisciplineWhereInput>
  }

  export type DisciplineCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    displayOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    disciplineId?: SortOrder
    discipline?: DisciplineOrderByWithRelationInput
  }

  export type DisciplineCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DisciplineCategoryWhereInput | DisciplineCategoryWhereInput[]
    OR?: DisciplineCategoryWhereInput[]
    NOT?: DisciplineCategoryWhereInput | DisciplineCategoryWhereInput[]
    name?: StringFilter<"DisciplineCategory"> | string
    description?: StringNullableFilter<"DisciplineCategory"> | string | null
    displayOrder?: IntFilter<"DisciplineCategory"> | number
    isActive?: BoolFilter<"DisciplineCategory"> | boolean
    createdAt?: DateTimeFilter<"DisciplineCategory"> | Date | string
    updatedAt?: DateTimeFilter<"DisciplineCategory"> | Date | string
    disciplineId?: StringFilter<"DisciplineCategory"> | string
    discipline?: XOR<DisciplineScalarRelationFilter, DisciplineWhereInput>
  }, "id">

  export type DisciplineCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    displayOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    disciplineId?: SortOrder
    _count?: DisciplineCategoryCountOrderByAggregateInput
    _avg?: DisciplineCategoryAvgOrderByAggregateInput
    _max?: DisciplineCategoryMaxOrderByAggregateInput
    _min?: DisciplineCategoryMinOrderByAggregateInput
    _sum?: DisciplineCategorySumOrderByAggregateInput
  }

  export type DisciplineCategoryScalarWhereWithAggregatesInput = {
    AND?: DisciplineCategoryScalarWhereWithAggregatesInput | DisciplineCategoryScalarWhereWithAggregatesInput[]
    OR?: DisciplineCategoryScalarWhereWithAggregatesInput[]
    NOT?: DisciplineCategoryScalarWhereWithAggregatesInput | DisciplineCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DisciplineCategory"> | string
    name?: StringWithAggregatesFilter<"DisciplineCategory"> | string
    description?: StringNullableWithAggregatesFilter<"DisciplineCategory"> | string | null
    displayOrder?: IntWithAggregatesFilter<"DisciplineCategory"> | number
    isActive?: BoolWithAggregatesFilter<"DisciplineCategory"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"DisciplineCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DisciplineCategory"> | Date | string
    disciplineId?: StringWithAggregatesFilter<"DisciplineCategory"> | string
  }

  export type DisciplineQuickLinkWhereInput = {
    AND?: DisciplineQuickLinkWhereInput | DisciplineQuickLinkWhereInput[]
    OR?: DisciplineQuickLinkWhereInput[]
    NOT?: DisciplineQuickLinkWhereInput | DisciplineQuickLinkWhereInput[]
    id?: StringFilter<"DisciplineQuickLink"> | string
    title?: StringFilter<"DisciplineQuickLink"> | string
    url?: StringNullableFilter<"DisciplineQuickLink"> | string | null
    icon?: StringNullableFilter<"DisciplineQuickLink"> | string | null
    displayOrder?: IntFilter<"DisciplineQuickLink"> | number
    isActive?: BoolFilter<"DisciplineQuickLink"> | boolean
    createdAt?: DateTimeFilter<"DisciplineQuickLink"> | Date | string
    updatedAt?: DateTimeFilter<"DisciplineQuickLink"> | Date | string
    disciplineId?: StringFilter<"DisciplineQuickLink"> | string
    discipline?: XOR<DisciplineScalarRelationFilter, DisciplineWhereInput>
  }

  export type DisciplineQuickLinkOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    displayOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    disciplineId?: SortOrder
    discipline?: DisciplineOrderByWithRelationInput
  }

  export type DisciplineQuickLinkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DisciplineQuickLinkWhereInput | DisciplineQuickLinkWhereInput[]
    OR?: DisciplineQuickLinkWhereInput[]
    NOT?: DisciplineQuickLinkWhereInput | DisciplineQuickLinkWhereInput[]
    title?: StringFilter<"DisciplineQuickLink"> | string
    url?: StringNullableFilter<"DisciplineQuickLink"> | string | null
    icon?: StringNullableFilter<"DisciplineQuickLink"> | string | null
    displayOrder?: IntFilter<"DisciplineQuickLink"> | number
    isActive?: BoolFilter<"DisciplineQuickLink"> | boolean
    createdAt?: DateTimeFilter<"DisciplineQuickLink"> | Date | string
    updatedAt?: DateTimeFilter<"DisciplineQuickLink"> | Date | string
    disciplineId?: StringFilter<"DisciplineQuickLink"> | string
    discipline?: XOR<DisciplineScalarRelationFilter, DisciplineWhereInput>
  }, "id">

  export type DisciplineQuickLinkOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    displayOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    disciplineId?: SortOrder
    _count?: DisciplineQuickLinkCountOrderByAggregateInput
    _avg?: DisciplineQuickLinkAvgOrderByAggregateInput
    _max?: DisciplineQuickLinkMaxOrderByAggregateInput
    _min?: DisciplineQuickLinkMinOrderByAggregateInput
    _sum?: DisciplineQuickLinkSumOrderByAggregateInput
  }

  export type DisciplineQuickLinkScalarWhereWithAggregatesInput = {
    AND?: DisciplineQuickLinkScalarWhereWithAggregatesInput | DisciplineQuickLinkScalarWhereWithAggregatesInput[]
    OR?: DisciplineQuickLinkScalarWhereWithAggregatesInput[]
    NOT?: DisciplineQuickLinkScalarWhereWithAggregatesInput | DisciplineQuickLinkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DisciplineQuickLink"> | string
    title?: StringWithAggregatesFilter<"DisciplineQuickLink"> | string
    url?: StringNullableWithAggregatesFilter<"DisciplineQuickLink"> | string | null
    icon?: StringNullableWithAggregatesFilter<"DisciplineQuickLink"> | string | null
    displayOrder?: IntWithAggregatesFilter<"DisciplineQuickLink"> | number
    isActive?: BoolWithAggregatesFilter<"DisciplineQuickLink"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"DisciplineQuickLink"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DisciplineQuickLink"> | Date | string
    disciplineId?: StringWithAggregatesFilter<"DisciplineQuickLink"> | string
  }

  export type DisciplineContactInfoWhereInput = {
    AND?: DisciplineContactInfoWhereInput | DisciplineContactInfoWhereInput[]
    OR?: DisciplineContactInfoWhereInput[]
    NOT?: DisciplineContactInfoWhereInput | DisciplineContactInfoWhereInput[]
    id?: StringFilter<"DisciplineContactInfo"> | string
    phone?: StringNullableFilter<"DisciplineContactInfo"> | string | null
    email?: StringNullableFilter<"DisciplineContactInfo"> | string | null
    whatsapp?: StringNullableFilter<"DisciplineContactInfo"> | string | null
    address?: StringNullableFilter<"DisciplineContactInfo"> | string | null
    schedule?: StringNullableFilter<"DisciplineContactInfo"> | string | null
    createdAt?: DateTimeFilter<"DisciplineContactInfo"> | Date | string
    updatedAt?: DateTimeFilter<"DisciplineContactInfo"> | Date | string
    disciplineId?: StringFilter<"DisciplineContactInfo"> | string
    discipline?: XOR<DisciplineScalarRelationFilter, DisciplineWhereInput>
  }

  export type DisciplineContactInfoOrderByWithRelationInput = {
    id?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    whatsapp?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    schedule?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    disciplineId?: SortOrder
    discipline?: DisciplineOrderByWithRelationInput
  }

  export type DisciplineContactInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    disciplineId?: string
    AND?: DisciplineContactInfoWhereInput | DisciplineContactInfoWhereInput[]
    OR?: DisciplineContactInfoWhereInput[]
    NOT?: DisciplineContactInfoWhereInput | DisciplineContactInfoWhereInput[]
    phone?: StringNullableFilter<"DisciplineContactInfo"> | string | null
    email?: StringNullableFilter<"DisciplineContactInfo"> | string | null
    whatsapp?: StringNullableFilter<"DisciplineContactInfo"> | string | null
    address?: StringNullableFilter<"DisciplineContactInfo"> | string | null
    schedule?: StringNullableFilter<"DisciplineContactInfo"> | string | null
    createdAt?: DateTimeFilter<"DisciplineContactInfo"> | Date | string
    updatedAt?: DateTimeFilter<"DisciplineContactInfo"> | Date | string
    discipline?: XOR<DisciplineScalarRelationFilter, DisciplineWhereInput>
  }, "id" | "disciplineId">

  export type DisciplineContactInfoOrderByWithAggregationInput = {
    id?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    whatsapp?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    schedule?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    disciplineId?: SortOrder
    _count?: DisciplineContactInfoCountOrderByAggregateInput
    _max?: DisciplineContactInfoMaxOrderByAggregateInput
    _min?: DisciplineContactInfoMinOrderByAggregateInput
  }

  export type DisciplineContactInfoScalarWhereWithAggregatesInput = {
    AND?: DisciplineContactInfoScalarWhereWithAggregatesInput | DisciplineContactInfoScalarWhereWithAggregatesInput[]
    OR?: DisciplineContactInfoScalarWhereWithAggregatesInput[]
    NOT?: DisciplineContactInfoScalarWhereWithAggregatesInput | DisciplineContactInfoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DisciplineContactInfo"> | string
    phone?: StringNullableWithAggregatesFilter<"DisciplineContactInfo"> | string | null
    email?: StringNullableWithAggregatesFilter<"DisciplineContactInfo"> | string | null
    whatsapp?: StringNullableWithAggregatesFilter<"DisciplineContactInfo"> | string | null
    address?: StringNullableWithAggregatesFilter<"DisciplineContactInfo"> | string | null
    schedule?: StringNullableWithAggregatesFilter<"DisciplineContactInfo"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"DisciplineContactInfo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DisciplineContactInfo"> | Date | string
    disciplineId?: StringWithAggregatesFilter<"DisciplineContactInfo"> | string
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    type?: EnumEventTypeFilter<"Event"> | $Enums.EventType
    status?: EnumEventStatusFilter<"Event"> | $Enums.EventStatus
    eventDate?: DateTimeFilter<"Event"> | Date | string
    startTime?: StringNullableFilter<"Event"> | string | null
    endTime?: StringNullableFilter<"Event"> | string | null
    location?: StringFilter<"Event"> | string
    address?: StringNullableFilter<"Event"> | string | null
    isPublic?: BoolFilter<"Event"> | boolean
    registrationRequired?: BoolFilter<"Event"> | boolean
    registrationDeadline?: DateTimeNullableFilter<"Event"> | Date | string | null
    homeTeam?: StringNullableFilter<"Event"> | string | null
    awayTeam?: StringNullableFilter<"Event"> | string | null
    result?: StringNullableFilter<"Event"> | string | null
    score?: StringNullableFilter<"Event"> | string | null
    imageUrl?: StringNullableFilter<"Event"> | string | null
    externalUrl?: StringNullableFilter<"Event"> | string | null
    notes?: StringNullableFilter<"Event"> | string | null
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    disciplineId?: StringNullableFilter<"Event"> | string | null
    discipline?: XOR<DisciplineNullableScalarRelationFilter, DisciplineWhereInput> | null
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    status?: SortOrder
    eventDate?: SortOrder
    startTime?: SortOrderInput | SortOrder
    endTime?: SortOrderInput | SortOrder
    location?: SortOrder
    address?: SortOrderInput | SortOrder
    isPublic?: SortOrder
    registrationRequired?: SortOrder
    registrationDeadline?: SortOrderInput | SortOrder
    homeTeam?: SortOrderInput | SortOrder
    awayTeam?: SortOrderInput | SortOrder
    result?: SortOrderInput | SortOrder
    score?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    externalUrl?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    disciplineId?: SortOrderInput | SortOrder
    discipline?: DisciplineOrderByWithRelationInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    title?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    type?: EnumEventTypeFilter<"Event"> | $Enums.EventType
    status?: EnumEventStatusFilter<"Event"> | $Enums.EventStatus
    eventDate?: DateTimeFilter<"Event"> | Date | string
    startTime?: StringNullableFilter<"Event"> | string | null
    endTime?: StringNullableFilter<"Event"> | string | null
    location?: StringFilter<"Event"> | string
    address?: StringNullableFilter<"Event"> | string | null
    isPublic?: BoolFilter<"Event"> | boolean
    registrationRequired?: BoolFilter<"Event"> | boolean
    registrationDeadline?: DateTimeNullableFilter<"Event"> | Date | string | null
    homeTeam?: StringNullableFilter<"Event"> | string | null
    awayTeam?: StringNullableFilter<"Event"> | string | null
    result?: StringNullableFilter<"Event"> | string | null
    score?: StringNullableFilter<"Event"> | string | null
    imageUrl?: StringNullableFilter<"Event"> | string | null
    externalUrl?: StringNullableFilter<"Event"> | string | null
    notes?: StringNullableFilter<"Event"> | string | null
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    disciplineId?: StringNullableFilter<"Event"> | string | null
    discipline?: XOR<DisciplineNullableScalarRelationFilter, DisciplineWhereInput> | null
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    status?: SortOrder
    eventDate?: SortOrder
    startTime?: SortOrderInput | SortOrder
    endTime?: SortOrderInput | SortOrder
    location?: SortOrder
    address?: SortOrderInput | SortOrder
    isPublic?: SortOrder
    registrationRequired?: SortOrder
    registrationDeadline?: SortOrderInput | SortOrder
    homeTeam?: SortOrderInput | SortOrder
    awayTeam?: SortOrderInput | SortOrder
    result?: SortOrderInput | SortOrder
    score?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    externalUrl?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    disciplineId?: SortOrderInput | SortOrder
    _count?: EventCountOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Event"> | string
    title?: StringWithAggregatesFilter<"Event"> | string
    description?: StringNullableWithAggregatesFilter<"Event"> | string | null
    type?: EnumEventTypeWithAggregatesFilter<"Event"> | $Enums.EventType
    status?: EnumEventStatusWithAggregatesFilter<"Event"> | $Enums.EventStatus
    eventDate?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    startTime?: StringNullableWithAggregatesFilter<"Event"> | string | null
    endTime?: StringNullableWithAggregatesFilter<"Event"> | string | null
    location?: StringWithAggregatesFilter<"Event"> | string
    address?: StringNullableWithAggregatesFilter<"Event"> | string | null
    isPublic?: BoolWithAggregatesFilter<"Event"> | boolean
    registrationRequired?: BoolWithAggregatesFilter<"Event"> | boolean
    registrationDeadline?: DateTimeNullableWithAggregatesFilter<"Event"> | Date | string | null
    homeTeam?: StringNullableWithAggregatesFilter<"Event"> | string | null
    awayTeam?: StringNullableWithAggregatesFilter<"Event"> | string | null
    result?: StringNullableWithAggregatesFilter<"Event"> | string | null
    score?: StringNullableWithAggregatesFilter<"Event"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"Event"> | string | null
    externalUrl?: StringNullableWithAggregatesFilter<"Event"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Event"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    disciplineId?: StringNullableWithAggregatesFilter<"Event"> | string | null
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    dni: string
    phone: string
    email?: string | null
    emailVerified?: Date | string | null
    password?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    status?: $Enums.MembershipStatus
    familyHead?: UserCreateNestedOneWithoutFamilyMembersInput
    familyMembers?: UserCreateNestedManyWithoutFamilyHeadInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    dni: string
    phone: string
    email?: string | null
    emailVerified?: Date | string | null
    password?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    status?: $Enums.MembershipStatus
    familyHeadId?: string | null
    familyMembers?: UserUncheckedCreateNestedManyWithoutFamilyHeadInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus
    familyHead?: UserUpdateOneWithoutFamilyMembersNestedInput
    familyMembers?: UserUpdateManyWithoutFamilyHeadNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus
    familyHeadId?: NullableStringFieldUpdateOperationsInput | string | null
    familyMembers?: UserUncheckedUpdateManyWithoutFamilyHeadNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    dni: string
    phone: string
    email?: string | null
    emailVerified?: Date | string | null
    password?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    status?: $Enums.MembershipStatus
    familyHeadId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus
    familyHeadId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    periodCovered: string
    paymentDate?: Date | string
    paymentMethod: $Enums.PaymentMethod
    status?: $Enums.PaymentStatus
    transactionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    periodCovered: string
    paymentDate?: Date | string
    paymentMethod: $Enums.PaymentMethod
    status?: $Enums.PaymentStatus
    transactionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    periodCovered?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    periodCovered?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    periodCovered: string
    paymentDate?: Date | string
    paymentMethod: $Enums.PaymentMethod
    status?: $Enums.PaymentStatus
    transactionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    periodCovered?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    periodCovered?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type NewsArticleCreateInput = {
    id?: string
    title: string
    slug: string
    category: string
    author?: string | null
    publicationDate?: Date | string
    status?: $Enums.NewsStatus
    summary?: string | null
    excerpt?: string | null
    content?: string | null
    imageUrl?: string | null
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    discipline?: DisciplineCreateNestedOneWithoutRelatedNewsInput
  }

  export type NewsArticleUncheckedCreateInput = {
    id?: string
    title: string
    slug: string
    category: string
    author?: string | null
    publicationDate?: Date | string
    status?: $Enums.NewsStatus
    summary?: string | null
    excerpt?: string | null
    content?: string | null
    imageUrl?: string | null
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    disciplineId?: string | null
  }

  export type NewsArticleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    publicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumNewsStatusFieldUpdateOperationsInput | $Enums.NewsStatus
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discipline?: DisciplineUpdateOneWithoutRelatedNewsNestedInput
  }

  export type NewsArticleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    publicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumNewsStatusFieldUpdateOperationsInput | $Enums.NewsStatus
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    disciplineId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NewsArticleCreateManyInput = {
    id?: string
    title: string
    slug: string
    category: string
    author?: string | null
    publicationDate?: Date | string
    status?: $Enums.NewsStatus
    summary?: string | null
    excerpt?: string | null
    content?: string | null
    imageUrl?: string | null
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    disciplineId?: string | null
  }

  export type NewsArticleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    publicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumNewsStatusFieldUpdateOperationsInput | $Enums.NewsStatus
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsArticleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    publicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumNewsStatusFieldUpdateOperationsInput | $Enums.NewsStatus
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    disciplineId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DisciplineCreateInput = {
    id?: string
    name: string
    slug: string
    description: string
    mainImageUrl?: string | null
    isActive?: boolean
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: DisciplineCategoryCreateNestedManyWithoutDisciplineInput
    quickLinks?: DisciplineQuickLinkCreateNestedManyWithoutDisciplineInput
    contactInfo?: DisciplineContactInfoCreateNestedOneWithoutDisciplineInput
    relatedNews?: NewsArticleCreateNestedManyWithoutDisciplineInput
    events?: EventCreateNestedManyWithoutDisciplineInput
  }

  export type DisciplineUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    description: string
    mainImageUrl?: string | null
    isActive?: boolean
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: DisciplineCategoryUncheckedCreateNestedManyWithoutDisciplineInput
    quickLinks?: DisciplineQuickLinkUncheckedCreateNestedManyWithoutDisciplineInput
    contactInfo?: DisciplineContactInfoUncheckedCreateNestedOneWithoutDisciplineInput
    relatedNews?: NewsArticleUncheckedCreateNestedManyWithoutDisciplineInput
    events?: EventUncheckedCreateNestedManyWithoutDisciplineInput
  }

  export type DisciplineUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mainImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: DisciplineCategoryUpdateManyWithoutDisciplineNestedInput
    quickLinks?: DisciplineQuickLinkUpdateManyWithoutDisciplineNestedInput
    contactInfo?: DisciplineContactInfoUpdateOneWithoutDisciplineNestedInput
    relatedNews?: NewsArticleUpdateManyWithoutDisciplineNestedInput
    events?: EventUpdateManyWithoutDisciplineNestedInput
  }

  export type DisciplineUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mainImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: DisciplineCategoryUncheckedUpdateManyWithoutDisciplineNestedInput
    quickLinks?: DisciplineQuickLinkUncheckedUpdateManyWithoutDisciplineNestedInput
    contactInfo?: DisciplineContactInfoUncheckedUpdateOneWithoutDisciplineNestedInput
    relatedNews?: NewsArticleUncheckedUpdateManyWithoutDisciplineNestedInput
    events?: EventUncheckedUpdateManyWithoutDisciplineNestedInput
  }

  export type DisciplineCreateManyInput = {
    id?: string
    name: string
    slug: string
    description: string
    mainImageUrl?: string | null
    isActive?: boolean
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DisciplineUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mainImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisciplineUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mainImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisciplineCategoryCreateInput = {
    id?: string
    name: string
    description?: string | null
    displayOrder?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    discipline: DisciplineCreateNestedOneWithoutCategoriesInput
  }

  export type DisciplineCategoryUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    displayOrder?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    disciplineId: string
  }

  export type DisciplineCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discipline?: DisciplineUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type DisciplineCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    disciplineId?: StringFieldUpdateOperationsInput | string
  }

  export type DisciplineCategoryCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    displayOrder?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    disciplineId: string
  }

  export type DisciplineCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisciplineCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    disciplineId?: StringFieldUpdateOperationsInput | string
  }

  export type DisciplineQuickLinkCreateInput = {
    id?: string
    title: string
    url?: string | null
    icon?: string | null
    displayOrder?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    discipline: DisciplineCreateNestedOneWithoutQuickLinksInput
  }

  export type DisciplineQuickLinkUncheckedCreateInput = {
    id?: string
    title: string
    url?: string | null
    icon?: string | null
    displayOrder?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    disciplineId: string
  }

  export type DisciplineQuickLinkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discipline?: DisciplineUpdateOneRequiredWithoutQuickLinksNestedInput
  }

  export type DisciplineQuickLinkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    disciplineId?: StringFieldUpdateOperationsInput | string
  }

  export type DisciplineQuickLinkCreateManyInput = {
    id?: string
    title: string
    url?: string | null
    icon?: string | null
    displayOrder?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    disciplineId: string
  }

  export type DisciplineQuickLinkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisciplineQuickLinkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    disciplineId?: StringFieldUpdateOperationsInput | string
  }

  export type DisciplineContactInfoCreateInput = {
    id?: string
    phone?: string | null
    email?: string | null
    whatsapp?: string | null
    address?: string | null
    schedule?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    discipline: DisciplineCreateNestedOneWithoutContactInfoInput
  }

  export type DisciplineContactInfoUncheckedCreateInput = {
    id?: string
    phone?: string | null
    email?: string | null
    whatsapp?: string | null
    address?: string | null
    schedule?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    disciplineId: string
  }

  export type DisciplineContactInfoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    schedule?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discipline?: DisciplineUpdateOneRequiredWithoutContactInfoNestedInput
  }

  export type DisciplineContactInfoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    schedule?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    disciplineId?: StringFieldUpdateOperationsInput | string
  }

  export type DisciplineContactInfoCreateManyInput = {
    id?: string
    phone?: string | null
    email?: string | null
    whatsapp?: string | null
    address?: string | null
    schedule?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    disciplineId: string
  }

  export type DisciplineContactInfoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    schedule?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisciplineContactInfoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    schedule?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    disciplineId?: StringFieldUpdateOperationsInput | string
  }

  export type EventCreateInput = {
    id?: string
    title: string
    description?: string | null
    type: $Enums.EventType
    status?: $Enums.EventStatus
    eventDate: Date | string
    startTime?: string | null
    endTime?: string | null
    location: string
    address?: string | null
    isPublic?: boolean
    registrationRequired?: boolean
    registrationDeadline?: Date | string | null
    homeTeam?: string | null
    awayTeam?: string | null
    result?: string | null
    score?: string | null
    imageUrl?: string | null
    externalUrl?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    discipline?: DisciplineCreateNestedOneWithoutEventsInput
  }

  export type EventUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    type: $Enums.EventType
    status?: $Enums.EventStatus
    eventDate: Date | string
    startTime?: string | null
    endTime?: string | null
    location: string
    address?: string | null
    isPublic?: boolean
    registrationRequired?: boolean
    registrationDeadline?: Date | string | null
    homeTeam?: string | null
    awayTeam?: string | null
    result?: string | null
    score?: string | null
    imageUrl?: string | null
    externalUrl?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    disciplineId?: string | null
  }

  export type EventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    registrationRequired?: BoolFieldUpdateOperationsInput | boolean
    registrationDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    homeTeam?: NullableStringFieldUpdateOperationsInput | string | null
    awayTeam?: NullableStringFieldUpdateOperationsInput | string | null
    result?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discipline?: DisciplineUpdateOneWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    registrationRequired?: BoolFieldUpdateOperationsInput | boolean
    registrationDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    homeTeam?: NullableStringFieldUpdateOperationsInput | string | null
    awayTeam?: NullableStringFieldUpdateOperationsInput | string | null
    result?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    disciplineId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    type: $Enums.EventType
    status?: $Enums.EventStatus
    eventDate: Date | string
    startTime?: string | null
    endTime?: string | null
    location: string
    address?: string | null
    isPublic?: boolean
    registrationRequired?: boolean
    registrationDeadline?: Date | string | null
    homeTeam?: string | null
    awayTeam?: string | null
    result?: string | null
    score?: string | null
    imageUrl?: string | null
    externalUrl?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    disciplineId?: string | null
  }

  export type EventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    registrationRequired?: BoolFieldUpdateOperationsInput | boolean
    registrationDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    homeTeam?: NullableStringFieldUpdateOperationsInput | string | null
    awayTeam?: NullableStringFieldUpdateOperationsInput | string | null
    result?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    registrationRequired?: BoolFieldUpdateOperationsInput | boolean
    registrationDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    homeTeam?: NullableStringFieldUpdateOperationsInput | string | null
    awayTeam?: NullableStringFieldUpdateOperationsInput | string | null
    result?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    disciplineId?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
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

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type EnumMembershipStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MembershipStatus | EnumMembershipStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MembershipStatus[] | ListEnumMembershipStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MembershipStatus[] | ListEnumMembershipStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMembershipStatusFilter<$PrismaModel> | $Enums.MembershipStatus
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    dni?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    password?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    status?: SortOrder
    familyHeadId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    dni?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    password?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    status?: SortOrder
    familyHeadId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    dni?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    password?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    status?: SortOrder
    familyHeadId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EnumMembershipStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MembershipStatus | EnumMembershipStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MembershipStatus[] | ListEnumMembershipStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MembershipStatus[] | ListEnumMembershipStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMembershipStatusWithAggregatesFilter<$PrismaModel> | $Enums.MembershipStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMembershipStatusFilter<$PrismaModel>
    _max?: NestedEnumMembershipStatusFilter<$PrismaModel>
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    periodCovered?: SortOrder
    paymentDate?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    transactionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    periodCovered?: SortOrder
    paymentDate?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    transactionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    periodCovered?: SortOrder
    paymentDate?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    transactionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type EnumNewsStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.NewsStatus | EnumNewsStatusFieldRefInput<$PrismaModel>
    in?: $Enums.NewsStatus[] | ListEnumNewsStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.NewsStatus[] | ListEnumNewsStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumNewsStatusFilter<$PrismaModel> | $Enums.NewsStatus
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

  export type DisciplineNullableScalarRelationFilter = {
    is?: DisciplineWhereInput | null
    isNot?: DisciplineWhereInput | null
  }

  export type NewsArticleCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    author?: SortOrder
    publicationDate?: SortOrder
    status?: SortOrder
    summary?: SortOrder
    excerpt?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrder
    viewCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    disciplineId?: SortOrder
  }

  export type NewsArticleAvgOrderByAggregateInput = {
    viewCount?: SortOrder
  }

  export type NewsArticleMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    author?: SortOrder
    publicationDate?: SortOrder
    status?: SortOrder
    summary?: SortOrder
    excerpt?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrder
    viewCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    disciplineId?: SortOrder
  }

  export type NewsArticleMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    author?: SortOrder
    publicationDate?: SortOrder
    status?: SortOrder
    summary?: SortOrder
    excerpt?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrder
    viewCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    disciplineId?: SortOrder
  }

  export type NewsArticleSumOrderByAggregateInput = {
    viewCount?: SortOrder
  }

  export type EnumNewsStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NewsStatus | EnumNewsStatusFieldRefInput<$PrismaModel>
    in?: $Enums.NewsStatus[] | ListEnumNewsStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.NewsStatus[] | ListEnumNewsStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumNewsStatusWithAggregatesFilter<$PrismaModel> | $Enums.NewsStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNewsStatusFilter<$PrismaModel>
    _max?: NestedEnumNewsStatusFilter<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DisciplineCategoryListRelationFilter = {
    every?: DisciplineCategoryWhereInput
    some?: DisciplineCategoryWhereInput
    none?: DisciplineCategoryWhereInput
  }

  export type DisciplineQuickLinkListRelationFilter = {
    every?: DisciplineQuickLinkWhereInput
    some?: DisciplineQuickLinkWhereInput
    none?: DisciplineQuickLinkWhereInput
  }

  export type DisciplineContactInfoNullableScalarRelationFilter = {
    is?: DisciplineContactInfoWhereInput | null
    isNot?: DisciplineContactInfoWhereInput | null
  }

  export type NewsArticleListRelationFilter = {
    every?: NewsArticleWhereInput
    some?: NewsArticleWhereInput
    none?: NewsArticleWhereInput
  }

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type DisciplineCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DisciplineQuickLinkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NewsArticleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DisciplineCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    mainImageUrl?: SortOrder
    isActive?: SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DisciplineAvgOrderByAggregateInput = {
    displayOrder?: SortOrder
  }

  export type DisciplineMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    mainImageUrl?: SortOrder
    isActive?: SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DisciplineMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    mainImageUrl?: SortOrder
    isActive?: SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DisciplineSumOrderByAggregateInput = {
    displayOrder?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DisciplineScalarRelationFilter = {
    is?: DisciplineWhereInput
    isNot?: DisciplineWhereInput
  }

  export type DisciplineCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    displayOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    disciplineId?: SortOrder
  }

  export type DisciplineCategoryAvgOrderByAggregateInput = {
    displayOrder?: SortOrder
  }

  export type DisciplineCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    displayOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    disciplineId?: SortOrder
  }

  export type DisciplineCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    displayOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    disciplineId?: SortOrder
  }

  export type DisciplineCategorySumOrderByAggregateInput = {
    displayOrder?: SortOrder
  }

  export type DisciplineQuickLinkCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    icon?: SortOrder
    displayOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    disciplineId?: SortOrder
  }

  export type DisciplineQuickLinkAvgOrderByAggregateInput = {
    displayOrder?: SortOrder
  }

  export type DisciplineQuickLinkMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    icon?: SortOrder
    displayOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    disciplineId?: SortOrder
  }

  export type DisciplineQuickLinkMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    icon?: SortOrder
    displayOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    disciplineId?: SortOrder
  }

  export type DisciplineQuickLinkSumOrderByAggregateInput = {
    displayOrder?: SortOrder
  }

  export type DisciplineContactInfoCountOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    whatsapp?: SortOrder
    address?: SortOrder
    schedule?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    disciplineId?: SortOrder
  }

  export type DisciplineContactInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    whatsapp?: SortOrder
    address?: SortOrder
    schedule?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    disciplineId?: SortOrder
  }

  export type DisciplineContactInfoMinOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    whatsapp?: SortOrder
    address?: SortOrder
    schedule?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    disciplineId?: SortOrder
  }

  export type EnumEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEventTypeFilter<$PrismaModel> | $Enums.EventType
  }

  export type EnumEventStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEventStatusFilter<$PrismaModel> | $Enums.EventStatus
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    status?: SortOrder
    eventDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    location?: SortOrder
    address?: SortOrder
    isPublic?: SortOrder
    registrationRequired?: SortOrder
    registrationDeadline?: SortOrder
    homeTeam?: SortOrder
    awayTeam?: SortOrder
    result?: SortOrder
    score?: SortOrder
    imageUrl?: SortOrder
    externalUrl?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    disciplineId?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    status?: SortOrder
    eventDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    location?: SortOrder
    address?: SortOrder
    isPublic?: SortOrder
    registrationRequired?: SortOrder
    registrationDeadline?: SortOrder
    homeTeam?: SortOrder
    awayTeam?: SortOrder
    result?: SortOrder
    score?: SortOrder
    imageUrl?: SortOrder
    externalUrl?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    disciplineId?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    status?: SortOrder
    eventDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    location?: SortOrder
    address?: SortOrder
    isPublic?: SortOrder
    registrationRequired?: SortOrder
    registrationDeadline?: SortOrder
    homeTeam?: SortOrder
    awayTeam?: SortOrder
    result?: SortOrder
    score?: SortOrder
    imageUrl?: SortOrder
    externalUrl?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    disciplineId?: SortOrder
  }

  export type EnumEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.EventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventTypeFilter<$PrismaModel>
    _max?: NestedEnumEventTypeFilter<$PrismaModel>
  }

  export type EnumEventStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEventStatusWithAggregatesFilter<$PrismaModel> | $Enums.EventStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventStatusFilter<$PrismaModel>
    _max?: NestedEnumEventStatusFilter<$PrismaModel>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutFamilyMembersInput = {
    create?: XOR<UserCreateWithoutFamilyMembersInput, UserUncheckedCreateWithoutFamilyMembersInput>
    connectOrCreate?: UserCreateOrConnectWithoutFamilyMembersInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutFamilyHeadInput = {
    create?: XOR<UserCreateWithoutFamilyHeadInput, UserUncheckedCreateWithoutFamilyHeadInput> | UserCreateWithoutFamilyHeadInput[] | UserUncheckedCreateWithoutFamilyHeadInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFamilyHeadInput | UserCreateOrConnectWithoutFamilyHeadInput[]
    createMany?: UserCreateManyFamilyHeadInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutFamilyHeadInput = {
    create?: XOR<UserCreateWithoutFamilyHeadInput, UserUncheckedCreateWithoutFamilyHeadInput> | UserCreateWithoutFamilyHeadInput[] | UserUncheckedCreateWithoutFamilyHeadInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFamilyHeadInput | UserCreateOrConnectWithoutFamilyHeadInput[]
    createMany?: UserCreateManyFamilyHeadInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type EnumMembershipStatusFieldUpdateOperationsInput = {
    set?: $Enums.MembershipStatus
  }

  export type UserUpdateOneWithoutFamilyMembersNestedInput = {
    create?: XOR<UserCreateWithoutFamilyMembersInput, UserUncheckedCreateWithoutFamilyMembersInput>
    connectOrCreate?: UserCreateOrConnectWithoutFamilyMembersInput
    upsert?: UserUpsertWithoutFamilyMembersInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFamilyMembersInput, UserUpdateWithoutFamilyMembersInput>, UserUncheckedUpdateWithoutFamilyMembersInput>
  }

  export type UserUpdateManyWithoutFamilyHeadNestedInput = {
    create?: XOR<UserCreateWithoutFamilyHeadInput, UserUncheckedCreateWithoutFamilyHeadInput> | UserCreateWithoutFamilyHeadInput[] | UserUncheckedCreateWithoutFamilyHeadInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFamilyHeadInput | UserCreateOrConnectWithoutFamilyHeadInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutFamilyHeadInput | UserUpsertWithWhereUniqueWithoutFamilyHeadInput[]
    createMany?: UserCreateManyFamilyHeadInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutFamilyHeadInput | UserUpdateWithWhereUniqueWithoutFamilyHeadInput[]
    updateMany?: UserUpdateManyWithWhereWithoutFamilyHeadInput | UserUpdateManyWithWhereWithoutFamilyHeadInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutFamilyHeadNestedInput = {
    create?: XOR<UserCreateWithoutFamilyHeadInput, UserUncheckedCreateWithoutFamilyHeadInput> | UserCreateWithoutFamilyHeadInput[] | UserUncheckedCreateWithoutFamilyHeadInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFamilyHeadInput | UserCreateOrConnectWithoutFamilyHeadInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutFamilyHeadInput | UserUpsertWithWhereUniqueWithoutFamilyHeadInput[]
    createMany?: UserCreateManyFamilyHeadInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutFamilyHeadInput | UserUpdateWithWhereUniqueWithoutFamilyHeadInput[]
    updateMany?: UserUpdateManyWithWhereWithoutFamilyHeadInput | UserUpdateManyWithWhereWithoutFamilyHeadInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    connect?: UserWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type UserUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    upsert?: UserUpsertWithoutPaymentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentsInput, UserUpdateWithoutPaymentsInput>, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type DisciplineCreateNestedOneWithoutRelatedNewsInput = {
    create?: XOR<DisciplineCreateWithoutRelatedNewsInput, DisciplineUncheckedCreateWithoutRelatedNewsInput>
    connectOrCreate?: DisciplineCreateOrConnectWithoutRelatedNewsInput
    connect?: DisciplineWhereUniqueInput
  }

  export type EnumNewsStatusFieldUpdateOperationsInput = {
    set?: $Enums.NewsStatus
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DisciplineUpdateOneWithoutRelatedNewsNestedInput = {
    create?: XOR<DisciplineCreateWithoutRelatedNewsInput, DisciplineUncheckedCreateWithoutRelatedNewsInput>
    connectOrCreate?: DisciplineCreateOrConnectWithoutRelatedNewsInput
    upsert?: DisciplineUpsertWithoutRelatedNewsInput
    disconnect?: DisciplineWhereInput | boolean
    delete?: DisciplineWhereInput | boolean
    connect?: DisciplineWhereUniqueInput
    update?: XOR<XOR<DisciplineUpdateToOneWithWhereWithoutRelatedNewsInput, DisciplineUpdateWithoutRelatedNewsInput>, DisciplineUncheckedUpdateWithoutRelatedNewsInput>
  }

  export type DisciplineCategoryCreateNestedManyWithoutDisciplineInput = {
    create?: XOR<DisciplineCategoryCreateWithoutDisciplineInput, DisciplineCategoryUncheckedCreateWithoutDisciplineInput> | DisciplineCategoryCreateWithoutDisciplineInput[] | DisciplineCategoryUncheckedCreateWithoutDisciplineInput[]
    connectOrCreate?: DisciplineCategoryCreateOrConnectWithoutDisciplineInput | DisciplineCategoryCreateOrConnectWithoutDisciplineInput[]
    createMany?: DisciplineCategoryCreateManyDisciplineInputEnvelope
    connect?: DisciplineCategoryWhereUniqueInput | DisciplineCategoryWhereUniqueInput[]
  }

  export type DisciplineQuickLinkCreateNestedManyWithoutDisciplineInput = {
    create?: XOR<DisciplineQuickLinkCreateWithoutDisciplineInput, DisciplineQuickLinkUncheckedCreateWithoutDisciplineInput> | DisciplineQuickLinkCreateWithoutDisciplineInput[] | DisciplineQuickLinkUncheckedCreateWithoutDisciplineInput[]
    connectOrCreate?: DisciplineQuickLinkCreateOrConnectWithoutDisciplineInput | DisciplineQuickLinkCreateOrConnectWithoutDisciplineInput[]
    createMany?: DisciplineQuickLinkCreateManyDisciplineInputEnvelope
    connect?: DisciplineQuickLinkWhereUniqueInput | DisciplineQuickLinkWhereUniqueInput[]
  }

  export type DisciplineContactInfoCreateNestedOneWithoutDisciplineInput = {
    create?: XOR<DisciplineContactInfoCreateWithoutDisciplineInput, DisciplineContactInfoUncheckedCreateWithoutDisciplineInput>
    connectOrCreate?: DisciplineContactInfoCreateOrConnectWithoutDisciplineInput
    connect?: DisciplineContactInfoWhereUniqueInput
  }

  export type NewsArticleCreateNestedManyWithoutDisciplineInput = {
    create?: XOR<NewsArticleCreateWithoutDisciplineInput, NewsArticleUncheckedCreateWithoutDisciplineInput> | NewsArticleCreateWithoutDisciplineInput[] | NewsArticleUncheckedCreateWithoutDisciplineInput[]
    connectOrCreate?: NewsArticleCreateOrConnectWithoutDisciplineInput | NewsArticleCreateOrConnectWithoutDisciplineInput[]
    createMany?: NewsArticleCreateManyDisciplineInputEnvelope
    connect?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
  }

  export type EventCreateNestedManyWithoutDisciplineInput = {
    create?: XOR<EventCreateWithoutDisciplineInput, EventUncheckedCreateWithoutDisciplineInput> | EventCreateWithoutDisciplineInput[] | EventUncheckedCreateWithoutDisciplineInput[]
    connectOrCreate?: EventCreateOrConnectWithoutDisciplineInput | EventCreateOrConnectWithoutDisciplineInput[]
    createMany?: EventCreateManyDisciplineInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type DisciplineCategoryUncheckedCreateNestedManyWithoutDisciplineInput = {
    create?: XOR<DisciplineCategoryCreateWithoutDisciplineInput, DisciplineCategoryUncheckedCreateWithoutDisciplineInput> | DisciplineCategoryCreateWithoutDisciplineInput[] | DisciplineCategoryUncheckedCreateWithoutDisciplineInput[]
    connectOrCreate?: DisciplineCategoryCreateOrConnectWithoutDisciplineInput | DisciplineCategoryCreateOrConnectWithoutDisciplineInput[]
    createMany?: DisciplineCategoryCreateManyDisciplineInputEnvelope
    connect?: DisciplineCategoryWhereUniqueInput | DisciplineCategoryWhereUniqueInput[]
  }

  export type DisciplineQuickLinkUncheckedCreateNestedManyWithoutDisciplineInput = {
    create?: XOR<DisciplineQuickLinkCreateWithoutDisciplineInput, DisciplineQuickLinkUncheckedCreateWithoutDisciplineInput> | DisciplineQuickLinkCreateWithoutDisciplineInput[] | DisciplineQuickLinkUncheckedCreateWithoutDisciplineInput[]
    connectOrCreate?: DisciplineQuickLinkCreateOrConnectWithoutDisciplineInput | DisciplineQuickLinkCreateOrConnectWithoutDisciplineInput[]
    createMany?: DisciplineQuickLinkCreateManyDisciplineInputEnvelope
    connect?: DisciplineQuickLinkWhereUniqueInput | DisciplineQuickLinkWhereUniqueInput[]
  }

  export type DisciplineContactInfoUncheckedCreateNestedOneWithoutDisciplineInput = {
    create?: XOR<DisciplineContactInfoCreateWithoutDisciplineInput, DisciplineContactInfoUncheckedCreateWithoutDisciplineInput>
    connectOrCreate?: DisciplineContactInfoCreateOrConnectWithoutDisciplineInput
    connect?: DisciplineContactInfoWhereUniqueInput
  }

  export type NewsArticleUncheckedCreateNestedManyWithoutDisciplineInput = {
    create?: XOR<NewsArticleCreateWithoutDisciplineInput, NewsArticleUncheckedCreateWithoutDisciplineInput> | NewsArticleCreateWithoutDisciplineInput[] | NewsArticleUncheckedCreateWithoutDisciplineInput[]
    connectOrCreate?: NewsArticleCreateOrConnectWithoutDisciplineInput | NewsArticleCreateOrConnectWithoutDisciplineInput[]
    createMany?: NewsArticleCreateManyDisciplineInputEnvelope
    connect?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutDisciplineInput = {
    create?: XOR<EventCreateWithoutDisciplineInput, EventUncheckedCreateWithoutDisciplineInput> | EventCreateWithoutDisciplineInput[] | EventUncheckedCreateWithoutDisciplineInput[]
    connectOrCreate?: EventCreateOrConnectWithoutDisciplineInput | EventCreateOrConnectWithoutDisciplineInput[]
    createMany?: EventCreateManyDisciplineInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DisciplineCategoryUpdateManyWithoutDisciplineNestedInput = {
    create?: XOR<DisciplineCategoryCreateWithoutDisciplineInput, DisciplineCategoryUncheckedCreateWithoutDisciplineInput> | DisciplineCategoryCreateWithoutDisciplineInput[] | DisciplineCategoryUncheckedCreateWithoutDisciplineInput[]
    connectOrCreate?: DisciplineCategoryCreateOrConnectWithoutDisciplineInput | DisciplineCategoryCreateOrConnectWithoutDisciplineInput[]
    upsert?: DisciplineCategoryUpsertWithWhereUniqueWithoutDisciplineInput | DisciplineCategoryUpsertWithWhereUniqueWithoutDisciplineInput[]
    createMany?: DisciplineCategoryCreateManyDisciplineInputEnvelope
    set?: DisciplineCategoryWhereUniqueInput | DisciplineCategoryWhereUniqueInput[]
    disconnect?: DisciplineCategoryWhereUniqueInput | DisciplineCategoryWhereUniqueInput[]
    delete?: DisciplineCategoryWhereUniqueInput | DisciplineCategoryWhereUniqueInput[]
    connect?: DisciplineCategoryWhereUniqueInput | DisciplineCategoryWhereUniqueInput[]
    update?: DisciplineCategoryUpdateWithWhereUniqueWithoutDisciplineInput | DisciplineCategoryUpdateWithWhereUniqueWithoutDisciplineInput[]
    updateMany?: DisciplineCategoryUpdateManyWithWhereWithoutDisciplineInput | DisciplineCategoryUpdateManyWithWhereWithoutDisciplineInput[]
    deleteMany?: DisciplineCategoryScalarWhereInput | DisciplineCategoryScalarWhereInput[]
  }

  export type DisciplineQuickLinkUpdateManyWithoutDisciplineNestedInput = {
    create?: XOR<DisciplineQuickLinkCreateWithoutDisciplineInput, DisciplineQuickLinkUncheckedCreateWithoutDisciplineInput> | DisciplineQuickLinkCreateWithoutDisciplineInput[] | DisciplineQuickLinkUncheckedCreateWithoutDisciplineInput[]
    connectOrCreate?: DisciplineQuickLinkCreateOrConnectWithoutDisciplineInput | DisciplineQuickLinkCreateOrConnectWithoutDisciplineInput[]
    upsert?: DisciplineQuickLinkUpsertWithWhereUniqueWithoutDisciplineInput | DisciplineQuickLinkUpsertWithWhereUniqueWithoutDisciplineInput[]
    createMany?: DisciplineQuickLinkCreateManyDisciplineInputEnvelope
    set?: DisciplineQuickLinkWhereUniqueInput | DisciplineQuickLinkWhereUniqueInput[]
    disconnect?: DisciplineQuickLinkWhereUniqueInput | DisciplineQuickLinkWhereUniqueInput[]
    delete?: DisciplineQuickLinkWhereUniqueInput | DisciplineQuickLinkWhereUniqueInput[]
    connect?: DisciplineQuickLinkWhereUniqueInput | DisciplineQuickLinkWhereUniqueInput[]
    update?: DisciplineQuickLinkUpdateWithWhereUniqueWithoutDisciplineInput | DisciplineQuickLinkUpdateWithWhereUniqueWithoutDisciplineInput[]
    updateMany?: DisciplineQuickLinkUpdateManyWithWhereWithoutDisciplineInput | DisciplineQuickLinkUpdateManyWithWhereWithoutDisciplineInput[]
    deleteMany?: DisciplineQuickLinkScalarWhereInput | DisciplineQuickLinkScalarWhereInput[]
  }

  export type DisciplineContactInfoUpdateOneWithoutDisciplineNestedInput = {
    create?: XOR<DisciplineContactInfoCreateWithoutDisciplineInput, DisciplineContactInfoUncheckedCreateWithoutDisciplineInput>
    connectOrCreate?: DisciplineContactInfoCreateOrConnectWithoutDisciplineInput
    upsert?: DisciplineContactInfoUpsertWithoutDisciplineInput
    disconnect?: DisciplineContactInfoWhereInput | boolean
    delete?: DisciplineContactInfoWhereInput | boolean
    connect?: DisciplineContactInfoWhereUniqueInput
    update?: XOR<XOR<DisciplineContactInfoUpdateToOneWithWhereWithoutDisciplineInput, DisciplineContactInfoUpdateWithoutDisciplineInput>, DisciplineContactInfoUncheckedUpdateWithoutDisciplineInput>
  }

  export type NewsArticleUpdateManyWithoutDisciplineNestedInput = {
    create?: XOR<NewsArticleCreateWithoutDisciplineInput, NewsArticleUncheckedCreateWithoutDisciplineInput> | NewsArticleCreateWithoutDisciplineInput[] | NewsArticleUncheckedCreateWithoutDisciplineInput[]
    connectOrCreate?: NewsArticleCreateOrConnectWithoutDisciplineInput | NewsArticleCreateOrConnectWithoutDisciplineInput[]
    upsert?: NewsArticleUpsertWithWhereUniqueWithoutDisciplineInput | NewsArticleUpsertWithWhereUniqueWithoutDisciplineInput[]
    createMany?: NewsArticleCreateManyDisciplineInputEnvelope
    set?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
    disconnect?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
    delete?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
    connect?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
    update?: NewsArticleUpdateWithWhereUniqueWithoutDisciplineInput | NewsArticleUpdateWithWhereUniqueWithoutDisciplineInput[]
    updateMany?: NewsArticleUpdateManyWithWhereWithoutDisciplineInput | NewsArticleUpdateManyWithWhereWithoutDisciplineInput[]
    deleteMany?: NewsArticleScalarWhereInput | NewsArticleScalarWhereInput[]
  }

  export type EventUpdateManyWithoutDisciplineNestedInput = {
    create?: XOR<EventCreateWithoutDisciplineInput, EventUncheckedCreateWithoutDisciplineInput> | EventCreateWithoutDisciplineInput[] | EventUncheckedCreateWithoutDisciplineInput[]
    connectOrCreate?: EventCreateOrConnectWithoutDisciplineInput | EventCreateOrConnectWithoutDisciplineInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutDisciplineInput | EventUpsertWithWhereUniqueWithoutDisciplineInput[]
    createMany?: EventCreateManyDisciplineInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutDisciplineInput | EventUpdateWithWhereUniqueWithoutDisciplineInput[]
    updateMany?: EventUpdateManyWithWhereWithoutDisciplineInput | EventUpdateManyWithWhereWithoutDisciplineInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type DisciplineCategoryUncheckedUpdateManyWithoutDisciplineNestedInput = {
    create?: XOR<DisciplineCategoryCreateWithoutDisciplineInput, DisciplineCategoryUncheckedCreateWithoutDisciplineInput> | DisciplineCategoryCreateWithoutDisciplineInput[] | DisciplineCategoryUncheckedCreateWithoutDisciplineInput[]
    connectOrCreate?: DisciplineCategoryCreateOrConnectWithoutDisciplineInput | DisciplineCategoryCreateOrConnectWithoutDisciplineInput[]
    upsert?: DisciplineCategoryUpsertWithWhereUniqueWithoutDisciplineInput | DisciplineCategoryUpsertWithWhereUniqueWithoutDisciplineInput[]
    createMany?: DisciplineCategoryCreateManyDisciplineInputEnvelope
    set?: DisciplineCategoryWhereUniqueInput | DisciplineCategoryWhereUniqueInput[]
    disconnect?: DisciplineCategoryWhereUniqueInput | DisciplineCategoryWhereUniqueInput[]
    delete?: DisciplineCategoryWhereUniqueInput | DisciplineCategoryWhereUniqueInput[]
    connect?: DisciplineCategoryWhereUniqueInput | DisciplineCategoryWhereUniqueInput[]
    update?: DisciplineCategoryUpdateWithWhereUniqueWithoutDisciplineInput | DisciplineCategoryUpdateWithWhereUniqueWithoutDisciplineInput[]
    updateMany?: DisciplineCategoryUpdateManyWithWhereWithoutDisciplineInput | DisciplineCategoryUpdateManyWithWhereWithoutDisciplineInput[]
    deleteMany?: DisciplineCategoryScalarWhereInput | DisciplineCategoryScalarWhereInput[]
  }

  export type DisciplineQuickLinkUncheckedUpdateManyWithoutDisciplineNestedInput = {
    create?: XOR<DisciplineQuickLinkCreateWithoutDisciplineInput, DisciplineQuickLinkUncheckedCreateWithoutDisciplineInput> | DisciplineQuickLinkCreateWithoutDisciplineInput[] | DisciplineQuickLinkUncheckedCreateWithoutDisciplineInput[]
    connectOrCreate?: DisciplineQuickLinkCreateOrConnectWithoutDisciplineInput | DisciplineQuickLinkCreateOrConnectWithoutDisciplineInput[]
    upsert?: DisciplineQuickLinkUpsertWithWhereUniqueWithoutDisciplineInput | DisciplineQuickLinkUpsertWithWhereUniqueWithoutDisciplineInput[]
    createMany?: DisciplineQuickLinkCreateManyDisciplineInputEnvelope
    set?: DisciplineQuickLinkWhereUniqueInput | DisciplineQuickLinkWhereUniqueInput[]
    disconnect?: DisciplineQuickLinkWhereUniqueInput | DisciplineQuickLinkWhereUniqueInput[]
    delete?: DisciplineQuickLinkWhereUniqueInput | DisciplineQuickLinkWhereUniqueInput[]
    connect?: DisciplineQuickLinkWhereUniqueInput | DisciplineQuickLinkWhereUniqueInput[]
    update?: DisciplineQuickLinkUpdateWithWhereUniqueWithoutDisciplineInput | DisciplineQuickLinkUpdateWithWhereUniqueWithoutDisciplineInput[]
    updateMany?: DisciplineQuickLinkUpdateManyWithWhereWithoutDisciplineInput | DisciplineQuickLinkUpdateManyWithWhereWithoutDisciplineInput[]
    deleteMany?: DisciplineQuickLinkScalarWhereInput | DisciplineQuickLinkScalarWhereInput[]
  }

  export type DisciplineContactInfoUncheckedUpdateOneWithoutDisciplineNestedInput = {
    create?: XOR<DisciplineContactInfoCreateWithoutDisciplineInput, DisciplineContactInfoUncheckedCreateWithoutDisciplineInput>
    connectOrCreate?: DisciplineContactInfoCreateOrConnectWithoutDisciplineInput
    upsert?: DisciplineContactInfoUpsertWithoutDisciplineInput
    disconnect?: DisciplineContactInfoWhereInput | boolean
    delete?: DisciplineContactInfoWhereInput | boolean
    connect?: DisciplineContactInfoWhereUniqueInput
    update?: XOR<XOR<DisciplineContactInfoUpdateToOneWithWhereWithoutDisciplineInput, DisciplineContactInfoUpdateWithoutDisciplineInput>, DisciplineContactInfoUncheckedUpdateWithoutDisciplineInput>
  }

  export type NewsArticleUncheckedUpdateManyWithoutDisciplineNestedInput = {
    create?: XOR<NewsArticleCreateWithoutDisciplineInput, NewsArticleUncheckedCreateWithoutDisciplineInput> | NewsArticleCreateWithoutDisciplineInput[] | NewsArticleUncheckedCreateWithoutDisciplineInput[]
    connectOrCreate?: NewsArticleCreateOrConnectWithoutDisciplineInput | NewsArticleCreateOrConnectWithoutDisciplineInput[]
    upsert?: NewsArticleUpsertWithWhereUniqueWithoutDisciplineInput | NewsArticleUpsertWithWhereUniqueWithoutDisciplineInput[]
    createMany?: NewsArticleCreateManyDisciplineInputEnvelope
    set?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
    disconnect?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
    delete?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
    connect?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
    update?: NewsArticleUpdateWithWhereUniqueWithoutDisciplineInput | NewsArticleUpdateWithWhereUniqueWithoutDisciplineInput[]
    updateMany?: NewsArticleUpdateManyWithWhereWithoutDisciplineInput | NewsArticleUpdateManyWithWhereWithoutDisciplineInput[]
    deleteMany?: NewsArticleScalarWhereInput | NewsArticleScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutDisciplineNestedInput = {
    create?: XOR<EventCreateWithoutDisciplineInput, EventUncheckedCreateWithoutDisciplineInput> | EventCreateWithoutDisciplineInput[] | EventUncheckedCreateWithoutDisciplineInput[]
    connectOrCreate?: EventCreateOrConnectWithoutDisciplineInput | EventCreateOrConnectWithoutDisciplineInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutDisciplineInput | EventUpsertWithWhereUniqueWithoutDisciplineInput[]
    createMany?: EventCreateManyDisciplineInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutDisciplineInput | EventUpdateWithWhereUniqueWithoutDisciplineInput[]
    updateMany?: EventUpdateManyWithWhereWithoutDisciplineInput | EventUpdateManyWithWhereWithoutDisciplineInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type DisciplineCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<DisciplineCreateWithoutCategoriesInput, DisciplineUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: DisciplineCreateOrConnectWithoutCategoriesInput
    connect?: DisciplineWhereUniqueInput
  }

  export type DisciplineUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<DisciplineCreateWithoutCategoriesInput, DisciplineUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: DisciplineCreateOrConnectWithoutCategoriesInput
    upsert?: DisciplineUpsertWithoutCategoriesInput
    connect?: DisciplineWhereUniqueInput
    update?: XOR<XOR<DisciplineUpdateToOneWithWhereWithoutCategoriesInput, DisciplineUpdateWithoutCategoriesInput>, DisciplineUncheckedUpdateWithoutCategoriesInput>
  }

  export type DisciplineCreateNestedOneWithoutQuickLinksInput = {
    create?: XOR<DisciplineCreateWithoutQuickLinksInput, DisciplineUncheckedCreateWithoutQuickLinksInput>
    connectOrCreate?: DisciplineCreateOrConnectWithoutQuickLinksInput
    connect?: DisciplineWhereUniqueInput
  }

  export type DisciplineUpdateOneRequiredWithoutQuickLinksNestedInput = {
    create?: XOR<DisciplineCreateWithoutQuickLinksInput, DisciplineUncheckedCreateWithoutQuickLinksInput>
    connectOrCreate?: DisciplineCreateOrConnectWithoutQuickLinksInput
    upsert?: DisciplineUpsertWithoutQuickLinksInput
    connect?: DisciplineWhereUniqueInput
    update?: XOR<XOR<DisciplineUpdateToOneWithWhereWithoutQuickLinksInput, DisciplineUpdateWithoutQuickLinksInput>, DisciplineUncheckedUpdateWithoutQuickLinksInput>
  }

  export type DisciplineCreateNestedOneWithoutContactInfoInput = {
    create?: XOR<DisciplineCreateWithoutContactInfoInput, DisciplineUncheckedCreateWithoutContactInfoInput>
    connectOrCreate?: DisciplineCreateOrConnectWithoutContactInfoInput
    connect?: DisciplineWhereUniqueInput
  }

  export type DisciplineUpdateOneRequiredWithoutContactInfoNestedInput = {
    create?: XOR<DisciplineCreateWithoutContactInfoInput, DisciplineUncheckedCreateWithoutContactInfoInput>
    connectOrCreate?: DisciplineCreateOrConnectWithoutContactInfoInput
    upsert?: DisciplineUpsertWithoutContactInfoInput
    connect?: DisciplineWhereUniqueInput
    update?: XOR<XOR<DisciplineUpdateToOneWithWhereWithoutContactInfoInput, DisciplineUpdateWithoutContactInfoInput>, DisciplineUncheckedUpdateWithoutContactInfoInput>
  }

  export type DisciplineCreateNestedOneWithoutEventsInput = {
    create?: XOR<DisciplineCreateWithoutEventsInput, DisciplineUncheckedCreateWithoutEventsInput>
    connectOrCreate?: DisciplineCreateOrConnectWithoutEventsInput
    connect?: DisciplineWhereUniqueInput
  }

  export type EnumEventTypeFieldUpdateOperationsInput = {
    set?: $Enums.EventType
  }

  export type EnumEventStatusFieldUpdateOperationsInput = {
    set?: $Enums.EventStatus
  }

  export type DisciplineUpdateOneWithoutEventsNestedInput = {
    create?: XOR<DisciplineCreateWithoutEventsInput, DisciplineUncheckedCreateWithoutEventsInput>
    connectOrCreate?: DisciplineCreateOrConnectWithoutEventsInput
    upsert?: DisciplineUpsertWithoutEventsInput
    disconnect?: DisciplineWhereInput | boolean
    delete?: DisciplineWhereInput | boolean
    connect?: DisciplineWhereUniqueInput
    update?: XOR<XOR<DisciplineUpdateToOneWithWhereWithoutEventsInput, DisciplineUpdateWithoutEventsInput>, DisciplineUncheckedUpdateWithoutEventsInput>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumMembershipStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MembershipStatus | EnumMembershipStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MembershipStatus[] | ListEnumMembershipStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MembershipStatus[] | ListEnumMembershipStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMembershipStatusFilter<$PrismaModel> | $Enums.MembershipStatus
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumMembershipStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MembershipStatus | EnumMembershipStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MembershipStatus[] | ListEnumMembershipStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MembershipStatus[] | ListEnumMembershipStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMembershipStatusWithAggregatesFilter<$PrismaModel> | $Enums.MembershipStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMembershipStatusFilter<$PrismaModel>
    _max?: NestedEnumMembershipStatusFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedEnumNewsStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.NewsStatus | EnumNewsStatusFieldRefInput<$PrismaModel>
    in?: $Enums.NewsStatus[] | ListEnumNewsStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.NewsStatus[] | ListEnumNewsStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumNewsStatusFilter<$PrismaModel> | $Enums.NewsStatus
  }

  export type NestedEnumNewsStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NewsStatus | EnumNewsStatusFieldRefInput<$PrismaModel>
    in?: $Enums.NewsStatus[] | ListEnumNewsStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.NewsStatus[] | ListEnumNewsStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumNewsStatusWithAggregatesFilter<$PrismaModel> | $Enums.NewsStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNewsStatusFilter<$PrismaModel>
    _max?: NestedEnumNewsStatusFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEventTypeFilter<$PrismaModel> | $Enums.EventType
  }

  export type NestedEnumEventStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEventStatusFilter<$PrismaModel> | $Enums.EventStatus
  }

  export type NestedEnumEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.EventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventTypeFilter<$PrismaModel>
    _max?: NestedEnumEventTypeFilter<$PrismaModel>
  }

  export type NestedEnumEventStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEventStatusWithAggregatesFilter<$PrismaModel> | $Enums.EventStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventStatusFilter<$PrismaModel>
    _max?: NestedEnumEventStatusFilter<$PrismaModel>
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    dni: string
    phone: string
    email?: string | null
    emailVerified?: Date | string | null
    password?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    status?: $Enums.MembershipStatus
    familyHead?: UserCreateNestedOneWithoutFamilyMembersInput
    familyMembers?: UserCreateNestedManyWithoutFamilyHeadInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    dni: string
    phone: string
    email?: string | null
    emailVerified?: Date | string | null
    password?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    status?: $Enums.MembershipStatus
    familyHeadId?: string | null
    familyMembers?: UserUncheckedCreateNestedManyWithoutFamilyHeadInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus
    familyHead?: UserUpdateOneWithoutFamilyMembersNestedInput
    familyMembers?: UserUpdateManyWithoutFamilyHeadNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus
    familyHeadId?: NullableStringFieldUpdateOperationsInput | string | null
    familyMembers?: UserUncheckedUpdateManyWithoutFamilyHeadNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    dni: string
    phone: string
    email?: string | null
    emailVerified?: Date | string | null
    password?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    status?: $Enums.MembershipStatus
    familyHead?: UserCreateNestedOneWithoutFamilyMembersInput
    familyMembers?: UserCreateNestedManyWithoutFamilyHeadInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    dni: string
    phone: string
    email?: string | null
    emailVerified?: Date | string | null
    password?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    status?: $Enums.MembershipStatus
    familyHeadId?: string | null
    familyMembers?: UserUncheckedCreateNestedManyWithoutFamilyHeadInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus
    familyHead?: UserUpdateOneWithoutFamilyMembersNestedInput
    familyMembers?: UserUpdateManyWithoutFamilyHeadNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus
    familyHeadId?: NullableStringFieldUpdateOperationsInput | string | null
    familyMembers?: UserUncheckedUpdateManyWithoutFamilyHeadNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutFamilyMembersInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    dni: string
    phone: string
    email?: string | null
    emailVerified?: Date | string | null
    password?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    status?: $Enums.MembershipStatus
    familyHead?: UserCreateNestedOneWithoutFamilyMembersInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFamilyMembersInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    dni: string
    phone: string
    email?: string | null
    emailVerified?: Date | string | null
    password?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    status?: $Enums.MembershipStatus
    familyHeadId?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFamilyMembersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFamilyMembersInput, UserUncheckedCreateWithoutFamilyMembersInput>
  }

  export type UserCreateWithoutFamilyHeadInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    dni: string
    phone: string
    email?: string | null
    emailVerified?: Date | string | null
    password?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    status?: $Enums.MembershipStatus
    familyMembers?: UserCreateNestedManyWithoutFamilyHeadInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFamilyHeadInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    dni: string
    phone: string
    email?: string | null
    emailVerified?: Date | string | null
    password?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    status?: $Enums.MembershipStatus
    familyMembers?: UserUncheckedCreateNestedManyWithoutFamilyHeadInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFamilyHeadInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFamilyHeadInput, UserUncheckedCreateWithoutFamilyHeadInput>
  }

  export type UserCreateManyFamilyHeadInputEnvelope = {
    data: UserCreateManyFamilyHeadInput | UserCreateManyFamilyHeadInput[]
    skipDuplicates?: boolean
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutUserInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    periodCovered: string
    paymentDate?: Date | string
    paymentMethod: $Enums.PaymentMethod
    status?: $Enums.PaymentStatus
    transactionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUncheckedCreateWithoutUserInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    periodCovered: string
    paymentDate?: Date | string
    paymentMethod: $Enums.PaymentMethod
    status?: $Enums.PaymentStatus
    transactionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutUserInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentCreateManyUserInputEnvelope = {
    data: PaymentCreateManyUserInput | PaymentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutFamilyMembersInput = {
    update: XOR<UserUpdateWithoutFamilyMembersInput, UserUncheckedUpdateWithoutFamilyMembersInput>
    create: XOR<UserCreateWithoutFamilyMembersInput, UserUncheckedCreateWithoutFamilyMembersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFamilyMembersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFamilyMembersInput, UserUncheckedUpdateWithoutFamilyMembersInput>
  }

  export type UserUpdateWithoutFamilyMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus
    familyHead?: UserUpdateOneWithoutFamilyMembersNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFamilyMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus
    familyHeadId?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutFamilyHeadInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutFamilyHeadInput, UserUncheckedUpdateWithoutFamilyHeadInput>
    create: XOR<UserCreateWithoutFamilyHeadInput, UserUncheckedCreateWithoutFamilyHeadInput>
  }

  export type UserUpdateWithWhereUniqueWithoutFamilyHeadInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutFamilyHeadInput, UserUncheckedUpdateWithoutFamilyHeadInput>
  }

  export type UserUpdateManyWithWhereWithoutFamilyHeadInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutFamilyHeadInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    dni?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    password?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    status?: EnumMembershipStatusFilter<"User"> | $Enums.MembershipStatus
    familyHeadId?: StringNullableFilter<"User"> | string | null
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type PaymentUpsertWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
  }

  export type PaymentUpdateManyWithWhereWithoutUserInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutUserInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    periodCovered?: StringFilter<"Payment"> | string
    paymentDate?: DateTimeFilter<"Payment"> | Date | string
    paymentMethod?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    transactionId?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    userId?: StringFilter<"Payment"> | string
  }

  export type UserCreateWithoutPaymentsInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    dni: string
    phone: string
    email?: string | null
    emailVerified?: Date | string | null
    password?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    status?: $Enums.MembershipStatus
    familyHead?: UserCreateNestedOneWithoutFamilyMembersInput
    familyMembers?: UserCreateNestedManyWithoutFamilyHeadInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPaymentsInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    dni: string
    phone: string
    email?: string | null
    emailVerified?: Date | string | null
    password?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    status?: $Enums.MembershipStatus
    familyHeadId?: string | null
    familyMembers?: UserUncheckedCreateNestedManyWithoutFamilyHeadInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPaymentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
  }

  export type UserUpsertWithoutPaymentsInput = {
    update: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type UserUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus
    familyHead?: UserUpdateOneWithoutFamilyMembersNestedInput
    familyMembers?: UserUpdateManyWithoutFamilyHeadNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus
    familyHeadId?: NullableStringFieldUpdateOperationsInput | string | null
    familyMembers?: UserUncheckedUpdateManyWithoutFamilyHeadNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DisciplineCreateWithoutRelatedNewsInput = {
    id?: string
    name: string
    slug: string
    description: string
    mainImageUrl?: string | null
    isActive?: boolean
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: DisciplineCategoryCreateNestedManyWithoutDisciplineInput
    quickLinks?: DisciplineQuickLinkCreateNestedManyWithoutDisciplineInput
    contactInfo?: DisciplineContactInfoCreateNestedOneWithoutDisciplineInput
    events?: EventCreateNestedManyWithoutDisciplineInput
  }

  export type DisciplineUncheckedCreateWithoutRelatedNewsInput = {
    id?: string
    name: string
    slug: string
    description: string
    mainImageUrl?: string | null
    isActive?: boolean
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: DisciplineCategoryUncheckedCreateNestedManyWithoutDisciplineInput
    quickLinks?: DisciplineQuickLinkUncheckedCreateNestedManyWithoutDisciplineInput
    contactInfo?: DisciplineContactInfoUncheckedCreateNestedOneWithoutDisciplineInput
    events?: EventUncheckedCreateNestedManyWithoutDisciplineInput
  }

  export type DisciplineCreateOrConnectWithoutRelatedNewsInput = {
    where: DisciplineWhereUniqueInput
    create: XOR<DisciplineCreateWithoutRelatedNewsInput, DisciplineUncheckedCreateWithoutRelatedNewsInput>
  }

  export type DisciplineUpsertWithoutRelatedNewsInput = {
    update: XOR<DisciplineUpdateWithoutRelatedNewsInput, DisciplineUncheckedUpdateWithoutRelatedNewsInput>
    create: XOR<DisciplineCreateWithoutRelatedNewsInput, DisciplineUncheckedCreateWithoutRelatedNewsInput>
    where?: DisciplineWhereInput
  }

  export type DisciplineUpdateToOneWithWhereWithoutRelatedNewsInput = {
    where?: DisciplineWhereInput
    data: XOR<DisciplineUpdateWithoutRelatedNewsInput, DisciplineUncheckedUpdateWithoutRelatedNewsInput>
  }

  export type DisciplineUpdateWithoutRelatedNewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mainImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: DisciplineCategoryUpdateManyWithoutDisciplineNestedInput
    quickLinks?: DisciplineQuickLinkUpdateManyWithoutDisciplineNestedInput
    contactInfo?: DisciplineContactInfoUpdateOneWithoutDisciplineNestedInput
    events?: EventUpdateManyWithoutDisciplineNestedInput
  }

  export type DisciplineUncheckedUpdateWithoutRelatedNewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mainImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: DisciplineCategoryUncheckedUpdateManyWithoutDisciplineNestedInput
    quickLinks?: DisciplineQuickLinkUncheckedUpdateManyWithoutDisciplineNestedInput
    contactInfo?: DisciplineContactInfoUncheckedUpdateOneWithoutDisciplineNestedInput
    events?: EventUncheckedUpdateManyWithoutDisciplineNestedInput
  }

  export type DisciplineCategoryCreateWithoutDisciplineInput = {
    id?: string
    name: string
    description?: string | null
    displayOrder?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DisciplineCategoryUncheckedCreateWithoutDisciplineInput = {
    id?: string
    name: string
    description?: string | null
    displayOrder?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DisciplineCategoryCreateOrConnectWithoutDisciplineInput = {
    where: DisciplineCategoryWhereUniqueInput
    create: XOR<DisciplineCategoryCreateWithoutDisciplineInput, DisciplineCategoryUncheckedCreateWithoutDisciplineInput>
  }

  export type DisciplineCategoryCreateManyDisciplineInputEnvelope = {
    data: DisciplineCategoryCreateManyDisciplineInput | DisciplineCategoryCreateManyDisciplineInput[]
    skipDuplicates?: boolean
  }

  export type DisciplineQuickLinkCreateWithoutDisciplineInput = {
    id?: string
    title: string
    url?: string | null
    icon?: string | null
    displayOrder?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DisciplineQuickLinkUncheckedCreateWithoutDisciplineInput = {
    id?: string
    title: string
    url?: string | null
    icon?: string | null
    displayOrder?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DisciplineQuickLinkCreateOrConnectWithoutDisciplineInput = {
    where: DisciplineQuickLinkWhereUniqueInput
    create: XOR<DisciplineQuickLinkCreateWithoutDisciplineInput, DisciplineQuickLinkUncheckedCreateWithoutDisciplineInput>
  }

  export type DisciplineQuickLinkCreateManyDisciplineInputEnvelope = {
    data: DisciplineQuickLinkCreateManyDisciplineInput | DisciplineQuickLinkCreateManyDisciplineInput[]
    skipDuplicates?: boolean
  }

  export type DisciplineContactInfoCreateWithoutDisciplineInput = {
    id?: string
    phone?: string | null
    email?: string | null
    whatsapp?: string | null
    address?: string | null
    schedule?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DisciplineContactInfoUncheckedCreateWithoutDisciplineInput = {
    id?: string
    phone?: string | null
    email?: string | null
    whatsapp?: string | null
    address?: string | null
    schedule?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DisciplineContactInfoCreateOrConnectWithoutDisciplineInput = {
    where: DisciplineContactInfoWhereUniqueInput
    create: XOR<DisciplineContactInfoCreateWithoutDisciplineInput, DisciplineContactInfoUncheckedCreateWithoutDisciplineInput>
  }

  export type NewsArticleCreateWithoutDisciplineInput = {
    id?: string
    title: string
    slug: string
    category: string
    author?: string | null
    publicationDate?: Date | string
    status?: $Enums.NewsStatus
    summary?: string | null
    excerpt?: string | null
    content?: string | null
    imageUrl?: string | null
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsArticleUncheckedCreateWithoutDisciplineInput = {
    id?: string
    title: string
    slug: string
    category: string
    author?: string | null
    publicationDate?: Date | string
    status?: $Enums.NewsStatus
    summary?: string | null
    excerpt?: string | null
    content?: string | null
    imageUrl?: string | null
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsArticleCreateOrConnectWithoutDisciplineInput = {
    where: NewsArticleWhereUniqueInput
    create: XOR<NewsArticleCreateWithoutDisciplineInput, NewsArticleUncheckedCreateWithoutDisciplineInput>
  }

  export type NewsArticleCreateManyDisciplineInputEnvelope = {
    data: NewsArticleCreateManyDisciplineInput | NewsArticleCreateManyDisciplineInput[]
    skipDuplicates?: boolean
  }

  export type EventCreateWithoutDisciplineInput = {
    id?: string
    title: string
    description?: string | null
    type: $Enums.EventType
    status?: $Enums.EventStatus
    eventDate: Date | string
    startTime?: string | null
    endTime?: string | null
    location: string
    address?: string | null
    isPublic?: boolean
    registrationRequired?: boolean
    registrationDeadline?: Date | string | null
    homeTeam?: string | null
    awayTeam?: string | null
    result?: string | null
    score?: string | null
    imageUrl?: string | null
    externalUrl?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUncheckedCreateWithoutDisciplineInput = {
    id?: string
    title: string
    description?: string | null
    type: $Enums.EventType
    status?: $Enums.EventStatus
    eventDate: Date | string
    startTime?: string | null
    endTime?: string | null
    location: string
    address?: string | null
    isPublic?: boolean
    registrationRequired?: boolean
    registrationDeadline?: Date | string | null
    homeTeam?: string | null
    awayTeam?: string | null
    result?: string | null
    score?: string | null
    imageUrl?: string | null
    externalUrl?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventCreateOrConnectWithoutDisciplineInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutDisciplineInput, EventUncheckedCreateWithoutDisciplineInput>
  }

  export type EventCreateManyDisciplineInputEnvelope = {
    data: EventCreateManyDisciplineInput | EventCreateManyDisciplineInput[]
    skipDuplicates?: boolean
  }

  export type DisciplineCategoryUpsertWithWhereUniqueWithoutDisciplineInput = {
    where: DisciplineCategoryWhereUniqueInput
    update: XOR<DisciplineCategoryUpdateWithoutDisciplineInput, DisciplineCategoryUncheckedUpdateWithoutDisciplineInput>
    create: XOR<DisciplineCategoryCreateWithoutDisciplineInput, DisciplineCategoryUncheckedCreateWithoutDisciplineInput>
  }

  export type DisciplineCategoryUpdateWithWhereUniqueWithoutDisciplineInput = {
    where: DisciplineCategoryWhereUniqueInput
    data: XOR<DisciplineCategoryUpdateWithoutDisciplineInput, DisciplineCategoryUncheckedUpdateWithoutDisciplineInput>
  }

  export type DisciplineCategoryUpdateManyWithWhereWithoutDisciplineInput = {
    where: DisciplineCategoryScalarWhereInput
    data: XOR<DisciplineCategoryUpdateManyMutationInput, DisciplineCategoryUncheckedUpdateManyWithoutDisciplineInput>
  }

  export type DisciplineCategoryScalarWhereInput = {
    AND?: DisciplineCategoryScalarWhereInput | DisciplineCategoryScalarWhereInput[]
    OR?: DisciplineCategoryScalarWhereInput[]
    NOT?: DisciplineCategoryScalarWhereInput | DisciplineCategoryScalarWhereInput[]
    id?: StringFilter<"DisciplineCategory"> | string
    name?: StringFilter<"DisciplineCategory"> | string
    description?: StringNullableFilter<"DisciplineCategory"> | string | null
    displayOrder?: IntFilter<"DisciplineCategory"> | number
    isActive?: BoolFilter<"DisciplineCategory"> | boolean
    createdAt?: DateTimeFilter<"DisciplineCategory"> | Date | string
    updatedAt?: DateTimeFilter<"DisciplineCategory"> | Date | string
    disciplineId?: StringFilter<"DisciplineCategory"> | string
  }

  export type DisciplineQuickLinkUpsertWithWhereUniqueWithoutDisciplineInput = {
    where: DisciplineQuickLinkWhereUniqueInput
    update: XOR<DisciplineQuickLinkUpdateWithoutDisciplineInput, DisciplineQuickLinkUncheckedUpdateWithoutDisciplineInput>
    create: XOR<DisciplineQuickLinkCreateWithoutDisciplineInput, DisciplineQuickLinkUncheckedCreateWithoutDisciplineInput>
  }

  export type DisciplineQuickLinkUpdateWithWhereUniqueWithoutDisciplineInput = {
    where: DisciplineQuickLinkWhereUniqueInput
    data: XOR<DisciplineQuickLinkUpdateWithoutDisciplineInput, DisciplineQuickLinkUncheckedUpdateWithoutDisciplineInput>
  }

  export type DisciplineQuickLinkUpdateManyWithWhereWithoutDisciplineInput = {
    where: DisciplineQuickLinkScalarWhereInput
    data: XOR<DisciplineQuickLinkUpdateManyMutationInput, DisciplineQuickLinkUncheckedUpdateManyWithoutDisciplineInput>
  }

  export type DisciplineQuickLinkScalarWhereInput = {
    AND?: DisciplineQuickLinkScalarWhereInput | DisciplineQuickLinkScalarWhereInput[]
    OR?: DisciplineQuickLinkScalarWhereInput[]
    NOT?: DisciplineQuickLinkScalarWhereInput | DisciplineQuickLinkScalarWhereInput[]
    id?: StringFilter<"DisciplineQuickLink"> | string
    title?: StringFilter<"DisciplineQuickLink"> | string
    url?: StringNullableFilter<"DisciplineQuickLink"> | string | null
    icon?: StringNullableFilter<"DisciplineQuickLink"> | string | null
    displayOrder?: IntFilter<"DisciplineQuickLink"> | number
    isActive?: BoolFilter<"DisciplineQuickLink"> | boolean
    createdAt?: DateTimeFilter<"DisciplineQuickLink"> | Date | string
    updatedAt?: DateTimeFilter<"DisciplineQuickLink"> | Date | string
    disciplineId?: StringFilter<"DisciplineQuickLink"> | string
  }

  export type DisciplineContactInfoUpsertWithoutDisciplineInput = {
    update: XOR<DisciplineContactInfoUpdateWithoutDisciplineInput, DisciplineContactInfoUncheckedUpdateWithoutDisciplineInput>
    create: XOR<DisciplineContactInfoCreateWithoutDisciplineInput, DisciplineContactInfoUncheckedCreateWithoutDisciplineInput>
    where?: DisciplineContactInfoWhereInput
  }

  export type DisciplineContactInfoUpdateToOneWithWhereWithoutDisciplineInput = {
    where?: DisciplineContactInfoWhereInput
    data: XOR<DisciplineContactInfoUpdateWithoutDisciplineInput, DisciplineContactInfoUncheckedUpdateWithoutDisciplineInput>
  }

  export type DisciplineContactInfoUpdateWithoutDisciplineInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    schedule?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisciplineContactInfoUncheckedUpdateWithoutDisciplineInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    schedule?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsArticleUpsertWithWhereUniqueWithoutDisciplineInput = {
    where: NewsArticleWhereUniqueInput
    update: XOR<NewsArticleUpdateWithoutDisciplineInput, NewsArticleUncheckedUpdateWithoutDisciplineInput>
    create: XOR<NewsArticleCreateWithoutDisciplineInput, NewsArticleUncheckedCreateWithoutDisciplineInput>
  }

  export type NewsArticleUpdateWithWhereUniqueWithoutDisciplineInput = {
    where: NewsArticleWhereUniqueInput
    data: XOR<NewsArticleUpdateWithoutDisciplineInput, NewsArticleUncheckedUpdateWithoutDisciplineInput>
  }

  export type NewsArticleUpdateManyWithWhereWithoutDisciplineInput = {
    where: NewsArticleScalarWhereInput
    data: XOR<NewsArticleUpdateManyMutationInput, NewsArticleUncheckedUpdateManyWithoutDisciplineInput>
  }

  export type NewsArticleScalarWhereInput = {
    AND?: NewsArticleScalarWhereInput | NewsArticleScalarWhereInput[]
    OR?: NewsArticleScalarWhereInput[]
    NOT?: NewsArticleScalarWhereInput | NewsArticleScalarWhereInput[]
    id?: StringFilter<"NewsArticle"> | string
    title?: StringFilter<"NewsArticle"> | string
    slug?: StringFilter<"NewsArticle"> | string
    category?: StringFilter<"NewsArticle"> | string
    author?: StringNullableFilter<"NewsArticle"> | string | null
    publicationDate?: DateTimeFilter<"NewsArticle"> | Date | string
    status?: EnumNewsStatusFilter<"NewsArticle"> | $Enums.NewsStatus
    summary?: StringNullableFilter<"NewsArticle"> | string | null
    excerpt?: StringNullableFilter<"NewsArticle"> | string | null
    content?: StringNullableFilter<"NewsArticle"> | string | null
    imageUrl?: StringNullableFilter<"NewsArticle"> | string | null
    viewCount?: IntFilter<"NewsArticle"> | number
    createdAt?: DateTimeFilter<"NewsArticle"> | Date | string
    updatedAt?: DateTimeFilter<"NewsArticle"> | Date | string
    disciplineId?: StringNullableFilter<"NewsArticle"> | string | null
  }

  export type EventUpsertWithWhereUniqueWithoutDisciplineInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutDisciplineInput, EventUncheckedUpdateWithoutDisciplineInput>
    create: XOR<EventCreateWithoutDisciplineInput, EventUncheckedCreateWithoutDisciplineInput>
  }

  export type EventUpdateWithWhereUniqueWithoutDisciplineInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutDisciplineInput, EventUncheckedUpdateWithoutDisciplineInput>
  }

  export type EventUpdateManyWithWhereWithoutDisciplineInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutDisciplineInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    type?: EnumEventTypeFilter<"Event"> | $Enums.EventType
    status?: EnumEventStatusFilter<"Event"> | $Enums.EventStatus
    eventDate?: DateTimeFilter<"Event"> | Date | string
    startTime?: StringNullableFilter<"Event"> | string | null
    endTime?: StringNullableFilter<"Event"> | string | null
    location?: StringFilter<"Event"> | string
    address?: StringNullableFilter<"Event"> | string | null
    isPublic?: BoolFilter<"Event"> | boolean
    registrationRequired?: BoolFilter<"Event"> | boolean
    registrationDeadline?: DateTimeNullableFilter<"Event"> | Date | string | null
    homeTeam?: StringNullableFilter<"Event"> | string | null
    awayTeam?: StringNullableFilter<"Event"> | string | null
    result?: StringNullableFilter<"Event"> | string | null
    score?: StringNullableFilter<"Event"> | string | null
    imageUrl?: StringNullableFilter<"Event"> | string | null
    externalUrl?: StringNullableFilter<"Event"> | string | null
    notes?: StringNullableFilter<"Event"> | string | null
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    disciplineId?: StringNullableFilter<"Event"> | string | null
  }

  export type DisciplineCreateWithoutCategoriesInput = {
    id?: string
    name: string
    slug: string
    description: string
    mainImageUrl?: string | null
    isActive?: boolean
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    quickLinks?: DisciplineQuickLinkCreateNestedManyWithoutDisciplineInput
    contactInfo?: DisciplineContactInfoCreateNestedOneWithoutDisciplineInput
    relatedNews?: NewsArticleCreateNestedManyWithoutDisciplineInput
    events?: EventCreateNestedManyWithoutDisciplineInput
  }

  export type DisciplineUncheckedCreateWithoutCategoriesInput = {
    id?: string
    name: string
    slug: string
    description: string
    mainImageUrl?: string | null
    isActive?: boolean
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    quickLinks?: DisciplineQuickLinkUncheckedCreateNestedManyWithoutDisciplineInput
    contactInfo?: DisciplineContactInfoUncheckedCreateNestedOneWithoutDisciplineInput
    relatedNews?: NewsArticleUncheckedCreateNestedManyWithoutDisciplineInput
    events?: EventUncheckedCreateNestedManyWithoutDisciplineInput
  }

  export type DisciplineCreateOrConnectWithoutCategoriesInput = {
    where: DisciplineWhereUniqueInput
    create: XOR<DisciplineCreateWithoutCategoriesInput, DisciplineUncheckedCreateWithoutCategoriesInput>
  }

  export type DisciplineUpsertWithoutCategoriesInput = {
    update: XOR<DisciplineUpdateWithoutCategoriesInput, DisciplineUncheckedUpdateWithoutCategoriesInput>
    create: XOR<DisciplineCreateWithoutCategoriesInput, DisciplineUncheckedCreateWithoutCategoriesInput>
    where?: DisciplineWhereInput
  }

  export type DisciplineUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: DisciplineWhereInput
    data: XOR<DisciplineUpdateWithoutCategoriesInput, DisciplineUncheckedUpdateWithoutCategoriesInput>
  }

  export type DisciplineUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mainImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quickLinks?: DisciplineQuickLinkUpdateManyWithoutDisciplineNestedInput
    contactInfo?: DisciplineContactInfoUpdateOneWithoutDisciplineNestedInput
    relatedNews?: NewsArticleUpdateManyWithoutDisciplineNestedInput
    events?: EventUpdateManyWithoutDisciplineNestedInput
  }

  export type DisciplineUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mainImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quickLinks?: DisciplineQuickLinkUncheckedUpdateManyWithoutDisciplineNestedInput
    contactInfo?: DisciplineContactInfoUncheckedUpdateOneWithoutDisciplineNestedInput
    relatedNews?: NewsArticleUncheckedUpdateManyWithoutDisciplineNestedInput
    events?: EventUncheckedUpdateManyWithoutDisciplineNestedInput
  }

  export type DisciplineCreateWithoutQuickLinksInput = {
    id?: string
    name: string
    slug: string
    description: string
    mainImageUrl?: string | null
    isActive?: boolean
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: DisciplineCategoryCreateNestedManyWithoutDisciplineInput
    contactInfo?: DisciplineContactInfoCreateNestedOneWithoutDisciplineInput
    relatedNews?: NewsArticleCreateNestedManyWithoutDisciplineInput
    events?: EventCreateNestedManyWithoutDisciplineInput
  }

  export type DisciplineUncheckedCreateWithoutQuickLinksInput = {
    id?: string
    name: string
    slug: string
    description: string
    mainImageUrl?: string | null
    isActive?: boolean
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: DisciplineCategoryUncheckedCreateNestedManyWithoutDisciplineInput
    contactInfo?: DisciplineContactInfoUncheckedCreateNestedOneWithoutDisciplineInput
    relatedNews?: NewsArticleUncheckedCreateNestedManyWithoutDisciplineInput
    events?: EventUncheckedCreateNestedManyWithoutDisciplineInput
  }

  export type DisciplineCreateOrConnectWithoutQuickLinksInput = {
    where: DisciplineWhereUniqueInput
    create: XOR<DisciplineCreateWithoutQuickLinksInput, DisciplineUncheckedCreateWithoutQuickLinksInput>
  }

  export type DisciplineUpsertWithoutQuickLinksInput = {
    update: XOR<DisciplineUpdateWithoutQuickLinksInput, DisciplineUncheckedUpdateWithoutQuickLinksInput>
    create: XOR<DisciplineCreateWithoutQuickLinksInput, DisciplineUncheckedCreateWithoutQuickLinksInput>
    where?: DisciplineWhereInput
  }

  export type DisciplineUpdateToOneWithWhereWithoutQuickLinksInput = {
    where?: DisciplineWhereInput
    data: XOR<DisciplineUpdateWithoutQuickLinksInput, DisciplineUncheckedUpdateWithoutQuickLinksInput>
  }

  export type DisciplineUpdateWithoutQuickLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mainImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: DisciplineCategoryUpdateManyWithoutDisciplineNestedInput
    contactInfo?: DisciplineContactInfoUpdateOneWithoutDisciplineNestedInput
    relatedNews?: NewsArticleUpdateManyWithoutDisciplineNestedInput
    events?: EventUpdateManyWithoutDisciplineNestedInput
  }

  export type DisciplineUncheckedUpdateWithoutQuickLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mainImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: DisciplineCategoryUncheckedUpdateManyWithoutDisciplineNestedInput
    contactInfo?: DisciplineContactInfoUncheckedUpdateOneWithoutDisciplineNestedInput
    relatedNews?: NewsArticleUncheckedUpdateManyWithoutDisciplineNestedInput
    events?: EventUncheckedUpdateManyWithoutDisciplineNestedInput
  }

  export type DisciplineCreateWithoutContactInfoInput = {
    id?: string
    name: string
    slug: string
    description: string
    mainImageUrl?: string | null
    isActive?: boolean
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: DisciplineCategoryCreateNestedManyWithoutDisciplineInput
    quickLinks?: DisciplineQuickLinkCreateNestedManyWithoutDisciplineInput
    relatedNews?: NewsArticleCreateNestedManyWithoutDisciplineInput
    events?: EventCreateNestedManyWithoutDisciplineInput
  }

  export type DisciplineUncheckedCreateWithoutContactInfoInput = {
    id?: string
    name: string
    slug: string
    description: string
    mainImageUrl?: string | null
    isActive?: boolean
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: DisciplineCategoryUncheckedCreateNestedManyWithoutDisciplineInput
    quickLinks?: DisciplineQuickLinkUncheckedCreateNestedManyWithoutDisciplineInput
    relatedNews?: NewsArticleUncheckedCreateNestedManyWithoutDisciplineInput
    events?: EventUncheckedCreateNestedManyWithoutDisciplineInput
  }

  export type DisciplineCreateOrConnectWithoutContactInfoInput = {
    where: DisciplineWhereUniqueInput
    create: XOR<DisciplineCreateWithoutContactInfoInput, DisciplineUncheckedCreateWithoutContactInfoInput>
  }

  export type DisciplineUpsertWithoutContactInfoInput = {
    update: XOR<DisciplineUpdateWithoutContactInfoInput, DisciplineUncheckedUpdateWithoutContactInfoInput>
    create: XOR<DisciplineCreateWithoutContactInfoInput, DisciplineUncheckedCreateWithoutContactInfoInput>
    where?: DisciplineWhereInput
  }

  export type DisciplineUpdateToOneWithWhereWithoutContactInfoInput = {
    where?: DisciplineWhereInput
    data: XOR<DisciplineUpdateWithoutContactInfoInput, DisciplineUncheckedUpdateWithoutContactInfoInput>
  }

  export type DisciplineUpdateWithoutContactInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mainImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: DisciplineCategoryUpdateManyWithoutDisciplineNestedInput
    quickLinks?: DisciplineQuickLinkUpdateManyWithoutDisciplineNestedInput
    relatedNews?: NewsArticleUpdateManyWithoutDisciplineNestedInput
    events?: EventUpdateManyWithoutDisciplineNestedInput
  }

  export type DisciplineUncheckedUpdateWithoutContactInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mainImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: DisciplineCategoryUncheckedUpdateManyWithoutDisciplineNestedInput
    quickLinks?: DisciplineQuickLinkUncheckedUpdateManyWithoutDisciplineNestedInput
    relatedNews?: NewsArticleUncheckedUpdateManyWithoutDisciplineNestedInput
    events?: EventUncheckedUpdateManyWithoutDisciplineNestedInput
  }

  export type DisciplineCreateWithoutEventsInput = {
    id?: string
    name: string
    slug: string
    description: string
    mainImageUrl?: string | null
    isActive?: boolean
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: DisciplineCategoryCreateNestedManyWithoutDisciplineInput
    quickLinks?: DisciplineQuickLinkCreateNestedManyWithoutDisciplineInput
    contactInfo?: DisciplineContactInfoCreateNestedOneWithoutDisciplineInput
    relatedNews?: NewsArticleCreateNestedManyWithoutDisciplineInput
  }

  export type DisciplineUncheckedCreateWithoutEventsInput = {
    id?: string
    name: string
    slug: string
    description: string
    mainImageUrl?: string | null
    isActive?: boolean
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: DisciplineCategoryUncheckedCreateNestedManyWithoutDisciplineInput
    quickLinks?: DisciplineQuickLinkUncheckedCreateNestedManyWithoutDisciplineInput
    contactInfo?: DisciplineContactInfoUncheckedCreateNestedOneWithoutDisciplineInput
    relatedNews?: NewsArticleUncheckedCreateNestedManyWithoutDisciplineInput
  }

  export type DisciplineCreateOrConnectWithoutEventsInput = {
    where: DisciplineWhereUniqueInput
    create: XOR<DisciplineCreateWithoutEventsInput, DisciplineUncheckedCreateWithoutEventsInput>
  }

  export type DisciplineUpsertWithoutEventsInput = {
    update: XOR<DisciplineUpdateWithoutEventsInput, DisciplineUncheckedUpdateWithoutEventsInput>
    create: XOR<DisciplineCreateWithoutEventsInput, DisciplineUncheckedCreateWithoutEventsInput>
    where?: DisciplineWhereInput
  }

  export type DisciplineUpdateToOneWithWhereWithoutEventsInput = {
    where?: DisciplineWhereInput
    data: XOR<DisciplineUpdateWithoutEventsInput, DisciplineUncheckedUpdateWithoutEventsInput>
  }

  export type DisciplineUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mainImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: DisciplineCategoryUpdateManyWithoutDisciplineNestedInput
    quickLinks?: DisciplineQuickLinkUpdateManyWithoutDisciplineNestedInput
    contactInfo?: DisciplineContactInfoUpdateOneWithoutDisciplineNestedInput
    relatedNews?: NewsArticleUpdateManyWithoutDisciplineNestedInput
  }

  export type DisciplineUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mainImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: DisciplineCategoryUncheckedUpdateManyWithoutDisciplineNestedInput
    quickLinks?: DisciplineQuickLinkUncheckedUpdateManyWithoutDisciplineNestedInput
    contactInfo?: DisciplineContactInfoUncheckedUpdateOneWithoutDisciplineNestedInput
    relatedNews?: NewsArticleUncheckedUpdateManyWithoutDisciplineNestedInput
  }

  export type UserCreateManyFamilyHeadInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    dni: string
    phone: string
    email?: string | null
    emailVerified?: Date | string | null
    password?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    status?: $Enums.MembershipStatus
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateManyUserInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    periodCovered: string
    paymentDate?: Date | string
    paymentMethod: $Enums.PaymentMethod
    status?: $Enums.PaymentStatus
    transactionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutFamilyHeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus
    familyMembers?: UserUpdateManyWithoutFamilyHeadNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFamilyHeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus
    familyMembers?: UserUncheckedUpdateManyWithoutFamilyHeadNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutFamilyHeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    periodCovered?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    periodCovered?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    periodCovered?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisciplineCategoryCreateManyDisciplineInput = {
    id?: string
    name: string
    description?: string | null
    displayOrder?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DisciplineQuickLinkCreateManyDisciplineInput = {
    id?: string
    title: string
    url?: string | null
    icon?: string | null
    displayOrder?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsArticleCreateManyDisciplineInput = {
    id?: string
    title: string
    slug: string
    category: string
    author?: string | null
    publicationDate?: Date | string
    status?: $Enums.NewsStatus
    summary?: string | null
    excerpt?: string | null
    content?: string | null
    imageUrl?: string | null
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventCreateManyDisciplineInput = {
    id?: string
    title: string
    description?: string | null
    type: $Enums.EventType
    status?: $Enums.EventStatus
    eventDate: Date | string
    startTime?: string | null
    endTime?: string | null
    location: string
    address?: string | null
    isPublic?: boolean
    registrationRequired?: boolean
    registrationDeadline?: Date | string | null
    homeTeam?: string | null
    awayTeam?: string | null
    result?: string | null
    score?: string | null
    imageUrl?: string | null
    externalUrl?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DisciplineCategoryUpdateWithoutDisciplineInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisciplineCategoryUncheckedUpdateWithoutDisciplineInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisciplineCategoryUncheckedUpdateManyWithoutDisciplineInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisciplineQuickLinkUpdateWithoutDisciplineInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisciplineQuickLinkUncheckedUpdateWithoutDisciplineInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisciplineQuickLinkUncheckedUpdateManyWithoutDisciplineInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsArticleUpdateWithoutDisciplineInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    publicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumNewsStatusFieldUpdateOperationsInput | $Enums.NewsStatus
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsArticleUncheckedUpdateWithoutDisciplineInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    publicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumNewsStatusFieldUpdateOperationsInput | $Enums.NewsStatus
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsArticleUncheckedUpdateManyWithoutDisciplineInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    publicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumNewsStatusFieldUpdateOperationsInput | $Enums.NewsStatus
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUpdateWithoutDisciplineInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    registrationRequired?: BoolFieldUpdateOperationsInput | boolean
    registrationDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    homeTeam?: NullableStringFieldUpdateOperationsInput | string | null
    awayTeam?: NullableStringFieldUpdateOperationsInput | string | null
    result?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateWithoutDisciplineInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    registrationRequired?: BoolFieldUpdateOperationsInput | boolean
    registrationDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    homeTeam?: NullableStringFieldUpdateOperationsInput | string | null
    awayTeam?: NullableStringFieldUpdateOperationsInput | string | null
    result?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyWithoutDisciplineInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    registrationRequired?: BoolFieldUpdateOperationsInput | boolean
    registrationDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    homeTeam?: NullableStringFieldUpdateOperationsInput | string | null
    awayTeam?: NullableStringFieldUpdateOperationsInput | string | null
    result?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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