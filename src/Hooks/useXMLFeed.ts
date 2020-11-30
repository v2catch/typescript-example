import React, { useEffect, useMemo, useState } from 'react';
import { XmlParser, IParserConfiguration } from 'xmlToJsonTs';

const config : IParserConfiguration = {
  removeLineBreaks: true,
  removeComments: true,
  transformTextOnly: true,

};

export const useXMLFeed = <T>( feedURL: string ) : T | null => {

  const [data, setData] = useState<T | null>( null);

  useEffect(() => {

    const fetchFeed = async () => {
      const xmlResp = await fetch(feedURL);
      const xml = await xmlResp.text();

      const parser = new XmlParser();
      setData(parser.toJson(xml, config));
    };


    fetchFeed();
  }, [feedURL]);

  return data;
};
