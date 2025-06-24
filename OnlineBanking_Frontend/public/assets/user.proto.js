/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const userDataReq = $root.userDataReq = (() => {

    /**
     * Properties of a userDataReq.
     * @exports IuserDataReq
     * @interface IuserDataReq
     * @property {string|null} [Name] userDataReq Name
     * @property {string|null} [Email] userDataReq Email
     * @property {string|null} [Password] userDataReq Password
     * @property {string|null} [Phone] userDataReq Phone
     */

    /**
     * Constructs a new userDataReq.
     * @exports userDataReq
     * @classdesc Represents a userDataReq.
     * @implements IuserDataReq
     * @constructor
     * @param {IuserDataReq=} [properties] Properties to set
     */
    function userDataReq(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * userDataReq Name.
     * @member {string} Name
     * @memberof userDataReq
     * @instance
     */
    userDataReq.prototype.Name = "";

    /**
     * userDataReq Email.
     * @member {string} Email
     * @memberof userDataReq
     * @instance
     */
    userDataReq.prototype.Email = "";

    /**
     * userDataReq Password.
     * @member {string} Password
     * @memberof userDataReq
     * @instance
     */
    userDataReq.prototype.Password = "";

    /**
     * userDataReq Phone.
     * @member {string} Phone
     * @memberof userDataReq
     * @instance
     */
    userDataReq.prototype.Phone = "";

    /**
     * Creates a new userDataReq instance using the specified properties.
     * @function create
     * @memberof userDataReq
     * @static
     * @param {IuserDataReq=} [properties] Properties to set
     * @returns {userDataReq} userDataReq instance
     */
    userDataReq.create = function create(properties) {
        return new userDataReq(properties);
    };

    /**
     * Encodes the specified userDataReq message. Does not implicitly {@link userDataReq.verify|verify} messages.
     * @function encode
     * @memberof userDataReq
     * @static
     * @param {IuserDataReq} message userDataReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    userDataReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Name != null && Object.hasOwnProperty.call(message, "Name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.Name);
        if (message.Email != null && Object.hasOwnProperty.call(message, "Email"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.Email);
        if (message.Password != null && Object.hasOwnProperty.call(message, "Password"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.Password);
        if (message.Phone != null && Object.hasOwnProperty.call(message, "Phone"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.Phone);
        return writer;
    };

    /**
     * Encodes the specified userDataReq message, length delimited. Does not implicitly {@link userDataReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof userDataReq
     * @static
     * @param {IuserDataReq} message userDataReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    userDataReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a userDataReq message from the specified reader or buffer.
     * @function decode
     * @memberof userDataReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {userDataReq} userDataReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    userDataReq.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.userDataReq();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.Name = reader.string();
                    break;
                }
            case 2: {
                    message.Email = reader.string();
                    break;
                }
            case 3: {
                    message.Password = reader.string();
                    break;
                }
            case 4: {
                    message.Phone = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a userDataReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof userDataReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {userDataReq} userDataReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    userDataReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a userDataReq message.
     * @function verify
     * @memberof userDataReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    userDataReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Name != null && message.hasOwnProperty("Name"))
            if (!$util.isString(message.Name))
                return "Name: string expected";
        if (message.Email != null && message.hasOwnProperty("Email"))
            if (!$util.isString(message.Email))
                return "Email: string expected";
        if (message.Password != null && message.hasOwnProperty("Password"))
            if (!$util.isString(message.Password))
                return "Password: string expected";
        if (message.Phone != null && message.hasOwnProperty("Phone"))
            if (!$util.isString(message.Phone))
                return "Phone: string expected";
        return null;
    };

    /**
     * Creates a userDataReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof userDataReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {userDataReq} userDataReq
     */
    userDataReq.fromObject = function fromObject(object) {
        if (object instanceof $root.userDataReq)
            return object;
        let message = new $root.userDataReq();
        if (object.Name != null)
            message.Name = String(object.Name);
        if (object.Email != null)
            message.Email = String(object.Email);
        if (object.Password != null)
            message.Password = String(object.Password);
        if (object.Phone != null)
            message.Phone = String(object.Phone);
        return message;
    };

    /**
     * Creates a plain object from a userDataReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof userDataReq
     * @static
     * @param {userDataReq} message userDataReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    userDataReq.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.Name = "";
            object.Email = "";
            object.Password = "";
            object.Phone = "";
        }
        if (message.Name != null && message.hasOwnProperty("Name"))
            object.Name = message.Name;
        if (message.Email != null && message.hasOwnProperty("Email"))
            object.Email = message.Email;
        if (message.Password != null && message.hasOwnProperty("Password"))
            object.Password = message.Password;
        if (message.Phone != null && message.hasOwnProperty("Phone"))
            object.Phone = message.Phone;
        return object;
    };

    /**
     * Converts this userDataReq to JSON.
     * @function toJSON
     * @memberof userDataReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    userDataReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for userDataReq
     * @function getTypeUrl
     * @memberof userDataReq
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    userDataReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/userDataReq";
    };

    return userDataReq;
})();

export { $root as default };
