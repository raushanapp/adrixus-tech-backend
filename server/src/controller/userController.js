const User = require("../model/userModel");

const user = async (req, res) => {
    const { first_name,sort,page,limit } = req.query;
    const queryObject = {};

    if (first_name) {
        queryObject.first_name = first_name;
        console.log(queryObject)
    }
    let apiData= User.find(queryObject)
    if (sort) {
        let sortFix = sort.replace(",", " ");
        apiData = apiData.sort(sortFix);
      //    console.log(sort)
    }
    // pagination 
    if (page && limit) {
        queryObject.page=page
        queryObject.limit=limit
    }
    let page_no=Number(queryObject.page)||1;
    let total_limit=Number(queryObject.limit)||10;
    let skip = (page_no - 1) * total_limit;
    apiData = apiData.skip(skip).limit(total_limit);
    console.log(queryObject)

    try {
        const myUser = await apiData;
        return res.status(200).json({users:myUser,total:myUser.length})

        
    } catch (err) {
        return res.status(400).send(err);
    }
}

module.exports = user;

