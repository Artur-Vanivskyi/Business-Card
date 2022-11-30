const service = require("./businesscard.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const hasProperties = require("../errors/hasProperties");

// ---------- VALIDATIONS ---------- //

const VALID_PROPERTIES = [
  "first_name",
  "last_name",
  "job_title",
  "mobile_number",
  "email",
  "company_name",
  "comments",
];

const REQUIRED_PROPERTIES = [
  "first_name",
  "last_name",
  "job_title",
  "mobile_number",
  "email",
  "company_name",
];

function hasOnlyValidProperties(req, res, next) {
  const { data = {} } = req.body;
  const invalidStatuses = Object.keys(data).filter(
    (field) => !VALID_PROPERTIES.includes(field)
  );
  if (invalidStatuses.length) {
    return next({
      status: 400,
      message: `Invalid field(s): ${invalidStatuses.join(", ")}`,
    });
  }
  next();
}

const hasRequiredProperties = hasProperties(...REQUIRED_PROPERTIES);

async function businesscardExist(req, res, next) {
  const { businesscard_id } = req.params;
  const businesscard = await service.read(businesscard_id);
  if (businesscard) {
    res.locals.businesscard = businesscard;
    return next();
  }
  next({
    status: 404,
    message: `BusinessCard ID ${businesscard_id} does not exist`,
  });
}

// ---------- MUST BE A STRING ---------- //

function fistNameMustBeString(req, res, next) {
  const { first_name } = req.body.data;
  if (typeof first_name === "string") {
    return next();
  }
  next({
    status: 400,
    message: `First name must contain letters`,
  });
}

function lastNameMustBeString(req, res, next) {
  const { last_name } = req.body.data;
  if (typeof last_name === "string") {
    return next();
  }
  next({
    status: 400,
    message: `Last name must contain letters`,
  });
}

// ---------- CONTAINS NUMBERS AND CHARACTERS ---------- //

function inputString(string) {
  let regex = /^[a-zA-Z]+$/;
  return regex.test(string);
}

function containLetters(req, res, next) {
  const { first_name, last_name } = req.body.data;
  if (!inputString(first_name)) {
    return next({
      status: 400,
      message: "Field must contains only letters",
    });
  }
  if (!inputString(last_name)) {
    return next({
      status: 400,
      message: "Field must contain only letters",
    });
  }
  next();
}

// ---------- FUNCTIONS ---------- //

// async function list(req, res, next) {
//   const { mobile_number } = req.query;
//   const data = await (mobile_number
//     ? service.search(mobile_number)
//     : service.list());
//   res.json({ data });
// }

// async function list(req, res, next) {
//   const data = await service.list();
//   res.json({ data });
// }


//first name search will be added for frontend connection
async function list(req, res, next) {
  const { first_name, mobile_number } = req.query;
  if (first_name) {
    const data = await service.searchByFirstName(first_name);
    res.json({ data });
  } else if (mobile_number) {
    const data = await service.search(mobile_number);
    res.json({ data });
  } else {
    const data = await service.list();
    res.json({ data });
  }
}

// async function listByFirstName(req, res, next) {
//   const { first_name } = req.query;
//   console.log(first_name);
//   const data = await service.searchByFirstName(first_name);
//   res.json({ data });
// }

// async function listSearch(req, res, next) {
//   const { first_name, mobile_number } = req.query;
//   const data = await (mobile_number
//     ? service.search(mobile_number)
//     : service.searchByFirstName(first_name));
//   res.json({ data });
// }

async function create(req, res, next) {
  const data = await service.create(req.body.data);
  res.status(201).json({ data });
}

function read(req, res, next) {
  res.json({ data: res.locals.businesscard });
}

async function update(req, res, next) {
  const updatedBusinessCard = {
    ...req.body.data,
    businesscard_id: res.locals.businesscard.businesscard_id,
  };
  const data = await service.update(updatedBusinessCard);
  res.json({ data });
}

async function destroy(req, res, next) {
  const { businesscard_id } = req.params;
  const data = await service.destroy(businesscard_id);
  const message = "hello";
  res.sendStatus(204);
}

module.exports = {
  list: asyncErrorBoundary(list),
  //listByFirstName: asyncErrorBoundary(listByFirstName),
  //listSearch: asyncErrorBoundary(listSearch),
  create: [
    hasOnlyValidProperties,
    hasRequiredProperties,
    fistNameMustBeString,
    lastNameMustBeString,
    containLetters,
    asyncErrorBoundary(create),
  ],
  read: [asyncErrorBoundary(businesscardExist), read],
  update: [
    asyncErrorBoundary(businesscardExist),
    hasRequiredProperties,
    asyncErrorBoundary(update),
  ],
  delete: [asyncErrorBoundary(businesscardExist), asyncErrorBoundary(destroy)],
};
