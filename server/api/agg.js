let pipeline = [
  { $match: {} },
  {
    $project: {
      name: '$name',
      stage: '$stage',
      source: '$source',
      sourceSite: '$sourceSite'
    }
  },
  { $group: {} },
  { $sort: {} }
];

module.exports = pipeline;
