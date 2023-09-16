export function parseMd(md) {
  //ul
  md = md.replace(/^\s*\s\-\s{1}/gm, "\n<ul>\n- ");
  md = md.replace(/^(\-{1}\s{1}.+)\s*\n(?!\-{1}\s{1})/gm, "$1\n</ul>\n\n");
  md = md.replace(/^\-{1}\s{1}(.+)/gm, "<li>$1</li>");

  //ol
  md = md.replace(/^\s*\n\d\./gm, "<ol>\n1.");
  md = md.replace(/^(\d\..+)\s*\n([^\d\.])/gm, "$1\n</ol>\n$2");
  md = md.replace(/^\d\.(.+)/gm, "<li>$1</li>");

  md = md.replace(/^\s*\n\|{1}\s{1}/gm, "<table><thead>\n| ");
  md = md.replace(
    /^(\|{1}\s{1}.+)\s*\n(?!\|{1}\s{1})/gm,
    "$1\n</tbody></table>\n\n"
  );
  md = md.replace(/^\|{1}\s{1}(.+)\|/gm, function (match, content) {
    let html = "";
    var rows = content.trim().split(/\s*\|\s*/);
    html += "<tr>";
    rows.forEach(function (row) {
      console.log(row);
      html += "<td>" + row + "</td>";
    });
    html += "</tr>";
    return html;
  });
  md = md.replace(/<tr><td>\-(.+)/gm, "</thead><tbody>");

  //blockquote
  md = md.replace(/^\>{1}\s{1}(.+)/gm, "<blockquote>$1</blockquote>");

  //h
  md = md.replace(/[\#]{6}\s{1}(.+)/g, "<h6>$1</h6>");
  md = md.replace(/[\#]{5}\s{1}(.+)/g, "<h5>$1</h5>");
  md = md.replace(/[\#]{4}\s{1}(.+)/g, "<h4>$1</h4>");
  md = md.replace(/[\#]{3}\s{1}(.+)/g, "<h3>$1</h3>");
  md = md.replace(/[\#]{2}\s{1}(.+)/g, "<h2>$1</h2><hr/>");
  md = md.replace(/[\#]{1}\s{1}(.+)/g, "<h1>$1</h1><hr/>");

  //images
  md = md.replace(/\!\[([^\]]+)\]\(([^\)]+)\)/g, '<img src="$2" alt="$1" />');

  //links
  md = md.replace(
    /[\[]{1}([^\]]+)[\]]{1}[\(]{1}([^\)\"]+)(\"(.+)\")?[\)]{1}/g,
    '<a href="$2" title="$4">$1</a>'
  );

  //pre
  md = md.replace(/^\s*\n\`{3}(([^\s]+))?/gm, '<pre class="$2">');
  md = md.replace(/^\`{3}\s*\n/gm, "</pre>\n");

  md = md.replace(/^(?!<)(.+)$/gm, function (match) {
    if (/<\/?[a-z][\s\S]*>/i.test(match)) {
      return match;
    } else {
      return "<p>" + match + "</p>";
    }
  });

  //font styles
  md = md.replace(/[\*]{2}(?!\s)([^\*]+)(?!\s)[\*]{2}/g, "<b>$1</b>");
  md = md.replace(/[\*]{1}(?!\s)([^\*]+)(?!\s)[\*]{1}/g, "<i>$1</i>");
  md = md.replace(/[\~]{2}([^\~]+)[\~]{2}/g, "<del>$1</del>");
  md = md.replace(/[\_]{2}(?!\s)([^\_]+)(?!\s)[\_]{2}/g, "<u>$1</u>");

  //code
  md = md.replace(/[\`]{1}([^\`]+)[\`]{1}/g, "<code>$1</code>");

  md = md.replace(/\s+\n/g, "");
  md = md.replace(/<\/\.>|<\.\/>/g, "\n");

  return md;
}
