const companies = ["Google", "Facebook", "Uber"];

const [comp1, comp2, ...rest] = companies;

// comp1 = 'Google'
// comp2 = 'Facebook'
// rest = ['Uber']

// Another example
const companies2 = [
  { name: "Google", location: "Mountain View" },
  { name: "Facebook", location: "Menlo Park" }
];

const [{ location }] = companies2;
// location = 'Mountain View'

// Another example
const companyLocations = {
  locations: ["Mountain View", "Menlo Park"]
};

const {
  locations: [firstLocation]
} = companyLocations;

// firstLocation = 'Mountain View'
