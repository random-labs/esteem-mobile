export default {
  999: {
    icon: 'compare-arrows',
    textKey: 'points.incoming_transfer_title',
    nameKey: 'points.incoming_transfer',
    descriptionKey: 'points.incoming_transfer_description',
    iconType: 'MaterialIcons',
    point: 0.1,
  },
  998: {
    icon: 'compare-arrows',
    textKey: 'points.outgoing_transfer_title',
    nameKey: 'points.outgoing_transfer',
    descriptionKey: 'points.outgoing_transfer_description',
    iconType: 'MaterialIcons',
    point: 0.1,
  },
  150: {
    icon: 'local-activity',
    textKey: 'points.delegation_title',
    nameKey: 'points.delegation',
    descriptionKey: 'points.delegation_desc',
    iconType: 'MaterialIcons',
    point: 1,
  },
  100: {
    icon: 'pencil',
    textKey: 'points.post_title',
    nameKey: 'points.post',
    descriptionKey: 'points.post_desc',
    iconType: 'MaterialCommunityIcons',
    point: 15,
  },
  110: {
    icon: 'comment-text-outline',
    textKey: 'points.comment_title',
    nameKey: 'points.comment',
    descriptionKey: 'points.comment_desc',
    iconType: 'MaterialCommunityIcons',
    point: 5,
  },
  120: {
    icon: 'upcircleo',
    textKey: 'points.vote_title',
    nameKey: 'points.vote',
    descriptionKey: 'points.vote_desc',
    iconType: 'AntDesign',
    point: 0.3,
  },
  130: {
    icon: 'repeat',
    textKey: 'points.reblog_title',
    nameKey: 'points.reblog',
    descriptionKey: 'points.reblog_desc',
    iconType: 'MaterialIcons',
    point: 1,
  },
  10: {
    icon: 'favorite-border',
    textKey: 'points.checkin_title',
    nameKey: 'points.checkin',
    descriptionKey: 'points.checkin_desc',
    iconType: 'MaterialIcons',
    point: 0.25,
  },
  20: {
    icon: 'person-outline',
    textKey: 'points.login_title',
    nameKey: 'points.login',
    descriptionKey: 'points.login_desc',
    iconType: 'MaterialIcons',
    point: 100,
  },
  30: {
    icon: 'check-all',
    textKey: 'points.checkin_extra_title',
    nameKey: 'points.checkin_extra',
    descriptionKey: 'points.checkin_extra_desc',
    iconType: 'MaterialCommunityIcons',
    point: 10,
  },
};

export const POINTS_KEYS = [
  {
    type: 150,
  },
  {
    type: 100,
  },
  {
    type: 110,
  },
  {
    type: 120,
  },
  {
    type: 130,
  },
  {
    type: 10,
  },
  {
    type: 20,
  },
  {
    type: 30,
  },
];

export const PROMOTE_PRICING = [
  { duration: 1, price: 150 },
  { duration: 2, price: 250 },
  { duration: 3, price: 350 },
  { duration: 7, price: 500 },
  { duration: 14, price: 1000 },
];
export const PROMOTE_DAYS = [1, 2, 3, 7, 14];

export const PROMOTE_STATUS_PENDING = 1;
export const PROMOTE_STATUS_SUCCESS = 2;
export const PROMOTE_STATUS_USER_ERR = 3;
export const PROMOTE_STATUS_INSUFFICIENT_ERR = 4;
export const PROMOTE_STATUS_POST_ERR = 5;
export const PROMOTE_STATUS_POST_DUPLICATE = 6;
export const PROMOTE_STATUS_FORMAT_ERR = 7;

export const PROMOTED_POST_STATUS_ON = 1;
export const PROMOTED_POST_STATUS_EXPIRED = 2;
export const PROMOTED_POST_STATUS_DISABLED = 3;
