-- 1 - Name of window with AD_Window_ID = ‘100’
SELECT 
  Name 
FROM 
  AD_Window 
WHERE 
  AD_Window_ID = '100';

-- 2 - Update window with AD_Window_ID = ‘100’ appending ‘--’ to the name of window with AD_Window_ID = ‘100’
UPDATE 
  AD_Window 
SET 
  Name = Name || '--' 
WHERE 
  AD_Window_ID = '100';

-- 3 - List of all tabs in window with AD_Window_ID = ‘100’
SELECT 
  * 
FROM 
  AD_Window 
WHERE 
  AD_Window_ID = '100';

-- 4 - List of tab name + field name of all tabs in AD_Window_ID = ‘100’ sorted by tab name and field name
SELECT 
  AD_Tab.Name AS TabName, 
  AD_Field.Name AS FieldName 
FROM 
  AD_Tab 
  JOIN AD_Field ON AD_Tab.AD_Tab_ID = AD_Field.AD_Tab_ID 
WHERE 
  AD_Tab.AD_Window_ID = '100' 
ORDER BY 
  TabName, 
  FieldName;

-- 5 - Name and number of tabs of all windows
SELECT 
  AD_Window.Name as WindowName, 
  COUNT(AD_Tab.AD_Tab_ID) as NumberOfTabs 
FROM 
  AD_Window 
  JOIN AD_Tab ON AD_Window.AD_Window_ID = AD_Tab.AD_Window_ID 
GROUP BY 
  WindowName;

-- 6 - List of all windows with its number of fields, sorting by number of fields starting by the windows with a higher number of them
SELECT 
  AD_Window.Name as WindowName, 
  COUNT(AD_Field.AD_Field_ID) as FieldCount 
FROM 
  AD_Window 
  JOIN AD_Tab ON AD_Window.AD_Window_ID = AD_Tab.AD_Window_ID 
  JOIN AD_Field ON AD_Tab.AD_Tab_ID = AD_Field.AD_Tab_ID 
GROUP BY 
  AD_Window.AD_Window_ID, 
  AD_Window.Name 
ORDER BY 
  FieldCount DESC;

-- 7 - Windows with more than 5 tabs
SELECT 
  AD_Window.Name as WindowName 
FROM 
  AD_Window 
  JOIN (
    SELECT 
      AD_Window_ID, 
      COUNT(AD_Tab_ID) as TabCount 
    FROM 
      AD_Tab 
    GROUP BY 
      AD_Window_ID
  ) as TabCounts ON TabCounts.AD_Window_ID = AD_Window.AD_Window_ID 
WHERE 
  TabCounts.TabCount > 5;