import jwt from "jsonwebtoken";

class JWTToken {
    private secret: string;

    constructor() {
        this.secret = process.env.JWT_SECRET || "rahasasiasekalimasee";
    }

    public static generateToken = async (object: string): Promise<string> => {
        return await jwt.sign(object, this.secret);
    }

}

export default JWTToken