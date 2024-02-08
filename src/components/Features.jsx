const Features = () => {
  return (
    <section className="bg-white ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-800 ">
            Designed for professionals like yours
          </h2>
          <p className="text-gray-500 sm:text-xl ">
            Here at Shortify, we focus on simplifying the way you share links,
            making it effortless to connect with your audience and track your
            online presence.
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACpUlEQVR4nO2YMWsUQRiGn4A2FiYe7KJYqI0WYnJCBGNhl1IQ/AF2dsZaezsjKoiN2FgodhK0kkAUCepF1BMURMEgFpp0mhRGTgbeleGYze7dzuzthnthONiZ2Z3n5v32m/1gKKdeAItsAXXUaq9OHUCeAi0gLgBi5i4BCwxQL7XI9iYwm4HEmttRLKVpDLgJfAZWgcfAMQ/rdy4kDSYNJM/c7nF2Wwcmy4RxgfQD8R4YB3YBd3XtkU+Q7gcau9l6pliy9apHiHbXuIau//TM8f/BrZw5YzHjJZG1Y031faLCyoKIZTPTf4MaQ7St/lEqqAh4p0V+AHb32F8JDSF60QhwSVn1D/ADmAcuAgcoNybiIhC3HFk1aRvAfWB/lSHQ683caA04BWwH9gJnlFX/qv8XcJaKQhit6GYPtTvd2gfcs3boAn4hTHsCTFBQ09qNjizmgjE6p90xMXSyAITRnMPCa8rmpcBc1phvwM4+IYxmBHMkxAFxOgfMNuv75HqfEC41fB8Q88Aclb02LCsUDdym5n7Bo2wYk1tcuqr+eQ8Q9gHxN/AAOIwnndaNv6bsyphsYMZ8L/gKDRb4aPHLuunxlDHnrQcXyQNBA9+2z2xKv0mcz1VQKJzMQgb+VIa9QqnpO/Dz2Mu34lCBn2Uv35pLCfzJutlrJlTg2/YyUGWr4TPwE3uZ37I14bMklNhrueS3V2SdGLyUhEYUI2XaKw5VEpot0V5RyJLQlHWu8pnFCf3567JXy6qYx3WESNvyPfhTVHaFMQTMwMqkPmEGXuuNPMAMHMJHcJYW2CEXZM95XQUI18I+AgdJ1yGNqcxOdCvWv5t8P1xTEh1VO6E62LrGLFURItEO4I5V9HY103dbYyuvcZ3N3qpAbtob4Io+mIba0voHHtNc43suG8QAAAAASUVORK5CYII=" />
            </div>
            <h3 className="mb-2 text-xl text-gray-800 font-bold ">Easy</h3>
            <p className="text-gray-500 ">
              Simply input your long link to swiftly generate a shortened URL
              with ShortifyHub's user-friendly interface, ensuring a hassle-free
              experience for users seeking quick solutions.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD2UlEQVR4nO2ZaYiNURjHf4xlhsm+Z19CyEgZspel7JTtG8lSGiJbRPYl8kGyJEoSkS1ZskT2pYjsZBnM2Neyc3X4v3UM7n3fd9573dH91f0wd855znnO8jz/81xIkCBBggT/AbWAmcAx4BkQAj4Bz4FLwFZgHjAYaAGUJs5IBpYAnzV5L5+ncnw1MAHoBdQDCsXaiZKaiLP6q4CO1monAaWANKA/MBVYD5wF3oRx8DNwA9gJLAKGAW2BstFwIj+wRwPfBRr7sFEJaA8MBxYDu4FbwJcwTp4AmgTpyGgZfgxUDdIwP49WA6APMAlYA5wE3mrM10DdIAYyR+eljHYjdhQFNmncDUEYnCZje4k9dTT2w9waKgI8kTFzAcNRHBgHHAaygRf63ASOAGuBKUA/BQRjOxINNXZmbh0ZKUPmzIajsibsNSRnAgeA5cAYoAtQGygAVND/QgrZvjHGbstQ7wht16ndceWH6grXJZUr2gFDgPlKlpeBDy6dva2I55uBMnRN4Tccz9W2nAf7SUBNoDOQASwF9im8fwXeA1uAauSSc5rcUBdtndUtTDDkd7F4ruikiWW5nFym2ptjFFcc1MRMgnLDZrUfG6ZNfWCyMvp1K+GFJGHMvdmoxJgShBMtrYxawmWfPupzJ0dYzadAcdxjNMsCeuTWkUMyNsfjxXXu1FapgdbSSs7kniiM9pXMMUraoRjQSCH4vNobDdbVrxMdrd0wStYLDay3if15KKFoTzzSosxWX7M4njHH4JQMzPJjQOJuO/BRYXQ6kOpTZ4UUgj3TQ51f+diNoEgFaliK4p5XAyZmX1Bn8yCKBU218yZCPtIu5jyWXu7pDwaoY7a2NZqYp8CZMK/FxxKZg3TcXZOip6YxNCJ68/8hX3ZZk34BrAB6AlWCUAXLZfiShGI0SFNucO7geJ9BIGIi+6QzGw0aa/VDOjJG8gdKVWuAaF3wssr2ISnZwEs/ScBRDXBQfwdNCSsvnQhQGf/CXEvTlCd4mgNXrYeRee0FTi/gm0JdpHe4F0yo7KDI9E1OXFRECpy60lGRJLdXekqGO6H1nWq/bgoMnklViA2ytGMu8w7LgQd6c5QhitSzVs1I5AUeFOmfaCVl6+SGjCjmod8oCExU3gip9toG7/STMjU2TquI8E9IB6742B1zoWdYl3lZLHfhbySrzuRUw6/Iwb9RSD8TOM6PIs5Is56Xpp608g/RxiSzbWpjigbdiVMK6jXn7M5NvbmdaLdf35tCXDPyAOk57s5C6+1wPx7rVl7ujiMzzA+geZJ07Y5JohXJ4yT/w0JEggTEkO+3o1IXY8EsowAAAABJRU5ErkJggg==" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-800">Shortened</h3>
            <p className="text-gray-500 ">
              Regardless of the original link's length, ShortifyHub efficiently
              shortens it, accommodating any URL size without compromising speed
              or effectiveness in generating concise links.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 0">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEBElEQVR4nO2azW+UVRTGfw11OoYizgDiQhNZEoyyFpeNQhojuEPLToIbPlLZomz4sLBq0oS/Q20IEDVNULAgtiz4ELqxwIIPFyqtTWuGnPC8yUmd6XvfO3dmiuFJbvpxzz333HvPPfecZwae4/+LKrAdOAGMAjeAP4A5Nfv9uvpM5kOgwjJBGdgFnAX+BWoF2wJwBhgAejqxgBeBz4F7zqh/gO+BQzqZjdrxF9Qq+p/1fQH8oDHZ+LvAoDanLegHppwBl4BPgdURul4GdgOXnb7bwDZaCNupU27CX4D3EurfCvzq9I+04nReleE2wWNgL7Ai9SQ81bkfmHGnvT6V8g067pqizpu0Hm8BNzXnLdnQFNY5hePAWtqHCnBec0/JK6JQdu70E7CS9mMlcNG5WdSdOeXcyR67IijL138G/lYzg/ZFvBdrnFdYACgcYrOLXfROvA5cXeIRnABei7gzMxpv0S34scveCYtORU8iW8SkNqRXrd/1TUSczAF3+YNc7KB7J1ZETjYp4xdjVROb1K0NqGmeJVF2aUfMYzeusbb7jbBdMnZnimKbxt7JO9EBFyFi8JfG1zsNfyom82eE/i4XST9eSvCchCx3ikF2oVPJ1cMejT1dt1chdkEZaUwC2K6FVFTfzDeyc4eUfxc5QbsWYhjT+A+og5PqtHoiFCXgq0V1SdFmdcgx6QrFYY0dqtc5qk4rQUNxvIkFLG5HC8ybec839Tp/U6dVcaG4qzHvEI8t7mRCsUljjBf4Dx6ps0he1ayvx+pZK/n79Trn1Fl6BhbS43iCtiykX6/wdE4dnnQhD9VpaXMo8gyYdjK/N6GnkWs9SHXZ8wzwbMtUE3oKXfZvI8JvngF9TqavCT2Nwu/XSz2IRp6FIsSAVDLBD2KWXhsDGIoQA6zcvZBAT3CKUnFJozGAyzX8Vl3S+FIjoTNSuLsFBqTS85lkLaVqiE8kZFxskRTF0oxYvCsd9t6EFFZXJL8zr9TNjHs/QPGxhEnjkQLsznQIeTEo4SsB5ENJi8kWH9PuaBF5GUW3SI2a+LFclB3XayTbcsGgbLpZhErK2IoZkWOdxmZgNpbdGXE7UCT/So11IuXMluEYBWXRQhkH1QkSu1cPak0/e5rZjRtSNK6/24Uq8KPmvp3iA58N7mjNzd6mPXfilua0rPyNVIrXOzebEfdq4TA1uhWdZp07vZJ6krILADURyqk+fe3SYzfp9A+3+rP3re7Ya+Ji90R+i6Gq3ClLO2pypZSfFueezgG9ypkBc0qvv1Ths0lhu6S2Rh8afSSZMccTZGnHvk59A6JHrPhplQBF05N5ZbE7O7WAelitQmdIDOB1ERrZl2rs92sqT4ck27CeeA6ecTwBhN3E7TcZQfQAAAAASUVORK5CYII=" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-800">Secure</h3>
            <p className="text-gray-500 ">
              Prioritizing user safety, ShortifyHub employs HTTPS protocol and
              robust data encryption, guaranteeing swift and secure URL
              shortening services to safeguard sensitive information
              effectively.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB90lEQVR4nO2Yu0pDQRCGPwVtBAvBYxRB7KxsfAULg6WFVhYWtkIaX8HWR/AF7LT3gigWXlC0sjCCqEEsBBvNysoEhpDEzSYn2Q3nhy0OO7PsNzM7e1hIXwfAOT0gIyN6mQzEM2KxD3oOJFaZDCQwmSwjgclkGQlMJstIB7UIPAFFIB9zRopqf49pgrhEzFfLQLlTIC4Ra1aDwLZa903WXkgLZK0qYnYUgL4WICaBE1nrC1h38PEGGQJ2lF9Jolb53gcSD4h54FXWeADmHP28QGaAaxWxDTW3BLzL3EsTZ8ZmcBP4Ft89YMTR1wtkFfgU23tgtobNFHAsNmWpdVvz9TQM7Cr7LaC/CQhnkEpXKim7HSmvehqQDf2I/SkwXcNuTkrISEnZ0vKRE4juSmU54K6yG3sW3w9gRc2tS2kaOdz2kPuqaRCf9prI4detVGf3v9JrG0heYBr1cZfDXKhq02W58Noh0+lflDQuz66AtCO70f40uigDCU0mK63AZLKMBCbTsxkxkQ96BiRtxV66f8opkFEi1Rhwo0DuBCxqCKNgxolEOdlwZeMawgigz3NR1zJhX1omFEii5oLOzFgNiOqulVTZjIdeTjk1dwQc1rG9lQAEnYlGSjx8goMIEuaqxTtCl9llCvtz1hlw0eJFZ30thH1a9dYv7/XxAOuw1poAAAAASUVORK5CYII=" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-800">Statistics</h3>
            <p className="text-gray-500 ">
              Track the performance of your shortened URLs effortlessly by
              monitoring click counts, empowering users with valuable insights
              into audience engagement and optimizing link sharing strategies
              accordingly.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
              <img src="data:image/png;base64,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" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-800">Reliable</h3>
            <p className="text-gray-500 ">
              With a commitment to quality, ShortifyHub promptly eliminates
              links associated with spam, viruses, or malware, ensuring a
              trustworthy platform where users can confidently share content
              without compromising their devices' security.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 d">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABDCAYAAADHyrhzAAAACXBIWXMAAAsTAAALEwEAmpwYAAACLElEQVR4nO2YT6hMURzHT1hYyEJZaqTL/X2/v5mSYiNN8qI8ZaG3VVKyULISSytihZIlZaMs/S1LSlmxJSULxeKlLJSiM3Nj3rjMfXfu4b7n+6lfTfeeOefMZ8695/x+IQghhBBCCCGEEEIIIYQQojlWkJwj7VjqcM8PxfFCWwGwx4lvfy083x3airsdGEwSdn+4QtJE7D+O0zWbDUtAxuWk4wBXWi+jazYrGf9IRlyJoa0A2L8sZWzNsvW93uZN04S7b0gxNwAHHTjv7kjR/wIAOImvTWx/8UwQauJmh0m75sD1CnG23++vCk0DYKb4MS8H/0CdoN0dPjI4V3cehH1ejHgz25ZMBokbdfsgeWRaGQ774sSHSY8jgQfD+XJHWM4yCHs/cSzgjmQUSMYIkvEbGSTXkHbRgUuknY67EWknwv/4zgAwQ+KFA1ejDAduEfa2NTJIO0XgdeUgntaV4Z7vixJG7zvscRMyHsXPdWKwVAsZXeA4iedVw2n3WifDm4iSxyQWgUrqFOvG27VCRp7nG4uXz9QBYNdo351OZ7UTn0qO7WdaJYO0m067nSqiZAdOluYwsFdR1C8yiPkKla9nYzIujJ1Qn9SQgXep6pUx8TOzvX/KN+I2ODaf+ZJ2bwg8LPt+TDDjSvx5rciPiI+LltGLaTdwNE01e8vOWPyZ1C7LsrU/Vob79ur9D2sbcyGsjJXzhfcT5CxCCCGEEEIIIYQQQgghRFiqfAez/HvghVdsqgAAAABJRU5ErkJggg==" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-800">Devices</h3>
            <p className="text-gray-500 ">
              ShortifyHub's compatibility spans across smartphones, tablets, and
              desktops, enabling seamless access and utilization of shortened
              links on various devices, enhancing user convenience and
              accessibility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
