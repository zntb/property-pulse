import { Document, ObjectId } from 'mongoose';

// User Type
export interface IUser extends Document {
  email: string;
  username: string;
  image?: string;
  bookmarks: IProperty[];
  createdAt?: Date;
  updatedAt?: Date;
}

// Property Type
export interface IProperty extends Document {
  owner: ObjectId;
  name: string;
  type: string;
  description?: string;
  location: {
    street?: string;
    city?: string;
    state?: string;
    zipcode?: string;
  };
  beds: number;
  baths: number;
  square_feet: number;
  amenities: string[];
  rates: {
    nightly?: number;
    weekly?: number;
    monthly?: number;
  };
  seller_info: {
    name?: string;
    email?: string;
    phone?: string;
  };
  images: string[];
  is_featured: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

// Message Type
export interface IMessage extends Document {
  sender: ObjectId;
  recipient: ObjectId;
  property: IProperty;
  name: string;
  email: string;
  phone?: string;
  body?: string;
  read: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
