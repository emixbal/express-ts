import jwt from "jsonwebtoken";

class JWTToken {
    private static secret: string = process.env.JWT_SECRET || "rahasasiasekalimasee";

    public static generateToken = async (object: {}): Promise<string> => {
        return await jwt.sign(object, JWTToken.secret);
    }
}

export default JWTToken;