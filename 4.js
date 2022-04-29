const match = (candidate, job) => {
  if (!job.maxSalary || !candidate.minSalary) throw TypeError('Missing salary');
  return job.maxSalary >= (candidate.minSalary * .9);
};