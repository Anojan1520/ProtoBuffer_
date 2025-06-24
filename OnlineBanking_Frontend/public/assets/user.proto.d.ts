import * as $protobuf from "protobufjs";
import Long = require("long");
/** Properties of a userDataReq. */
export interface IuserDataReq {

    /** userDataReq Name */
    Name?: (string|null);

    /** userDataReq Email */
    Email?: (string|null);

    /** userDataReq Password */
    Password?: (string|null);

    /** userDataReq Phone */
    Phone?: (string|null);
}

/** Represents a userDataReq. */
export class userDataReq implements IuserDataReq {

    /**
     * Constructs a new userDataReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IuserDataReq);

    /** userDataReq Name. */
    public Name: string;

    /** userDataReq Email. */
    public Email: string;

    /** userDataReq Password. */
    public Password: string;

    /** userDataReq Phone. */
    public Phone: string;

    /**
     * Creates a new userDataReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns userDataReq instance
     */
    public static create(properties?: IuserDataReq): userDataReq;

    /**
     * Encodes the specified userDataReq message. Does not implicitly {@link userDataReq.verify|verify} messages.
     * @param message userDataReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IuserDataReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified userDataReq message, length delimited. Does not implicitly {@link userDataReq.verify|verify} messages.
     * @param message userDataReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IuserDataReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a userDataReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns userDataReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): userDataReq;

    /**
     * Decodes a userDataReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns userDataReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): userDataReq;

    /**
     * Verifies a userDataReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a userDataReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns userDataReq
     */
    public static fromObject(object: { [k: string]: any }): userDataReq;

    /**
     * Creates a plain object from a userDataReq message. Also converts values to other types if specified.
     * @param message userDataReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: userDataReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this userDataReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for userDataReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}
