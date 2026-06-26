import { FeatureFlag } from "./flag.model.js";

export const findByOrg = (organizationId) =>
  FeatureFlag.find({ organizationId }).sort({ createdAt: -1 });

export const findFlagByKey = (key, organizationId) => {
  return FeatureFlag.findOne({ key, organizationId });
};

export const create = (data) => FeatureFlag.create(data);

export const update = (id, organizationId, data) =>
  FeatureFlag.findOneAndUpdate(
    { _id: id, organizationId }, // scoped to org — prevents cross-org tampering
    data,
    { returnDocument: "after" },
  );

export const remove = (id, organizationId) =>
  FeatureFlag.findOneAndDelete({
    _id: id,
    organizationId, // scoped to org
  });
