const service = require("./businesscard.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const hasProperties = require("../errors/hasProperties");
const { P } = require("pino");

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
//try to write validations to see if its includes the number inside using regex
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

async function list(req, res, next) {
  const data = await service.list();
  res.json({ data });
}

async function create(req, res, next) {
  const data = await service.create(req.body.data);
  res.status(201).json({ data });
}

function read(req, res, next) {
  console.log("line 119", res.locals.businesscard)
  res.json({ data: res.locals.businesscard });
}

async function update(req, res, next) {
  const updatedBusinessCard = {
    ...req.body.data,
    businesscard_id: res.locals.businesscard.businesscard_id,
  };
  console.log(updatedBusinessCard)
  const data = await service.update(updatedBusinessCard);
  console.log(data)
  res.json({ data });
}

module.exports = {
  list: asyncErrorBoundary(list),
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
};
