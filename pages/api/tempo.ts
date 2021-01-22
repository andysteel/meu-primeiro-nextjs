import { NextApiRequest, NextApiResponse } from "next";

const tempo = (req: NextApiRequest, res: NextApiResponse) => {

    res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate')
    res.json({
        date: new Date().toUTCString()
    })
}

export default tempo;