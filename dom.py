# Python DOM example
import xml.dom.minidom as m
doc = m.parse(r"C:\NewReact\chap1.xml")
doc.nodeName # DOM property of document object
p_list = doc.getElementsByTagName("para")