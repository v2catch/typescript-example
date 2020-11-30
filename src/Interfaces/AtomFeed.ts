
interface AtomFeed {
  rss: RSS;
}

interface RSS {
  '@attributes': RSSAttributes;
  channel:       Channel;
}

interface RSSAttributes {
  version:            string;
  'xmlns:atom':       string;
  'xmlns:content':    string;
  'xmlns:googleplay': string;
  'xmlns:itunes':     string;
}

interface Channel {
  'atom:link':           AtomLink[];
  generator:             string;
  title:                 string;
  description:           string;
  copyright:             string;
  language:              string;
  pubDate:               string;
  lastBuildDate:         string;
  image:                 Image;
  link:                  string;
  'itunes:type':         string;
  'itunes:summary':      string;
  'itunes:author':       string;
  'itunes:explicit':     ItunesExplicit;
  'itunes:image':        ItunesImage;
  'itunes:new-feed-url': string;
  'itunes:keywords':     string;
  'itunes:owner':        ItunesOwner;
  'itunes:category':     ItunesCategory;
  item:                  Item[];
}

interface AtomLink {
  '@attributes': AtomLinkAttributes;
}

interface AtomLinkAttributes {
  href:   string;
  rel:    string;
  title?: string;
  type?:  string;
  xmlns?: string;
}

interface Image {
  link:  string;
  title: string;
  url:   string;
}

interface Item {
  guid:                 GUID;
  title:                string;
  description:          string;
  pubDate:              string;
  author:               string;
  link:                 string;
  'content:encoded':    ContentEncoded;
  enclosure:            Enclosure;
  'itunes:title':       string;
  'itunes:author':      string;
  'itunes:duration':    string;
  'itunes:summary':     string;
  'itunes:subtitle':    string;
  'itunes:explicit':    ItunesExplicit;
  'itunes:episodeType': ItunesEpisodeType;
  'itunes:episode'?:    string;
  'itunes:image'?:      ItunesImage;
  'itunes:keywords'?:   string;
}

interface ContentEncoded {
  '#cdata-section': CdataSection;
}

interface CdataSection {
}

interface Enclosure {
  '@attributes': EnclosureAttributes;
}

interface EnclosureAttributes {
  length: string;
  type:   Type;
  url:    string;
}

enum Type {
  AudioMPEG = 'audio/mpeg',
}

interface GUID {
  '@attributes': GUIDAttributes;
  '#text':       string;
}

interface GUIDAttributes {
  isPermaLink: string;
}

enum ItunesEpisodeType {
  Bonus = 'bonus',
  Full = 'full',
}

enum ItunesExplicit {
  No = 'no',
  Yes = 'yes',
}

interface ItunesImage {
  '@attributes': ItunesImageAttributes;
}

interface ItunesImageAttributes {
  href: string;
}

interface ItunesCategory {
  '@attributes': ItunesCategoryAttributes;
}

interface ItunesCategoryAttributes {
  text: string;
}

interface ItunesOwner {
  'itunes:name':  string;
  'itunes:email': string;
}


export {
  AtomFeed,
  RSS,
  RSSAttributes,
  Channel,
  AtomLink,
  AtomLinkAttributes,
  Image,
  Item,
  ContentEncoded,
  CdataSection,
  Enclosure,
  EnclosureAttributes,
  Type,
  GUID,
  GUIDAttributes,
  ItunesEpisodeType,
  ItunesExplicit,
  ItunesImage,
  ItunesImageAttributes,
  ItunesCategory,
  ItunesCategoryAttributes,
  ItunesOwner,
};
